import { Resend } from 'resend';

export async function POST(request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, phone, email, company, service, message } = body;

    if (!name || !phone || !email || !service) {
      return Response.json({ error: 'البيانات ناقصة' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Ark Accounting <noreply@ark-accounting.org>',
      to: 'asmaa.abdelsalam@ark-accounting.org',
      subject: `طلب استشارة جديد من ${name} - Ark Accounting`,
      html: `
        <h2>طلب استشارة جديد</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>الموبايل:</strong> ${phone}</p>
        <p><strong>الإيميل:</strong> ${email}</p>
        <p><strong>الشركة:</strong> ${company || 'غير مذكور'}</p>
        <p><strong>الخدمة المطلوبة:</strong> ${service}</p>
        <p><strong>الرسالة:</strong></p>
        <p>${message || 'لا يوجد'}</p>
      `,
    });

    // Resend بيرجع الخطأ كـ object جوه الـ response نفسه، مش دايمًا بيرمي exception
    // فلازم نتأكد منه صراحةً بدل ما نعتمد بس على try/catch
    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message || 'فشل إرسال الإيميل' }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id }, { status: 200 });
  } catch (error) {
    // اطبع الخطأ الحقيقي في Vercel logs عشان تقدر تشوفه بالظبط
    console.error('API /consultation error:', error);
    return Response.json({ error: error?.message || 'حصل خطأ، حاول تاني' }, { status: 500 });
  }
}

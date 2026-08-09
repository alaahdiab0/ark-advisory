import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, service, message } = body;

    if (!name || !phone || !email || !service) {
      return Response.json({ error: 'البيانات ناقصة' }, { status: 400 });
    }

    await resend.emails.send({
      from:  'Ark Accounting <noreply@ark-accounting.org>',
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

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'حصل خطأ، حاول تاني' }, { status: 500 });
  }
}
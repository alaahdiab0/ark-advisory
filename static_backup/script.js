/* ==========================================================================
   HERO IMAGE SLIDER
   ========================================================================== */
(function () {
    const slides   = document.querySelectorAll('.hero-slide');
    const dots     = document.querySelectorAll('.hero-dot');
    const prevBtn  = document.getElementById('heroPrev');
    const nextBtn  = document.getElementById('heroNext');
    const heroSection = document.getElementById('home');
    let current    = 0;
    let timer      = null;
    const INTERVAL = 5000; // 5 seconds

    function goTo(index) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = (index + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    }

    function startAuto() {
        timer = setInterval(() => goTo(current + 1), INTERVAL);
    }

    function stopAuto() {
        clearInterval(timer);
    }

    // Arrow buttons
    if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

    // Dot buttons
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAuto();
            goTo(parseInt(dot.dataset.index));
            startAuto();
        });
    });

    // Pause on hover
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAuto);
        heroSection.addEventListener('mouseleave', startAuto);
    }

    // Keyboard accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  { stopAuto(); goTo(current - 1); startAuto(); }
        if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
    });

    startAuto();
})();

/* ==========================================================================
   NAVIGATION & MOBILE MENU
   ========================================================================== */
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.getElementById('scrollProgress');

// Navbar Scroll Effect & Progress Bar
window.addEventListener('scroll', () => {
    // Progress calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';

    // Scrolled class toggle
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Active Section Link Highlight
    highlightNavLink();
});

// Highlight Active Nav Link
function highlightNavLink() {
    let scrollPosition = window.scrollY + 150;
    
    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop && scrollPosition < (section.offsetTop + section.offsetHeight)) {
            const currentId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

/* ==========================================================================
   THEME TOGGLER (DARK / LIGHT MODE)
   ========================================================================== */
/* ==========================================================================
   SERVICES DROPDOWN TOGGLE
   ========================================================================== */
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
}

/* ==========================================================================
   SCROLL REVEAL & STATS COUNTER ANIMATION
   ========================================================================== */
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // If the revealed element contains stats cards, trigger counter animation
            if (entry.target.classList.contains('stats-section') || entry.target.querySelector('.stat-number')) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(num => animateCounter(num));
            }
            
            // Unobserve once animated/revealed to improve scroll performance
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
});

forEach(reveal => {
   OnScroll.observe(reveal);
});

// Stats Counter Animation
function animateCounter(element) {
    const target = +element.getAttribute('data-target');
    const isPercent = element.innerText.includes('%');
    const isMillion = element.innerText.includes('M') || element.innerText.includes('+0M');
    
    let count = 0;
    const duration = 2000; // 2 seconds
    const speed = target / (duration / 16); // ~60fps
    
    const updateCount = () => {
        count += speed;
        if (count < target) {
            if (isPercent) {
                element.innerText = `%${Math.floor(count)}`;
            } else if (isMillion) {
                element.innerText = `+${Math.floor(count)}M`;
            } else {
                element.innerText = `+${Math.floor(count)}`;
            }
            requestAnimationFrame(updateCount);
        } else {
            if (isPercent) {
                element.innerText = `%${target}`;
            } else if (isMillion) {
                element.innerText = `+${target}M`;
            } else {
                element.innerText = `+${target}`;
            }
        }
    };
    
    updateCount();
}

/* ==========================================================================
   INTERACTIVE CALCULATOR
   ========================================================================== */
// Calculator DOM Elements
const btnTabVat = document.getElementById('btn-tab-vat');

if (btnTabVat) {
    const btnTabZakat = document.getElementById('btn-tab-zakat');
    const vatForm = document.getElementById('vat-form');
    const zakatForm = document.getElementById('zakat-form');
    
    const vatAmountInput = document.getElementById('vat-amount');
    const vatExclusiveRadio = document.getElementById('vat-exclusive');
    const vatInclusiveRadio = document.getElementById('vat-inclusive');
    const vatTaxResult = document.getElementById('vat-tax-result');
    const vatTotalResult = document.getElementById('vat-total-result');
    const vatTotalLabel = document.getElementById('vat-total-label');
    
    const zakatCapitalInput = document.getElementById('zakat-capital');
    const zakatNetProfitInput = document.getElementById('zakat-net-profit');
    const zakatBaseResult = document.getElementById('zakat-base-result');
    const zakatResult = document.getElementById('zakat-result');
    
    // Tab Switching
    btnTabVat.addEventListener('click', () => {
        btnTabVat.classList.add('active');
        btnTabZakat.classList.remove('active');
        vatForm.classList.add('active');
        zakatForm.classList.remove('active');
    });
    
    btnTabZakat.addEventListener('click', () => {
        btnTabZakat.classList.add('active');
        btnTabVat.classList.remove('active');
        zakatForm.classList.add('active');
        vatForm.classList.remove('active');
    });
    
    // Format currency
    function formatCurrency(value) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'SAR' }).format(value);
    }
    
    // VAT calculation
    function calculateVAT() {
        const amount = parseFloat(vatAmountInput.value) || 0;
        const isExclusive = vatExclusiveRadio.checked;
        
        let tax = 0;
        let total = 0;
        
        if (isExclusive) {
            tax = amount * 0.15;
            total = amount + tax;
            vatTotalLabel.innerText = "Total (VAT Included):";
            vatTotalResult.innerText = formatCurrency(total);
        } else {
            // Price includes 15% VAT, calculate the tax amount
            tax = amount - (amount / 1.15);
            total = amount - tax; // Price exclusive of VAT
            vatTotalLabel.innerText = "Price Exclusive of VAT:";
            vatTotalResult.innerText = formatCurrency(total);
        }
        
        vatTaxResult.innerText = formatCurrency(tax);
    }
    
    // Zakat calculation
    function calculateZakat() {
        const capital = parseFloat(zakatCapitalInput.value) || 0;
        const profit = parseFloat(zakatNetProfitInput.value) || 0;
        
        // Zakat Base = Capital + Net Profit
        const base = capital + profit;
        const zakat = base * 0.025; // 2.5% Zakat rate
        
        zakatBaseResult.innerText = formatCurrency(base);
        zakatResult.innerText = formatCurrency(zakat);
    }
    
    // Add event listeners for input fields
    vatAmountInput.addEventListener('input', calculateVAT);
    vatExclusiveRadio.addEventListener('change', calculateVAT);
    vatInclusiveRadio.addEventListener('change', calculateVAT);
    
    zakatCapitalInput.addEventListener('input', calculateZakat);
    zakatNetProfitInput.addEventListener('input', calculateZakat);
}



/* ==========================================================================
   CONSULTATION FORM SUBMISSION
   ========================================================================== */
const consultationForm = document.getElementById('consultationForm');
const formFeedback = document.getElementById('form-feedback');

if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate loading/sending state
        const submitBtn = consultationForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending your request... <i class="fa-solid fa-spinner fa-spin"></i>';
        
        // Gather values
        const name = document.getElementById('client-name').value;
        const phone = document.getElementById('client-phone').value;
        const email = document.getElementById('client-email').value;
        const company = document.getElementById('company-name').value;
        const service = document.getElementById('service-interest').value;
        const message = document.getElementById('client-message').value;

        // Basic Validation Check (though HTML does it)
        if (!name || !phone || !email || !service) {
            showFeedback('Please fill out all required fields.', 'error');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            return;
        }

        // Simulate Server Request delay (1.5 seconds)
        setTimeout(() => {
            // Clear form
            consultationForm.reset();
            
            // Show success feedback
            showFeedback(`Thank you, ${name}. Your consultation request has been successfully received! Our financial advisor will contact you at ${phone} shortly.`, 'success');
            
            // Restore button state
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            
            // Scroll feedback into view
            formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            // Hide success message after 8 seconds
            setTimeout(() => {
                formFeedback.style.display = 'none';
            }, 8000);
            
        }, 1500);
    });
}

function showFeedback(msg, type) {
    if (formFeedback) {
        formFeedback.innerText = msg;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.style.display = 'block';
    }
}

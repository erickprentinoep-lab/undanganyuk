const templates = [
    {
        id: 'traditional-essence-1',
        name: 'Traditional Essence 1',
        category: 'Traditional Essence',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/Undangan-Nikah/',
        image: 'assets/images/photo1.jpg',
        desc: 'Desain floral klasik yang abadi dengan sentuhan watercolor lembut.'
    },
    {
        id: 'traditional-essence-2',
        name: 'Traditional Essence 2',
        category: 'Traditional Essence',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/Undangan-Nikah-Jawa/',
        image: 'assets/images/photo2.jpg',
        desc: 'Kesederhanan yang berbicara. Fokus pada tipografi elegan dan ruang bernafas.'
    },
    {
        id: 'elegant-minimalis-2',
        name: 'Elegant Minimalis 2',
        category: 'Elegant Minimalis',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/elegant-minimalis-2/',
        image: 'assets/images/photo3.jpg',
        desc: 'Perpaduan emas dan navy untuk kesan pernikahan yang mewah dan eksklusif.'
    },
    {
        id: 'Elegant Minimalis',
        name: 'Elegant Minimalis 1',
        category: 'Elegant Minimalis',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/elegant-minimalis-1/',
        image: 'assets/images/photo4.jpg',
        desc: 'Nuansa bumi yang hangat, sangat cocok untuk pernikahan outdoor atau rustic.'
    },
    {
        id: 'Fun Cute',
        name: 'Fun Cute',
        category: 'Fun Cute',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/undangan-fun-cut/',
        image: 'assets/images/photo5.jpg',
        desc: 'Warna deep navy dengan ornamen floral putih yang kontras dan megah.'
    },
    {
        id: 'Clasic Vintage',
        name: 'Clasic Vintage',
        category: 'Clasic Vintage',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/undangan-clasic-vintage/',
        image: 'assets/images/photo6.jpg',
        desc: 'Segar dan ceria dengan elemen daun Monstera dan warna-warna cerah.'
    },
    {
        id: 'Rustic',
        name: 'Rustic',
        category: 'Rustic',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/undangan-rustic/',
        image: 'assets/images/photo7.jpg',
        desc: 'Sentuhan klasik yang hangat dengan aksen kertas tekstur dan font tulisan tangan.'
    },
    {
        id: 'Modern lux 1',
        name: 'Modern lux 1',
        category: 'Modern lux',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/undangan-modren-lux1/',
        image: 'assets/images/photo8.jpg',
        desc: 'Perpaduan warna navy gelap dan ornamen perak untuk kesan malam yang magis.'
    },
    {
        id: 'Modern lux 2',
        name: 'Modern lux 2',
        category: 'Modern lux',
        price: 'Start From Rp 100.000',
        preview: 'https://erickprentinoep-lab.github.io/undangan-modrenlux2/',
        image: 'assets/images/photo9.jpg',
        desc: 'Desain geometris berani untuk pasangan yang menyukai gaya kontemporer.'
    }
];

// WhatsApp Config
const WHATSAPP_NUMBER = '628123456789';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('catalog-container');
    const navbar = document.getElementById('navbar');

    // Render Templates
    templates.forEach(template => {
        const card = document.createElement('div');
        card.className = 'group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 reveal';

        const waMessage = encodeURIComponent(`Halo UndanganYuk, saya tertarik untuk memesan template "${template.name}" (${template.category}). Bagaimana prosedurnya?`);
        const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

        card.innerHTML = `
            <div class="relative overflow-hidden h-80">
                <img src="${template.image}" alt="${template.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                
                <div class="absolute top-4 right-4 bg-white/90 backdrop-blur block px-4 py-1.5 rounded-full text-xs font-bold text-secondary uppercase tracking-widest pointer-events-none z-10">
                    ${template.category}
                </div>

                <div class="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center space-y-4 px-6 text-center">
                     <a href="${template.preview}" target="_blank" class="w-full bg-white text-secondary px-6 py-3 rounded-xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:bg-primary hover:text-white flex items-center justify-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                        <span>Lihat Preview</span>
                     </a>
                </div>
            </div>
            <div class="p-8 space-y-4">
                <div class="flex justify-between items-start">
                    <h3 class="text-2xl font-serif font-bold text-secondary">${template.name}</h3>
                    <p class="text-primary font-bold text-lg">${template.price}</p>
                </div>
                <p class="text-gray-500 text-sm leading-relaxed">${template.desc}</p>
                <a href="${waLink}" target="_blank" class="block w-full text-center py-4 bg-accent/50 text-secondary rounded-2xl font-bold hover:bg-secondary hover:text-white transition-all duration-300">
                    Beli Lewat WhatsApp
                </a>
            </div>
        `;
        container.appendChild(card);
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll Reveal Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('translate-x-full');
        document.body.classList.toggle('overflow-hidden');
    };

    mobileMenuBtn?.addEventListener('click', toggleMenu);
    closeMenuBtn?.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});


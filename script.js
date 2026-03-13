// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('bg-black/60', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-black/60', 'backdrop-blur-md', 'py-4', 'border-b', 'border-white/10');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// Form Submission (Mock)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalContent = btn.innerHTML;

    btn.innerHTML = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = 'Message Sent!';
        btn.classList.replace('bg-blue-600', 'bg-emerald-600');
        e.target.reset();

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.classList.replace('bg-emerald-600', 'bg-blue-600');
            btn.disabled = false;
        }, 3000);
    }, 1500);
});
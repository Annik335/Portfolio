window.sr = ScrollReveal({ reset: true});
sr.reveal ('.home-text, .rede-sociais, .scroll-down-link,.button', {duration: 1600});
sr.reveal ('.about', {duration: 2200})
sr.reveal ('.certificacoes', { duration: 2000})


const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const body = document.body;


const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    body.classList.add(storedTheme);
} else {
    body.classList.add('light-theme'); 
}

toggleThemeBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    } else {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});


    let lastScrollTop = 0; 
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

        if (scrollTop > lastScrollTop) {
        
            header.classList.add('hidden');
        } else {
        
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop; 
    });
    
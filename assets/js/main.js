// ========================================
// CONFIGURAÇÃO E INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initActiveNavLink();
    initSmoothScroll();
});

// ========================================
// TEMA CLARO/ESCURO
// ========================================

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) return;

    // Carregar tema salvo ou usar preferência do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light'); // 🟢 Corrigido
    setTheme(currentTheme);

    // Alternar tema manualmente
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Atualizar caso a preferência do sistema mude
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', `Mudar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`);
    }
}

// ========================================
// MENU MOBILE
// ========================================

function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileToggle || !navLinks) {
        console.warn('Elementos do menu móvel não encontrados.');
        return;
    }

    mobileToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        mobileToggle.setAttribute('aria-expanded', isActive);
        mobileToggle.textContent = isActive ? '✕' : '☰';
    });

    // Fechar menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.textContent = '☰';
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.textContent = '☰';
        }
    });
}

// ========================================
// NAVEGAÇÃO ATIVA
// ========================================

function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname.replace(/\/$/, ''); // remove barra final

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').replace(/\/$/, '');
        if (linkPage === currentPath || (linkPage === '/index.html' && currentPath === '')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// ========================================
// SCROLL SUAVE
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Acessibilidade
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    });
}

// ========================================
// UTILITÁRIOS
// ========================================

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

function showError(container, message) {
    if (!container) return;
    container.innerHTML = `
        <div class="error-message" role="alert">
            <strong>Erro:</strong> ${sanitizeHTML(message)}
        </div>
    `;
}

function showLoading(container) {
    if (!container) return;
    container.innerHTML = `
        <div class="loading" role="status">
            <span>Carregando</span>
            <span class="sr-only">Carregando conteúdo...</span>
        </div>
    `;
}

// Exportar para Node.js (opcional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDate,
        debounce,
        sanitizeHTML,
        showError,
        showLoading
    };
}

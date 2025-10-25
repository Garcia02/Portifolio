// ========================================
// GERENCIAMENTO DE ARTIGOS
// ========================================

let allArticles = [];
let filteredArticles = [];
let currentFilter = 'todos';

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadArticles();
    initSearch();
    initFilters();
});

// ========================================
// CARREGAR ARTIGOS
// ========================================

async function loadArticles() {
    const container = document.getElementById('articles-container');
    
    if (!container) {
        return;
    }
    
    showLoading(container);
    
    try {
        const response = await fetch('./data/artigos.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        filteredArticles = [...allArticles];
        
        renderArticles();
        updateFilterButtons();
    } catch (error) {
        console.error('Erro ao carregar artigos:', error);
        showError(container, 'Não foi possível carregar os artigos. Por favor, tente novamente mais tarde.');
    }
}

// ========================================
// RENDERIZAR ARTIGOS
// ========================================

function renderArticles() {
    const container = document.getElementById('articles-container');
    
    if (!container) {
        return;
    }
    
    if (filteredArticles.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Nenhum artigo encontrado</h3>
                <p>Tente ajustar os filtros ou a busca.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredArticles.map(article => `
        <article class="card fade-in" data-article-id="${sanitizeHTML(article.id)}">
            <img 
                src="${sanitizeHTML(article.imagem)}" 
                alt="${sanitizeHTML(article.titulo)}"
                class="card-image"
                loading="lazy"
                onerror="this.src='./assets/img/placeholder.png'"
            >
            <h3 class="card-title">${sanitizeHTML(article.titulo)}</h3>
            <p class="card-description">${sanitizeHTML(article.resumo)}</p>
            <div class="card-meta">
                <span>📅 ${formatDate(article.data)}</span>
                <span>⏱️ ${sanitizeHTML(article.tempoLeitura)}</span>
                <span>🏷️ ${sanitizeHTML(article.categoria)}</span>
            </div>
            <div class="card-tags">
                ${article.tags.map(tag => 
                    `<span class="tag">${sanitizeHTML(tag)}</span>`
                ).join('')}
            </div>
            <a href="artigo-detalhes.html?id=${encodeURIComponent(article.id)}" 
               class="btn btn-primary mt-3"
               aria-label="Ler artigo ${sanitizeHTML(article.titulo)}">
                Ler Artigo →
            </a>
        </article>
    `).join('');
}

// ========================================
// BUSCA
// ========================================

function initSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (!searchInput) {
        return;
    }
    
    const debouncedSearch = debounce((searchTerm) => {
        filterArticles(searchTerm);
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

function filterArticles(searchTerm = '') {
    const term = searchTerm.toLowerCase().trim();
    
    filteredArticles = allArticles.filter(article => {
            article.tags.some(tag => tag.toLowerCase().includes(term));
        
            article.categoria.toLowerCase() === currentFilter.toLowerCase();
        
        return matchesSearch && matchesFilter;
    });
    
    renderArticles();
}

// ========================================
// FILTROS
// ========================================

function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            currentFilter = filter;
            
            // Atualizar estado dos botões
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            
            // Aplicar filtro
            const searchInput = document.getElementById('search-input');
            const searchTerm = searchInput ? searchInput.value : '';
            filterArticles(searchTerm);
        });
    });
}

function updateFilterButtons() {
    // Extrair categorias únicas
    const categories = ['todos', ...new Set(allArticles.map(a => a.categoria))];
    
    const filterContainer = document.querySelector('.filter-buttons');
    
    if (!filterContainer) {
        return;
    }
    
    filterContainer.innerHTML = categories.map(category => `
        <button 
            class="filter-btn ${category === 'todos' ? 'active' : ''}" 
            data-filter="${sanitizeHTML(category)}"
            aria-pressed="${category === 'todos' ? 'true' : 'false'}">
            ${sanitizeHTML(category.charAt(0).toUpperCase() + category.slice(1))}
        </button>
    `).join('');
    
    // Reinicializar event listeners
    initFilters();
}

// ========================================
// UTILITÁRIOS
// ========================================

// Formatar data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

// Debounce para otimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Sanitizar HTML para prevenir XSS
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Mostrar mensagem de erro
function showError(container, message) {
    if (!container) {
        return;
    }
    
    container.innerHTML = `
        <div class="error-message" role="alert">
            <strong>Erro:</strong> ${sanitizeHTML(message)}
        </div>
    `;
}

// Mostrar loading
function showLoading(container) {
    if (!container) {
        return;
    }
    
    container.innerHTML = `
        <div class="loading" role="status">
            <span>Carregando</span>
            <span class="sr-only">Carregando conteúdo...</span>
        </div>
    `;
}
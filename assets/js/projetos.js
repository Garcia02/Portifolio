// ========================================
// GERENCIAMENTO DE PROJETOS
// ========================================

let allProjects = [];
let filteredProjects = [];
let currentFilter = 'todos';

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initSearch();
    initFilters();
});

// ========================================
// CARREGAR PROJETOS
// ========================================

async function loadProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    showLoading(container);
    
    try {
        const response = await fetch('./data/projetos.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        filteredProjects = [...allProjects];
        
        renderProjects();
        updateFilterButtons();
    } catch (error) {
        console.error('Erro ao carregar projetos:', error);
        showError(container, 'Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.');
    }
}

// ========================================
// RENDERIZAR PROJETOS
// ========================================

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>Nenhum projeto encontrado</h3>
                <p>Tente ajustar os filtros ou a busca.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filteredProjects.map(project => `
        <article class="card fade-in" data-project-id="${sanitizeHTML(project.id)}">
            <img 
                src="${sanitizeHTML(project.imagem)}" 
                alt="${sanitizeHTML(project.titulo)}"
                class="card-image"
                loading="lazy"
                onerror="this.src='./assets/img/placeholder.png'"
            >
            <h3 class="card-title">${sanitizeHTML(project.titulo)}</h3>
            <p class="card-description">${sanitizeHTML(project.descricao)}</p>
            <div class="card-meta">
                <span>📅 ${sanitizeHTML(project.data)}</span>
                <span>🏷️ ${sanitizeHTML(project.categoria)}</span>
            </div>
            <div class="card-tags">
                ${project.tecnologias.map(tech => 
                    `<span class="tag">${sanitizeHTML(tech)}</span>`
                ).join('')}
            </div>
            <a href="projeto-detalhes.html?id=${encodeURIComponent(project.id)}" 
               class="btn btn-primary mt-3"
               aria-label="Ver detalhes do projeto ${sanitizeHTML(project.titulo)}">
                Ver Detalhes →
            </a>
        </article>
    `).join('');
}

// ========================================
// BUSCA
// ========================================

function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    const debouncedSearch = debounce((searchTerm) => {
        filterProjects(searchTerm);
    }, 300);
    
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

function filterProjects(searchTerm = '') {
    const term = searchTerm.toLowerCase().trim();
    
    filteredProjects = allProjects.filter(project => {
            project.tecnologias.some(tech => tech.toLowerCase().includes(term));
        
            project.categoria.toLowerCase() === currentFilter.toLowerCase();
        
        return matchesSearch && matchesFilter;
    });
    
    renderProjects();
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
            filterProjects(searchTerm);
        });
    });
}

function updateFilterButtons() {
    // Extrair categorias únicas
    const categories = ['todos', ...new Set(allProjects.map(p => p.categoria))];
    
    const filterContainer = document.querySelector('.filter-buttons');
    if (!filterContainer) return;
    
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
    if (!container) return;
    container.innerHTML = `
        <div class="error-message" role="alert">
            <strong>Erro:</strong> ${sanitizeHTML(message)}
        </div>
    `;
}

// Mostrar loading
function showLoading(container) {
    if (!container) return;
    container.innerHTML = `
        <div class="loading" role="status">
            <span>Carregando</span>
            <span class="sr-only">Carregando conteúdo...</span>
        </div>
    `;
}
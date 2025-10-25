// ========================================
// DETALHES DO ARTIGO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadArticleDetails();
});

// ========================================
// CARREGAR DETALHES
// ========================================

async function loadArticleDetails() {
    const container = document.getElementById('article-detail');
    
    if (!container) {
        return;
    }
    
    showLoading(container);
    
    // Obter ID do artigo da URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (!articleId) {
        showError(container, 'ID do artigo não especificado.');
        return;
    }
    
    try {
        const response = await fetch('./data/artigos.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const article = data.artigos.find(a => a.id === articleId);
        
        if (!article) {
            showError(container, 'Artigo não encontrado.');
            return;
        }
        
        renderArticleDetails(article);
        updatePageTitle(article.titulo);
    } catch (error) {
        console.error('Erro ao carregar detalhes do artigo:', error);
        showError(container, 'Não foi possível carregar os detalhes do artigo. Por favor, tente novamente mais tarde.');
    }
}

// ========================================
// RENDERIZAR DETALHES
// ========================================

function renderArticleDetails(article) {
    const container = document.getElementById('article-detail');
    
    if (!container) {
        return;
    }
    
    container.innerHTML = `
        <div class="detail-container fade-in">
            <a href="artigos.html" class="back-button">
                ← Voltar para Artigos
            </a>
            
            <header class="detail-header">
                <h1>${sanitizeHTML(article.titulo)}</h1>
                <p class="text-secondary">${sanitizeHTML(article.resumo)}</p>
            </header>
            
            <img 
                src="${sanitizeHTML(article.imagem)}" 
                alt="${sanitizeHTML(article.titulo)}"
                class="detail-image"
                onerror="this.src='./assets/img/placeholder.png'"
            >
            
            <div class="detail-meta">
                <div>
                    <strong>Publicado em:</strong>
                    <p>${formatDate(article.data)}</p>
                </div>
                <div>
                    <strong>Tempo de Leitura:</strong>
                    <p>${sanitizeHTML(article.tempoLeitura)}</p>
                </div>
                <div>
                    <strong>Categoria:</strong>
                    <p>${sanitizeHTML(article.categoria)}</p>
                </div>
            </div>
            
            <article class="detail-content">
                ${article.conteudo}
            </article>
            
            <div class="card-tags">
                ${article.tags.map(tag => 
                    `<span class="tag">${sanitizeHTML(tag)}</span>`
                ).join('')}
            </div>
            
            ${article.links && article.links.length > 0 ? `
                <section class="detail-content mt-4">
                    <h3>Referências e Links Úteis</h3>
                    <ul>
                        ${article.links.map(link => 
                            `<li><a href="${sanitizeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${sanitizeHTML(link.titulo)}</a></li>`
                        ).join('')}
                    </ul>
                </section>
            ` : ''}
        </div>
    `;
}

// ========================================
// UTILITÁRIOS
// ========================================

function updatePageTitle(articleTitle) {
    document.title = `${articleTitle} - Jeferson Garcia | Portfólio`;
}

// Sanitizar HTML para prevenir XSS
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}

// Formatar data
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
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
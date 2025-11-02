// ========================================
// DETALHES DO PROJETO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjectDetails();
});

// ========================================
// CARREGAR DETALHES
// ========================================

async function loadProjectDetails() {
    const container = document.getElementById('project-detail');
    if (!container) return;

    showLoading(container);

    // Obter ID do projeto da URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        showError(container, 'ID do projeto não especificado.');
        return;
    }

    try {
        const response = await fetch('./data/projetos.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const project = data.projetos.find(p => p.id === projectId);

        if (!project) {
            showError(container, 'Projeto não encontrado.');
            return;
        }

        renderProjectDetails(project);
        updatePageTitle(project.titulo);
    } catch (error) {
        console.error('Erro ao carregar detalhes do projeto:', error);
        showError(container, 'Não foi possível carregar os detalhes do projeto. Por favor, tente novamente mais tarde.');
    }
}

// ========================================
// RENDERIZAR DETALHES
// ========================================

function renderProjectDetails(project) {
    const container = document.getElementById('project-detail');
    if (!container) return;

    container.innerHTML = `
        <div class="detail-container fade-in">
            <a href="projetos.html" class="back-button">
                ← Voltar para Projetos
            </a>
            
            <header class="detail-header">
                <h1>${sanitizeHTML(project.titulo)}</h1>
                <p class="text-secondary">${sanitizeHTML(project.descricao)}</p>
            </header>
            
            <img 
                src="${sanitizeHTML(project.imagem)}" 
                alt="${sanitizeHTML(project.titulo)}"
                class="detail-image"
                onerror="this.src='./assets/img/placeholder.png'"
            >
            
            <div class="detail-meta">
                <div>
                    <strong>Data:</strong>
                    <p>${sanitizeHTML(project.data)}</p>
                </div>
                <div>
                    <strong>Categoria:</strong>
                    <p>${sanitizeHTML(project.categoria)}</p>
                </div>
                <div>
                    <strong>Status:</strong>
                    <p>${sanitizeHTML(project.status || 'Não informado')}</p>
                </div>
            </div>
            
            <section class="detail-content">
                <h2>Sobre o Projeto</h2>
                
                <h3>Tecnologias Utilizadas</h3>
                <div class="card-tags">
                    ${project.tecnologias.map(tech => 
                        `<span class="tag">${sanitizeHTML(tech)}</span>`
                    ).join('')}
                </div>
                
                ${project.desafios ? `
                    <h3>Desafios e Soluções</h3>
                    <p>${sanitizeHTML(project.desafios)}</p>
                ` : ''}
                
                ${project.aprendizados ? `
                    <h3>Aprendizados</h3>
                    <p>${sanitizeHTML(project.aprendizados)}</p>
                ` : ''}
            </section>
            
            <div class="detail-links">
                ${project.links?.github ? `
                    <a href="${sanitizeHTML(project.links.github)}" 
                       class="btn btn-primary" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       aria-label="Ver código no GitHub">
                        <span>Veja detalhes do projeto</span>
                    </a>
                ` : ''}
                ${project.links?.demo ? `
                    <a href="${sanitizeHTML(project.links.demo)}" 
                       class="btn btn-secondary" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       aria-label="Ver demonstração ao vivo">
                        <span>Ver Demo</span>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

// ========================================
// UTILITÁRIOS
// ========================================

function updatePageTitle(projectTitle) {
    document.title = `${projectTitle} - Jeferson Garcia | Portfólio`;
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

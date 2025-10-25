## 💼 Portfólio Pessoal - Jeferson Garcia

Este é o site de portfólio pessoal de **Jeferson Garcia**, um desenvolvedor e analista de transporte com foco na criação de automações eficientes e soluções web. Desenvolvido do zero utilizando **HTML, CSS e JavaScript puro**, este portfólio demonstra minhas habilidades técnicas e projetos, oferecendo uma experiência de usuário moderna e acessível.

---

### 🚀 Visão Geral

Este projeto serve como um hub central para exibir meus projetos, artigos e trajetória profissional. Ele foi cuidadosamente elaborado para:

-   **Apresentar minhas habilidades:** Demonstrar competências em desenvolvimento web front-end sem o uso de frameworks, focando em fundamentos.
-   **Showcase de projetos:** Apresentar uma coleção de projetos relevantes, com detalhes dinâmicos e capacidade de filtragem.
-   **Compartilhar conhecimento:** Publicar artigos sobre tecnologia, automação e minhas experiências.
-   **Facilitar contato:** Fornecer um meio fácil para recrutadores e colaboradores entrarem em contato.
-   **Transição de Carreira:** Destacar minha experiência e conhecimentos adquiridos, especialmente na área de automação, aplicando-os ao desenvolvimento web.

---

### ✨ Funcionalidades Principais

*   ✅ **Design Responsivo:** Adapta-se perfeitamente a qualquer tamanho de tela, de desktops a dispositivos móveis.
*   🌗 **Tema Claro/Escuro:** Alterna entre modos de visualização claro e escuro, com preferência persistente do usuário.
*   🔍 **Sistema de Filtros:** Permite filtrar projetos e artigos por categoria para uma navegação eficiente.
*   ⚡ **Busca em Tempo Real:** Encontre rapidamente o conteúdo desejado com funcionalidade de busca instantânea.
*   📄 **Páginas de Detalhes Dinâmicas:** Conteúdo detalhado para projetos e artigos carregado de forma dinâmica.
*   ♿ **Acessibilidade (WCAG 2.1):** Desenvolvido com foco em acessibilidade para garantir que todos os usuários possam navegar.
*   📈 **SEO Otimizado:** Estrutura e meta-dados pensados para uma melhor visibilidade em motores de busca.
*   🚀 **Performance Otimizada:** Carregamento rápido e eficiente para uma ótima experiência do usuário.
*   🖼️ **Imagens de Fundo Personalizadas:** Diferentes imagens de fundo para os temas claro e escuro.
*   🌟 **Integração com Font Awesome:** Ícones profissionais para melhorar a interface.
*   ✨ **Animações Suaves:** Transições e interações fluidas para uma experiência agradável.

---

### 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias e linguagens:

*   **HTML5:** Para a estrutura semântica e esqueleto das páginas.
*   **CSS3:** Para toda a estilização, layout (Grid, Flexbox) e uso de variáveis CSS para temas.
*   **JavaScript (ES6+):** Para toda a interatividade, manipulação do DOM, funcionalidades de busca, filtro, tema e carregamento dinâmico de conteúdo.
*   **JSON:** Utilizado para armazenar os dados de projetos e artigos, facilitando a manutenção e a renderização dinâmica.
*   **Font Awesome 6.5.1:** Biblioteca de ícones para elementos visuais.

---

### 📁 Estrutura do Projeto

A estrutura de arquivos do projeto é organizada para clareza e manutenção:

Portifolio/
├── index.html # Página inicial
├── sobre.html # Página "Sobre Mim"
├── projetos.html # Página listando todos os projetos
├── artigos.html # Página listando todos os artigos
├── projeto-detalhes.html # Template para detalhes de um projeto específico
├── artigo-detalhes.html # Template para detalhes de um artigo específico
├── assets/ # Recursos estáticos
│ ├── css/ # Folhas de estilo CSS
│ │ └── styles.css # Estilos globais e de componentes
│ ├── js/ # Scripts JavaScript
│ │ ├── main.js # Lógica global, tema, navegação
│ │ ├── projetos.js # Lógica específica para a página de projetos
│ │ ├── artigos.js # Lógica específica para a página de artigos
│ │ ├── projeto-detalhes.js # Lógica para carregar detalhes de um projeto
│ │ └── artigo-detalhes.js # Lógica para carregar detalhes de um artigo
│ ├── img/ # Imagens do projeto
│ │ ├── hero-bg-dark.jpg # Imagem de fundo para tema escuro
│ │ ├── hero-bg-light.jpg # Imagem de fundo para tema claro
│ │ ├── publicacao-penske-direto.png # Exemplo de imagem de projeto
│ │ ├── minhaFoto.jpg # Foto de perfil
│ │ ├── placeholder.png # Imagem placeholder
│ │ └── logo/ # Ícones do site
│ │ ├── android-chrome-192x192.png # Ícone para Android
│ │ └── favicon-32x32.png # Favicon
│ └── data/ # Dados em formato JSON
│ ├── projetos.json # Dados de todos os projetos
│ └── artigos.json # Dados de todos os artigos
├── README.md # Este arquivo
└── LICENSE # Informações de licença


---

### ⚙️ Como Instalar e Configurar Localmente

Para rodar este portfólio em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/jeferson-garcia/seu-portfolio.git
    cd seu-portfolio
    ```
    (Substitua `https://github.com/jeferson-garcia/seu-portfolio.git` pelo URL real do seu repositório, se for diferente.)

2.  **Abra o projeto:**
    Como este projeto é puramente estático (HTML, CSS, JS), você pode abri-lo diretamente em seu navegador.
    *   No explorador de arquivos, localize o arquivo `index.html` e abra-o com seu navegador preferido.

    **Alternativamente, para uma experiência de desenvolvimento mais robusta (e para garantir que requisições JSON funcionem corretamente em alguns ambientes), você pode usar um servidor web local simples:**

    *   **Com Node.js (recomendado):**
        Se você tem Node.js instalado, pode instalar um servidor http simples:
        ```bash
        npm install -g http-server
        ```
        Então, no diretório raiz do projeto (`Portifolio/`), execute:
        ```bash
        http-server
        ```
        Isso iniciará um servidor em `http://localhost:8080` (ou outra porta disponível).

    *   **Com Python:**
        Se você tem Python instalado, pode usar o módulo `http.server`:
        ```bash
        python -m http.server 8000
        ```
        Isso iniciará um servidor em `http://localhost:8000`.

---

### 🧭 Como Usar

A navegação no portfólio é intuitiva:

1.  **Página Inicial (`index.html`):** Oferece uma visão geral, destacando projetos e artigos recentes, além de um CTA para contato.
2.  **Sobre (`sobre.html`):** Detalhes sobre minha trajetória profissional, habilidades, experiência e formação.
3.  **Projetos (`projetos.html`):** Explore todos os projetos. Use os filtros por categoria e a busca em tempo real para encontrar o que procura. Clique em um projeto para ver seus detalhes.
4.  **Artigos (`artigos.html`):** Leia meus artigos. Assim como na seção de projetos, você pode filtrar e buscar. Clique em um artigo para ler o conteúdo completo.
5.  **Alternar Tema:** No cabeçalho (header) do site, há um botão para alternar entre os temas claro e escuro. Sua preferência será salva automaticamente para futuras visitas.

---

### 🌟 Características Técnicas

*   **Design Responsivo:**
    *   Abordagem **Mobile-first**, garantindo que a experiência em dispositivos móveis seja prioridade.
    *   Breakpoints definidos para 480px, 768px e 1200px, garantindo adaptabilidade em diversos dispositivos.
    *   Testado para ser totalmente funcional em smartphones, tablets e desktops.

*   **Tema Claro/Escuro:**
    *   Um `toggle` (chaveador) no cabeçalho permite a troca de tema.
    *   A escolha do usuário é persistente, armazenada no `localStorage` do navegador.
    *   Imagens de fundo específicas para cada tema, aprimorando a estética visual.
    *   Transições CSS suaves para uma mudança de tema elegante.

*   **Performance:**
    *   **Lazy loading** de imagens para otimizar o tempo de carregamento inicial.
    *   **CSS otimizado** com uso de variáveis CSS para cores e tamanhos, evitando repetição e facilitando a manutenção.
    *   **JavaScript modularizado**, dividindo a lógica em arquivos específicos para melhor organização e carregamento.
    *   **Sem dependências externas** (exceto Font Awesome), mantendo o código leve e rápido.

*   **Acessibilidade (WCAG 2.1):**
    *   **HTML semântico** para estruturação clara e significado.
    *   Uso de **ARIA labels** para elementos interativos, auxiliando leitores de tela.
    *   **Contraste de cores adequado** entre texto e fundo, seguindo as diretrizes WCAG.
    *   **Navegação por teclado** totalmente funcional.
    *   Conteúdo amigável para **screen readers**.

*   **SEO Otimizado:**
    *   **Meta tags descritivas** (`<title>`, `<meta name="description">`) para cada página.
    *   **Open Graph tags** (`og:title`, `og:image`, etc.) para melhor exibição em mídias sociais.
    *   **Estrutura semântica** do HTML auxilia os motores de busca a entender o conteúdo.
    *   **URLs amigáveis** (ex: `projetos.html`, `artigos.html`) para facilitar a indexação.

---

### 📄 Páginas Disponíveis

*   **Home (`index.html`):** Visão geral, hero section, projetos e artigos em destaque, call to action.
*   **Sobre (`sobre.html`):** Perfil profissional, história, habilidades técnicas e comportamentais, experiência (timeline), formação, certificações, interesses e abordagem com IA.
*   **Projetos (`projetos.html`):** Grid de projetos com filtros por categoria e busca em tempo real.
*   **Artigos (`artigos.html`):** Grid de artigos com filtros por categoria e busca em tempo real.

---

### 📊 Estrutura de Dados (JSON)

Para gerenciar o conteúdo de projetos e artigos de forma flexível, utilizei arquivos JSON:

*   **`assets/data/projetos.json`:** Contém um array de objetos, onde cada objeto representa um projeto com campos como `id`, `titulo`, `descricao`, `imagem`, `link`, `categorias`, etc.
*   **`assets/data/artigos.json`:** Similarmente, contém um array de objetos para artigos, com campos como `id`, `titulo`, `data`, `autor`, `resumo`, `conteudo`, `tags`, etc.

Essa abordagem permite adicionar, editar ou remover projetos e artigos sem a necessidade de modificar o código HTML diretamente, tornando o portfólio mais dinâmico e fácil de manter.

---

### 🤝 Contribuindo

Este é um portfólio pessoal, mas sugestões e feedback são sempre bem-vindos! Se você encontrar um bug, tiver uma ideia para uma melhoria ou quiser oferecer feedback, sinta-se à vontade para:

1.  Abrir uma `Issue` neste repositório.
2.  Entrar em contato diretamente (veja a seção "Autor/Contato").

---

### 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

### 📧 Autor/Contato

Desenvolvido com dedicação por **Jeferson Garcia**.

*   **LinkedIn:** [linkedin.com/in/jeferson-garcia](https://www.linkedin.com/in/jeferson-garcia)
*   **GitHub:** [github.com/jeferson-garcia](https://github.com/jeferson-garcia)
*   **Email:** [jeferson.garcia@email.com](mailto:jeferson.garcia@email.com)

Sinta-se à vontade para entrar em contato para oportunidades de trabalho, colaborações ou apenas para trocar ideias!


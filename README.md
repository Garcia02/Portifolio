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

<pre><code>
Portifolio/
├── index.html                  # Página inicial
├── sobre.html                  # Página "Sobre Mim"
├── projetos.html               # Página listando todos os projetos
├── artigos.html                # Página listando todos os artigos
├── projeto-detalhes.html       # Template para detalhes de um projeto específico
├── artigo-detalhes.html        # Template para detalhes de um artigo específico
├── assets/                     # Recursos estáticos
│   ├── css/                    # Folhas de estilo CSS
│   │   └── styles.css          # Estilos globais e de componentes
│   ├── js/                     # Scripts JavaScript
│   │   ├── main.js             # Lógica global, tema, navegação
│   │   ├── projetos.js         # Lógica específica para a página de projetos
│   │   ├── artigos.js          # Lógica específica para a página de artigos
│   │   ├── projeto-detalhes.js # Lógica para carregar detalhes de um projeto
│   │   └── artigo-detalhes.js  # Lógica para carregar detalhes de um artigo
│   ├── img/                    # Imagens do projeto
│   │   ├── hero-bg-dark.jpg    # Imagem de fundo para tema escuro
│   │   ├── hero-bg-light.jpg   # Imagem de fundo para tema claro
│   │   ├── publicacao-penske-direto.png # Exemplo de imagem de projeto
│   │   ├── minhaFoto.jpg       # Foto de perfil
│   │   ├── placeholder.png     # Imagem placeholder
│   │   └── logo/               # Ícones do site
│   │       ├── android-chrome-192x192.png # Ícone para Android
│   │       └── favicon-32x32.png         # Favicon
│   └── data/                   # Dados em formato JSON
│       ├── projetos.json       # Dados de todos os projetos
│       └── artigos.json        # Dados de todos os artigos
├── README.md                   # Este arquivo
└── LICENSE                     # Informações de licença
</code></pre>

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

### 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

### 📧 Autor/Contato

Desenvolvido com dedicação por **Jeferson Garcia**.

*   **LinkedIn:** [linkedin.com/in/jeferson-garcia](https://www.linkedin.com/in/jeferson-garcia)
*   **GitHub:** [github.com/jeferson-garcia](https://github.com/jeferson-garcia)
*   **Email:** [jeferson.garcia@email.com](mailto:jeferson.garcia@email.com)

Sinta-se à vontade para entrar em contato para oportunidades de trabalho, colaborações ou apenas para trocar ideias!

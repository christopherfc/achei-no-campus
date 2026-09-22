# Achei no Campus

Protótipo estático de uma página de achados e perdidos para a disciplina de Programação Web I.

## Problema e proposta

Avisos de objetos encontrados no campus costumam ficar espalhados. A página reúne exemplos em um único lugar e mostra o local onde cada objeto foi encontrado. Os objetos exibidos são fictícios e servem apenas para demonstrar o layout.

## Tecnologias

- React para dividir a página em componentes.
- JSX para escrever a estrutura da página.
- CSS para cores, texto, imagem e layout com Flexbox e Grid.
- Vite para executar e compilar o projeto.

## Como executar

Com o Node.js instalado, execute:

```bash
npm install
npm run dev
```

Abra no navegador o endereço exibido no terminal.

## Onde está cada parte

- `index.html`: contém a div `root`.
- `src/main.jsx`: coloca o componente principal dentro da div `root` e importa o CSS.
- `src/App.jsx`: organiza as seções e contém os exemplos fixos de objetos.
- A seção “Sobre nós” em `src/App.jsx` explica quem criou o projeto e seu objetivo.
- `src/components/Header.jsx`: cabeçalho e links para as seções.
- `src/components/ItemCard.jsx`: estrutura reutilizada para mostrar cada objeto.
- `src/components/Footer.jsx`: rodapé.
- `src/style.css`: aparência e adaptação a telas menores.
- `public/itens-perdidos-campus.png`: imagem da página.
- `public/garrafa-azul.png`, `public/carteira-estudantil.png`, `public/fone-de-ouvido.png` e `public/casaco-cinza.png`: imagens ilustrativas dos objetos nos cartões.
- A seção “Onde estamos” incorpora um mapa do Google Maps da UFAL em Penedo.

## Escopo

Esta versão apresenta conteúdo fixo. Não há cadastro, busca, filtro, banco de dados nem backend. Os links do cabeçalho levam a seções da mesma página.

Os botões dos cartões usam `https://wa.me/5582900000000` como demonstração. O número é fictício e deve ser trocado por um contato real antes de usar a página fora da apresentação.

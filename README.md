# Digital Store

Loja virtual moderna e responsiva inspirada no visual do Digital Store, desenvolvida com React, TypeScript e Tailwind CSS.

A aplicação inclui catálogo de produtos, filtros, busca, banner slider, carrinho persistido em localStorage, autenticação simulada, checkout e layout otimizado para desktop e mobile.

## Demonstração

Acesse a aplicação localmente em:

```bash
http://localhost:5173
```

## Funcionalidades

- Home com banner slider automático
- Catálogo de produtos com busca e filtros por categoria
- Ordenação por relevância, menor preço, maior preço e melhor avaliação
- Página de detalhes do produto
- Seleção de cor, tamanho e quantidade
- Carrinho de compras com persistência em localStorage
- Autenticação simulada com login e logout
- Checkout com resumo do pedido
- Design responsivo e visual premium
- Rotas para páginas internas com React Router
- Configuração pronta para deploy no Vercel

## Stack Tecnológica

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## Estrutura do Projeto

```bash
digital-store-final/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── README.md
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   ├── components/
│   │   ├── BannerSlider.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── ProductCard.tsx
│   │   ├── QuantitySelector.tsx
│   │   └── SectionTitle.tsx
│   ├── context/
│   │   └── AppContext.tsx
│   ├── data/
│   │   └── products.ts
│   └── pages/
│       ├── CartPage.tsx
│       ├── CheckoutPage.tsx
│       ├── HomePage.tsx
│       ├── LoginPage.tsx
│       ├── NotFoundPage.tsx
│       ├── ProductDetailPage.tsx
│       └── ProductListPage.tsx
└── public/
```

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18+
- npm ou yarn

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Lindelaine-maker/digital-store-final.git
cd digital-store-final
```

Instale as dependências:

```bash
npm install
```

## Executando o projeto localmente

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```
Inicia o ambiente de desenvolvimento.

```bash
npm run build
```
Gera a build de produção.

```bash
npm run preview
```
Previsualiza a build gerada localmente.

## Deploy no Vercel

1. Faça o push do projeto para o GitHub.
2. Acesse o Vercel.
3. Clique em "Add New Project".
4. Import o repositório `digital-store-final`.
5. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Clique em "Deploy".

O arquivo `vercel.json` foi incluído para garantir que as rotas do React Router funcionem corretamente em produção.

## Observações de Arquitetura

- O estado global do carrinho e do usuário é gerenciado via `React Context`.
- O carrinho é salvo em `localStorage`, o que mantém os itens mesmo após atualizar a página.
- A autenticação é simulada apenas no front-end, sem backend ou banco de dados.
- Os dados dos produtos encontram-se em `src/data/products.ts`.

## Melhorias futuras

- Integração com API real de produtos
- Backend para autenticação e pedidos
- Pagamento real com Stripe ou Mercado Pago
- Dashboard administrativo
- Melhorias de acessibilidade e SEO
- Internacionalização (i18n)

## Status do Projeto

Projeto pronto para apresentação, entrega acadêmica ou deploy inicial em produção.

## Autor

Lindelaine-maker

## Repositório

https://github.com/Lindelaine-maker/digital-store-final

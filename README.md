# Digital Store

Loja virtual moderna e responsiva inspirada no visual do Digital Store, desenvolvida com React, TypeScript e Tailwind CSS.

Este projeto simula uma experiência completa de e-commerce com catálogo de produtos, filtros, busca, carrinho, autenticação e checkout, trazendo uma interface moderna e funcional para apresentação em portfólio, curso, entrega acadêmica ou deploy em produção.

## 🔗 Repositório

https://github.com/Lindelaine-maker/digital-store-final

## 🧩 Funcionalidades

- Home com slider de banners
- Catálogo de produtos com busca e filtros por categoria
- Ordenação por relevância, menor preço, maior preço e melhor avaliação
- Página de detalhes do produto
- Seleção de cor, tamanho e quantidade
- Carrinho de compras com persistência em localStorage
- Autenticação simulada com login/logout
- Checkout com resumo do pedido
- Design responsivo para desktop e mobile
- Rotas internas com React Router
- Configuração pronta para deploy no Vercel

## 🛠️ Stack Tecnológica

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React

## 📁 Estrutura do Projeto

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

## ✅ Requisitos

- Node.js 18+
- npm ou yarn

## ▶️ Como rodar localmente

Clone o projeto:

```bash
git clone https://github.com/Lindelaine-maker/digital-store-final.git
cd digital-store-final
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm run dev
```

Acesse no navegador:

```bash
http://localhost:5173
```

## 📦 Scripts

```bash
npm run dev
```
Executa a aplicação em modo de desenvolvimento.

```bash
npm run build
```
Cria a build de produção.

```bash
npm run preview
```
Pré-visualiza a build localmente.

## 🚀 Deploy no Vercel

1. Conecte o repositório ao Vercel.
2. Escolha o framework: `Vite`.
3. Configure o comando de build:
   ```bash
   npm run build
   ```
4. Configure a pasta de saída:
   ```bash
   dist
   ```
5. Clique em "Deploy".

O arquivo `vercel.json` foi adicionado para garantir que as rotas do React Router funcionem corretamente em produção.

## 🧠 Observações Técnicas

- O carrinho e o usuário são gerenciados com `React Context`.
- O carrinho é salvo em `localStorage`, preservando os itens ao recarregar a página.
- A autenticação é simulada no front-end, sem backend real.
- Os produtos estão centralizados em `src/data/products.ts`.

## 📈 Melhorias Futuras

- Integração com API real de produtos
- Autenticação com backend
- Sistema de pagamento real
- Área administrativa para produtos
- Melhorias de acessibilidade e SEO
- Internacionalização

## 🏁 Status do Projeto

Projeto finalizado e pronto para apresentação, portfólio, estudo e deploy inicial.

## 👤 Autor

Lindelaine-maker

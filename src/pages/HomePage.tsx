import { MessageCircleHeart, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import BannerSlider from '../components/BannerSlider';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { categories, products } from '../data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <BannerSlider />

      <section className="mt-16">
        <SectionTitle eyebrow="Categorias" title="Explore por interesse" action="Ver todos" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="group relative overflow-hidden rounded-[28px] shadow-soft">
              <img
                src={category.image}
                alt={category.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.08))'
                }}
              />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: category.accent }}
                >
                  {category.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Destaques" title="Produtos em alta" action="Ver coleção" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-50 text-primary">
            <Truck className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Frete grátis</h3>
          <p className="mt-2 text-slate-600">Entregas rápidas para compras acima de R$ 200.</p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-600">
            <ShieldCheck className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Compra segura</h3>
          <p className="mt-2 text-slate-600">Pagamentos protegidos com segurança e garantia.</p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <MessageCircleHeart className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Atendimento</h3>
          <p className="mt-2 text-slate-600">Nossa equipe está pronta para ajudar em qualquer etapa.</p>
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link
          to="/produtos"
          className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          Ver todos os produtos
        </Link>
      </div>
    </>
  );
}

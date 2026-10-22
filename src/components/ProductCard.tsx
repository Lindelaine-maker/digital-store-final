import { Link } from 'react-router-dom';
import type { Product } from '../types';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-strong">
      <div className="relative h-60 overflow-hidden">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700">
          {product.badge}
        </span>

        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{product.category}</span>
          <span className="font-semibold text-amber-500">★ {product.rating}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>

        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-slate-900">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
          <span className="text-sm text-slate-400 line-through">
            {product.oldPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/produto/${product.id}`}
            className="flex-1 rounded-full bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Ver produto
          </Link>

          <button className="rounded-full border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}

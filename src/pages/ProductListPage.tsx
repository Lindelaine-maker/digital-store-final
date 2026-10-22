import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const filterOptions = ['Todos', 'Calçados', 'Roupas', 'Acessórios', 'Esportes', 'Eletrônicos'];

export default function ProductListPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('relevancia');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    let items = [...products];

    if (selectedCategory !== 'Todos') {
      items = items.filter((product) => product.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      items = items.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === 'menor-preco') {
      items.sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'maior-preco') {
      items.sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'melhor-avaliacao') {
      items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [selectedCategory, sortBy, searchTerm]);

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Produtos</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900">Todos os itens</h1>
        </div>

        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-soft">
          <label htmlFor="sort" className="text-sm font-semibold text-slate-600">
            Ordenar por
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm font-semibold text-slate-900 outline-none"
          >
            <option value="relevancia">Relevância</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
            <option value="melhor-avaliacao">Melhor avaliação</option>
          </select>
        </div>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar por produto..."
          className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-primary"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="mb-4 text-xl font-bold text-slate-900">Filtrar</h3>

          <div className="space-y-5">
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Categorias</h4>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedCategory(option)}
                    className={`rounded-full px-3 py-2 text-sm font-semibold ${
                      selectedCategory === option
                        ? 'bg-primary text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Preço</h4>
              <div className="flex flex-wrap gap-2">
                {['Até R$ 150', 'R$ 150 - R$ 400', 'R$ 400+'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Marca</h4>
              <div className="flex flex-wrap gap-2">
                {['Nike', 'Adidas', 'Puma', 'Apple'].map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full rounded-[28px] border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-slate-600">Nenhum produto encontrado para esse filtro.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

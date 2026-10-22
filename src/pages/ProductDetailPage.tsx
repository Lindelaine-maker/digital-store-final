import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import QuantitySelector from '../components/QuantitySelector';
import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = useMemo(() => products.find((item) => item.id === Number(id)), [id]);
  const { addToCart } = useAppContext();

  const [selectedImage, setSelectedImage] = useState(product?.images[0] ?? '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] ?? '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] ?? '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Produto não encontrado</h1>
        <Link
          to="/produtos"
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
        >
          Voltar aos produtos
        </Link>
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-soft">
            <img
              src={selectedImage || product.images[0]}
              alt={product.name}
              className="h-[520px] w-full rounded-[24px] object-cover"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden rounded-2xl border ${
                  selectedImage === image
                    ? 'border-primary ring-2 ring-pink-100'
                    : 'border-slate-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-28 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-black text-slate-900">{product.name}</h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span className="text-amber-500">★★★★★</span>
            <span>{product.rating} ({product.reviews} avaliações)</span>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-3xl font-black text-slate-900">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </span>
            <span className="text-lg text-slate-400 line-through">
              {product.oldPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </span>
          </div>

          <p className="mt-6 text-base leading-7 text-slate-600">{product.description}</p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Cor</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                      selectedColor === color
                        ? 'border-primary bg-pink-50 text-primary'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Tamanho</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                      selectedSize === size
                        ? 'border-primary bg-pink-50 text-primary'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantitySelector
              value={quantity}
              onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
              onIncrease={() => setQuantity((prev) => prev + 1)}
            />

            <button
              onClick={() =>
                addToCart(
                  {
                    id: product.id,
                    name: product.name,
                    image: product.images[0],
                    price: product.price,
                    color: selectedColor,
                    size: selectedSize
                  },
                  quantity
                )
              }
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Adicionar ao carrinho
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700">
              Comprar agora
            </button>

            <Link
              to="/produtos"
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-700"
            >
              Voltar ao catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

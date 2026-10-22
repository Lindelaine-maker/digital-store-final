import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useAppContext();

  const shipping = cart.length > 0 ? 25 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <section className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Seu carrinho está vazio</h1>
        <p className="mt-3 text-slate-600">Adicione alguns produtos antes de continuar.</p>
        <Link
          to="/produtos"
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
        >
          Explorar produtos
        </Link>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Carrinho</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Seu pedido</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.color}-${item.size}`}
              className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-4 shadow-soft sm:flex-row"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-32 w-full rounded-[22px] object-cover sm:w-32"
              />

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Cor: {item.color} · Tamanho: {item.size}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id, item.color, item.size)}
                    className="rounded-full bg-slate-100 p-2 text-slate-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.color, item.size, -1)}
                      className="rounded-full bg-white p-2"
                    >
                      <Minus className="h-3 w-3 text-slate-700" />
                    </button>

                    <span className="min-w-6 text-center text-sm font-bold">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, item.color, item.size, 1)}
                      className="rounded-full bg-white p-2"
                    >
                      <Plus className="h-3 w-3 text-slate-700" />
                    </button>
                  </div>

                  <span className="text-xl font-black text-slate-900">
                    {(item.price * item.quantity).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Resumo</h3>

          <div className="mt-6 space-y-4 text-slate-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between">
              <span>Frete</span>
              <span>{shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="flex justify-between">
              <span>Desconto</span>
              <span>R$ 0,00</span>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-slate-900">Total</span>
              <span className="text-2xl font-black text-slate-900">
                {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            </div>
          </div>

          <Link
            to="/checkout"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Finalizar compra
          </Link>
        </aside>
      </div>
    </section>
  );
}

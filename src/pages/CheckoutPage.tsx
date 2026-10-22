import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, subtotal, clearCart } = useAppContext();
  const [submitted, setSubmitted] = useState(false);

  const shipping = cart.length > 0 ? 25 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 1200);
  };

  if (cart.length === 0) {
    return (
      <section className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-soft">
        <h1 className="text-3xl font-black text-slate-900">Seu carrinho está vazio</h1>
        <p className="mt-3 text-slate-600">Adicione itens antes de finalizar sua compra.</p>
        <Link
          to="/produtos"
          className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
        >
          Explorar produtos
        </Link>
      </section>
    );
  }

  if (submitted) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-soft">
          <h1 className="text-3xl font-black text-slate-900">Pedido realizado com sucesso!</h1>
          <p className="mt-3 text-slate-600">
            Em breve você receberá um e-mail com os detalhes da compra.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Checkout</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">Finalizar compra</h1>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-slate-900">Dados de entrega</h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Nome" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Sobrenome" />
              <input className="md:col-span-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Endereço" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Cidade" />
              <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="CEP" />
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold text-slate-900">Pagamento</h3>

            <div className="mt-5 space-y-4">
              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">
                <input type="radio" name="payment" defaultChecked />
                Cartão de crédito
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">
                <input type="radio" name="payment" />
                Boleto
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">
                <input type="radio" name="payment" />
                Pix
              </label>
            </div>
          </div>
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
          <h3 className="text-xl font-bold text-slate-900">Resumo da compra</h3>

          <div className="mt-6 space-y-4 text-slate-600">
            {cart.map((item) => (
              <div key={`${item.id}-${item.color}-${item.size}`} className="flex justify-between gap-3">
                <span className="max-w-[180px]">
                  {item.name} x {item.quantity}
                </span>
                <span>
                  {(item.price * item.quantity).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </div>
            ))}
            <div className="flex justify-between">
              <span>Frete</span>
              <span>{shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
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

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-pink-600"
          >
            Confirmar pedido
          </button>

          <Link
            to="/carrinho"
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-bold text-slate-700"
          >
            Voltar ao carrinho
          </Link>
        </aside>
      </form>
    </section>
  );
}

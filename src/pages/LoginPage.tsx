import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoggedIn } = useAppContext();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert('Preencha todos os campos.');
      return;
    }

    login(form.name, form.email);
    navigate('/');
  };

  if (isLoggedIn) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-soft">
          <h1 className="text-3xl font-black text-slate-900">Você já está logado</h1>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
          >
            Voltar para home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center">
      <div className="w-full max-w-md rounded-[30px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Acesse sua conta</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Entrar</h1>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Nome</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Seu nome"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="seu@email.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">Senha</label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Sua senha"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" className="h-4 w-4" />
              Lembrar de mim
            </label>

            <a href="#" className="font-semibold text-primary">
              Esqueci a senha
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Entrar
          </button>

          <div className="text-center text-sm text-slate-600">
            Ainda não tem conta?{' '}
            <Link to="/produtos" className="font-bold text-primary">
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Página não encontrada</h1>
        <p className="mt-3 text-slate-600">
          A página que você tentou acessar não existe ou foi removida.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
        >
          Voltar para home
        </Link>
      </div>
    </div>
  );
}

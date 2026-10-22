import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="mb-4 text-2xl font-black text-white">Digital Store</h3>
          <p className="text-sm leading-7 text-slate-400">
            Produtos modernos para quem vive com energia, estilo e performance.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Loja</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/produtos">Categorias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Atendimento</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#">Contato</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Frete</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Contato</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>contato@digitalstore.com</li>
            <li>(11) 99999-9999</li>
            <li>São Paulo - SP</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
          © 2026 Digital Store. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

import { Menu, Search, ShoppingCart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Produtos', path: '/produtos' },
  { label: 'Coleções', path: '/produtos' },
  { label: 'Ofertas', path: '/produtos' }
];

export default function Header() {
  const { cartCount, isLoggedIn, user, logout } = useAppContext();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button className="rounded-lg border border-slate-200 p-2 md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 text-lg font-black text-white">
              D
            </div>
            <div className="text-lg font-black text-slate-900">Digital Store</div>
          </Link>
        </div>

        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 md:flex">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-28 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          {isLoggedIn ? (
            <div className="hidden items-center gap-3 md:flex">
              <span className="text-sm font-semibold text-slate-700">
                Olá, {user?.name?.split(' ')[0]}
              </span>
              <button
                onClick={logout}
                className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300"
              >
                Sair
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 md:inline-flex"
            >
              Entrar
            </Link>
          )}

          <Link
            to="/carrinho"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <ShoppingCart className="h-4 w-4" />
            Carrinho ({cartCount})
          </Link>
        </div>
      </div>
    </header>
  );
}

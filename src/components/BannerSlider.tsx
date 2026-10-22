import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const banners = [
  {
    title: 'Coleção de verão',
    text: 'Produtos premium para você viver com leveza, conforto e estilo.',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1400&q=80',
    accent: 'from-pink-500 to-orange-400'
  },
  {
    title: 'Esportes e performance',
    text: 'Na hora de evoluir, a tecnologia e a qualidade entram em jogo.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80',
    accent: 'from-slate-800 to-slate-600'
  },
  {
    title: 'Confira as ofertas',
    text: 'Economize em itens essenciais para o seu dia a dia.',
    image:
      'https://images.unsplash.com/photo-1521369909026-2afed882baee?auto=format&fit=crop&w=1400&q=80',
    accent: 'from-sky-500 to-indigo-500'
  }
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const banner = banners[current];

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-slate-900 shadow-strong">
      <div className="absolute inset-0">
        <img src={banner.image} alt={banner.title} className="h-full w-full object-cover opacity-80" />
        <div className={`absolute inset-0 bg-gradient-to-r ${banner.accent} opacity-75`} />
      </div>

      <div className="relative grid min-h-[420px] items-center px-6 py-10 md:px-10 lg:grid-cols-2 lg:px-12">
        <div className="max-w-xl text-white">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            Novidades
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">{banner.title}</h1>
          <p className="mt-4 text-base text-slate-200">{banner.text}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/produtos"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Ver coleção
            </Link>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Saiba mais
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              onClick={goNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition ${
              index === current ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
            }`}
            aria-label={`Ir para o banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

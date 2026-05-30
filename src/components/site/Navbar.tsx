import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Máquinas", href: "#maquinas" },
  { label: "Rentabilidad", href: "#rentabilidad" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <Hexagon className="h-6 w-6 text-gold transition-transform group-hover:rotate-30" strokeWidth={1.5} />
            <span className="font-display text-sm font-bold tracking-[0.25em] text-foreground">
              COLVENDING<span className="text-gold">·</span>AR
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow hover:scale-[1.03]"
          >
            Solicitar Propuesta
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            className="lg:hidden text-foreground"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-sm font-bold tracking-[0.25em]">
                COLVENDING<span className="text-gold">·</span>AR
              </span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-12">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.05 * i } }}
                  className="font-display text-4xl font-bold uppercase tracking-tight border-b border-border py-4"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink"
              >
                Solicitar Propuesta
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
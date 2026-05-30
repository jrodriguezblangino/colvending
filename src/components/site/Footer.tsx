import { Hexagon, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-ink">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Hexagon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              <span className="font-display text-sm font-bold tracking-[0.25em]">
                COLVENDING<span className="text-gold">·</span>AR
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Máquinas expendedoras premium para un negocio que trabaja 24/7.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Redes sociales"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Navegación</div>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="#inicio" className="hover:text-foreground transition-colors">Inicio</a></li>
              <li><a href="#maquinas" className="hover:text-foreground transition-colors">Máquinas</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Contacto</div>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="https://wa.link/xilaff" className="hover:text-foreground transition-colors">WhatsApp directo</a></li>
              <li>Lun a Sáb · 8 a 20hs</li>
              <li>Argentina</li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Legal</div>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li><a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© 2025 Colvending AR. Todos los derechos reservados.</div>
          <div className="uppercase tracking-[0.2em]">Hecho con precisión en Argentina</div>
        </div>
      </div>
    </footer>
  );
}
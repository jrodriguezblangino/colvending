import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { SectionHeader } from "./SectionHeader";

const points = [
  "Margen de ganancia: 60% a 120%",
  "Retorno de inversión: 12 a 18 meses",
  "Consumo eléctrico: ~$30.000/mes (ARS)",
  "Capacidad: 400 a 500 productos",
  "Financiación hasta 12 cuotas sin interés",
];

function ROIChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const progress = useMotionValue(0);
  const dash = useTransform(progress, (v) => `${v * 502} 502`);
  const percent = useTransform(progress, (v) => `${Math.round(v * 100)}%`);

  useEffect(() => {
    if (inView) {
      const c = animate(progress, 0.85, { duration: 2, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, progress]);

  const bars = [20, 35, 48, 60, 72, 85];

  return (
    <div ref={ref} className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-8 lg:p-12">
      <div className="absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none" />
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Progresión ROI
          </div>
          <div className="font-display text-2xl font-bold mt-1">18 meses</div>
        </div>
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
            <circle cx="90" cy="90" r="80" fill="none" stroke="var(--border)" strokeWidth="6" />
            <motion.circle
              cx="90" cy="90" r="80" fill="none"
              stroke="var(--gold)" strokeWidth="6" strokeLinecap="round"
              style={{ strokeDasharray: dash }}
            />
          </svg>
          <motion.div className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold text-gold">
            {percent}
          </motion.div>
        </div>
      </div>

      <div className="flex items-end gap-2 h-48 mt-12 border-b border-border pb-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            className="flex-1 rounded-t bg-gradient-to-t from-gold/30 to-gold"
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground mt-3">
        <span>M3</span><span>M6</span><span>M9</span><span>M12</span><span>M15</span><span>M18</span>
      </div>
    </div>
  );
}

export function Rentability() {
  return (
    <section id="rentabilidad" className="relative py-28 lg:py-40 bg-ink border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <SectionHeader
              tag="Rentabilidad"
              title={<>Números que <span className="text-gold italic">hablan solos.</span></>}
            />
            <ul className="mt-10 space-y-5">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gold/60 bg-gold/10">
                    <Check className="h-3.5 w-3.5 text-gold" strokeWidth={2.5} />
                  </div>
                  <span className="text-base lg:text-lg text-foreground font-light">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <ROIChart />
        </div>

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gold p-8 lg:p-10 group hover:gold-glow transition-all"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-ink/60">
              Calculá tu inversión
            </div>
            <div className="font-display text-2xl lg:text-3xl font-bold text-ink mt-2 max-w-2xl">
              ¿Querés saber cuánto podés ganar? Descargá la propuesta completa.
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink whitespace-nowrap">
            Descargar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
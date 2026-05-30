import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 500, prefix: "", suffix: "", label: "Unidades por máquina", note: "400–500" },
  { value: 120, prefix: "", suffix: "%", label: "Margen de ganancia", note: "60–120%" },
  { value: 18, prefix: "", suffix: " meses", label: "Retorno de inversión", note: "12–18" },
  { value: 15, prefix: "", suffix: " años", label: "Vida útil estimada", note: "10–15" },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="relative border-y border-border bg-ink">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4 px-6 lg:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative py-10 lg:py-14 px-4 ${
              i !== 0 ? "lg:border-l border-border" : ""
            } ${i % 2 !== 0 ? "border-l border-border lg:border-l" : ""}`}
          >
            <div className="font-display text-4xl lg:text-5xl font-bold text-gold tabular-nums">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {s.label}
            </div>
            <div className="mt-1 text-[11px] text-muted-foreground/60">
              Rango: {s.note}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
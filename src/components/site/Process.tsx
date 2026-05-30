import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Elegís tu máquina y ubicación",
    desc: "Te asesoramos en el modelo ideal según tu público y espacio disponible.",
  },
  {
    n: "02",
    title: "Nosotros instalamos y configuramos todo",
    desc: "Logística, conexión, carga inicial y capacitación incluidas.",
  },
  {
    n: "03",
    title: "La máquina vende, vos monitoreás",
    desc: "Controlás ventas, stock y reportes desde tu celular, 24/7.",
  },
];

export function Process() {
  return (
    <section className="relative py-28 lg:py-40 bg-ink border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          tag="Proceso"
          title={<>Tan simple como <span className="text-gold italic">3 pasos.</span></>}
          align="center"
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-0 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative lg:px-8"
            >
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-[-50%] h-px bg-gradient-to-r from-gold/60 to-transparent" />
              )}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/60 bg-background font-display text-xl font-bold text-gold">
                {s.n}
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold leading-tight max-w-xs">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-xs font-light">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
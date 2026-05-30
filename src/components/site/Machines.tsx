import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import m1 from "@/assets/machine-1.jpg";
import m2 from "@/assets/machine-2.jpg";
import m3 from "@/assets/machine-3.jpg";

const machines = [
  {
    img: m1,
    name: "Snack Pro 500",
    specs: ["Capacidad 500 unidades", "QR · Tarjeta · Efectivo", "Conectividad 4G"],
  },
  {
    img: m2,
    name: "Café Selecto",
    specs: ["Café en grano premium", "Pantalla táctil HD", "Hasta 12 selecciones"],
  },
  {
    img: m3,
    name: "Combo Premium",
    specs: ["Snacks + bebidas frías", "Refrigeración inteligente", "Doble columna"],
  },
];

export function Machines() {
  return (
    <section id="maquinas" className="relative py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          tag="Nuestras Máquinas"
          title={<>Equipos de <span className="text-gold italic">alto rendimiento.</span></>}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {machines.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-gold/60"
            >
              <div className="absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                <ul className="mt-4 space-y-1.5">
                  {m.specs.map((s) => (
                    <li key={s} className="text-sm text-muted-foreground font-light">
                      · {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold group/link"
                >
                  Ver detalles
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
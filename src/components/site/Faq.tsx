import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type QA = { q: string; a: string };
type Category = { icon: string; title: string; items: QA[] };

const categories: Category[] = [
  {
    icon: "⚙️",
    title: "Funcionamiento General",
    items: [
      { q: "¿Cómo opera una máquina Colvending?", a: "De forma 100% autónoma 24/7. Acepta pagos digitales y entrega productos automáticamente." },
      { q: "¿Necesito personal para atenderla?", a: "No. La máquina funciona sin operador. Vos solo monitoreás stock y ventas." },
      { q: "¿Dónde puedo instalarla?", a: "Oficinas, edificios, gimnasios, fábricas, universidades, hoteles y espacios con flujo de gente." },
      { q: "¿Cuánto espacio ocupa?", a: "Entre 0.8 y 1.2 m² según el modelo. Requiere toma de 220V común." },
    ],
  },
  {
    icon: "🔧",
    title: "Mantenimiento",
    items: [
      { q: "¿Cada cuánto requiere mantenimiento?", a: "Servicio preventivo cada 3 meses. Brindamos soporte técnico incluido el primer año." },
      { q: "¿Quién hace la recarga de productos?", a: "Vos o nuestro equipo logístico, según el plan contratado." },
      { q: "¿Qué pasa si falla?", a: "Atención técnica en 24-48hs hábiles en CABA y GBA. Repuestos siempre disponibles." },
    ],
  },
  {
    icon: "📦",
    title: "Productos y Stock",
    items: [
      { q: "¿Qué productos puedo vender?", a: "Snacks, bebidas, café, productos saludables. Te asesoramos según ubicación." },
      { q: "¿Cómo controlo el stock?", a: "Desde la app: ventas en tiempo real, alertas de bajo stock y reportes detallados." },
      { q: "¿Ustedes proveen los productos?", a: "Podemos hacerlo o gestionarlo vos directo con mayoristas, lo que prefieras." },
    ],
  },
  {
    icon: "🔒",
    title: "Pagos y Seguridad",
    items: [
      { q: "¿Qué medios de pago acepta?", a: "QR (Mercado Pago, Modo), tarjetas de débito/crédito y efectivo según el modelo." },
      { q: "¿La máquina es segura?", a: "Sí. Cerraduras reforzadas, sensores antivuelco y monitoreo remoto." },
      { q: "¿Cómo recibo el dinero?", a: "Las ventas digitales se acreditan directo en tu cuenta bancaria/billetera." },
    ],
  },
  {
    icon: "💰",
    title: "Costos y Rentabilidad",
    items: [
      { q: "¿Cuál es la inversión inicial?", a: "Depende del modelo. Ofrecemos financiación en hasta 12 cuotas sin interés." },
      { q: "¿Cuánto puedo ganar al mes?", a: "Entre 60% y 120% de margen según rotación. La propuesta detalla casos reales." },
      { q: "¿En cuánto recupero la inversión?", a: "Entre 12 y 18 meses con una buena ubicación." },
    ],
  },
  {
    icon: "🧑‍💻",
    title: "Garantía y Soporte",
    items: [
      { q: "¿Qué garantía tiene la máquina?", a: "12 meses sobre componentes electrónicos y mecánicos." },
      { q: "¿Brindan capacitación?", a: "Sí, capacitación inicial completa y soporte continuo por WhatsApp." },
      { q: "¿Hay soporte post-venta?", a: "Atención de lunes a sábado de 8 a 20hs. Comunidad de propietarios incluida." },
    ],
  },
];

function AccordionItem({ qa, open, onClick }: { qa: QA; open: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-5 text-left group"
      >
        <span className="text-base lg:text-lg font-medium text-foreground group-hover:text-gold transition-colors">
          {qa.q}
        </span>
        <Plus
          className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm lg:text-base text-muted-foreground font-light leading-relaxed">
              {qa.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryBlock({ cat }: { cat: Category }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? cat.items : cat.items.slice(0, 4);
  return (
    <div className="rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gold/20">
        <span className="text-xl">{cat.icon}</span>
        <h3 className="font-display text-lg font-bold tracking-tight">{cat.title}</h3>
      </div>
      {visible.map((qa, i) => (
        <AccordionItem
          key={qa.q}
          qa={qa}
          open={openIdx === i}
          onClick={() => setOpenIdx(openIdx === i ? null : i)}
        />
      ))}
      {cat.items.length > 4 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:underline"
        >
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          tag="Preguntas Frecuentes"
          title={<>Todo lo que <span className="text-gold italic">necesitás saber.</span></>}
          align="center"
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {categories.map((c) => (
            <CategoryBlock key={c.title} cat={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
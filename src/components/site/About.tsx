import { motion } from "framer-motion";
import { Clock, Radio, QrCode, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const features = [
  { icon: Clock, label: "Operación 24/7" },
  { icon: Radio, label: "Monitoreo remoto" },
  { icon: QrCode, label: "Pago QR / Tarjeta" },
  { icon: ShieldCheck, label: "Equipos certificados" },
];

export function About() {
  return (
    <section className="relative py-28 lg:py-40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10 items-center">
        <div>
          <SectionHeader
            tag="Sobre Nosotros"
            title={
              <>
                El negocio que <span className="text-gold italic">trabaja</span> mientras vos dormís.
              </>
            }
          />
          <div className="mt-10 space-y-6 text-muted-foreground text-base lg:text-lg font-light leading-relaxed max-w-xl">
            <p>
              Colvending AR diseña, instala y opera máquinas expendedoras
              premium con tecnología de punta. Funcionan de forma autónoma,
              sin personal, todos los días del año.
            </p>
            <p>
              Cada equipo cuenta con monitoreo remoto en tiempo real: stock,
              ventas y mantenimiento desde tu celular, en cualquier momento.
            </p>
            <p>
              Ideal para emprendedores que buscan un ingreso pasivo, y para
              empresas que quieren elevar la experiencia de sus oficinas y
              espacios comunes.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-8 lg:p-10"
          style={{ boxShadow: "0 30px 80px -20px rgba(0,0,0,0.6)" }}
        >
          <div className="absolute inset-0 rounded-2xl border border-gold/30 pointer-events-none" />
          <div className="grid grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.label}
                className="group rounded-xl border border-border bg-ink/60 p-6 transition-all hover:border-gold/60"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-all group-hover:gold-glow">
                  <f.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="mt-5 text-sm font-medium tracking-wide">{f.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
            <div className="h-px flex-1 bg-gold/30" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Tecnología certificada
            </span>
            <div className="h-px flex-1 bg-gold/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
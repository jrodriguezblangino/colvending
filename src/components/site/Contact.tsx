import { motion } from "framer-motion";
import { MessageCircle, FileDown } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-32 lg:py-48 border-t border-border"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.04 0 0) 0%, oklch(0.08 0.02 260) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-px w-8 bg-gold" />
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
            Contacto
          </span>
          <div className="h-px w-8 bg-gold" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[-0.04em] leading-[0.95]"
        >
          Tu próxima inversión
          <br />
          <span className="text-gold italic">empieza acá.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-base lg:text-lg text-muted-foreground font-light"
        >
          Hablá con un asesor hoy. Horario de atención: 8:00 a 20:00 hs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.link/xilaff"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Hablar por WhatsApp
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-all hover:border-gold hover:text-gold"
          >
            <FileDown className="h-4 w-4" />
            Descargar Propuesta
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-20 mx-auto max-w-2xl rounded-2xl border border-border bg-card/40 backdrop-blur-xl p-8 lg:p-10 text-left relative"
        >
          <div className="absolute inset-0 rounded-2xl border border-gold/20 pointer-events-none" />
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">
            Solicitá tu propuesta
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              placeholder="Nombre"
              aria-label="Nombre"
              className="bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
            <input
              placeholder="Teléfono"
              aria-label="Teléfono"
              className="bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground"
            />
            <input
              placeholder="Ciudad"
              aria-label="Ciudad"
              className="bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground sm:col-span-2"
            />
            <textarea
              placeholder="Mensaje"
              aria-label="Mensaje"
              rows={3}
              className="bg-transparent border-b border-border focus:border-gold py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground sm:col-span-2 resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-gold px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-all hover:gold-glow"
          >
            Enviar Solicitud
          </button>
        </motion.form>
      </div>
    </section>
  );
}
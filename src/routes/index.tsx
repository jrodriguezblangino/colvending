import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Process } from "@/components/site/Process";
import { Machines } from "@/components/site/Machines";
import { Rentability } from "@/components/site/Rentability";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colvending AR — Máquinas Expendedoras Premium · Ingreso Pasivo 24/7" },
      {
        name: "description",
        content:
          "Máquinas expendedoras de alta gama en Argentina. 60–120% de margen, ROI 12–18 meses. Operación 24/7 con monitoreo remoto.",
      },
      { property: "og:title", content: "Colvending AR — Vending Premium" },
      {
        property: "og:description",
        content:
          "Negocio automatizado con máquinas expendedoras premium. Vos invertís, la máquina trabaja.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Process />
      <Machines />
      <Rentability />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

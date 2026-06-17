import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-36 md:pt-44 pb-24 md:pb-32 min-h-[70vh] flex items-center">
          <div className="container-tight max-w-2xl text-center">
            <p className="font-heading font-extrabold text-emerald text-7xl md:text-9xl tracking-tight">404</p>
            <h1 className="font-heading font-extrabold text-ink text-2xl md:text-3xl mt-4">
              This page rolled off the rack.
            </h1>
            <p className="text-muted mt-3 text-lg">
              We couldn&apos;t find what you were looking for. Try one of these instead.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="btn-primary"><Home className="w-4 h-4" /> Back home</Link>
              <Link href="/services" className="btn-secondary">Browse coverage <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

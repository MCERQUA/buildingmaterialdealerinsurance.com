import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Insurance Insights for Building Material Dealers",
  description:
    "Field-tested insurance guidance for lumber yards, building supply dealers, and hardware distributors. Fire exposure, product liability, inland marine, fleet, and more — from Contractors Choice Agency.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "Blog — Building Material Dealer Insurance",
    description:
      "Field-tested insurance guidance for lumber yards, building supply dealers, and hardware distributors.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-yard pt-32 md:pt-40 pb-12 md:pb-16">
          <div className="container-wide">
            <FadeIn className="max-w-3xl">
              <span className="eyebrow">The Yard Desk</span>
              <h1 className="font-heading font-extrabold text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight mt-3">
                Insurance guidance for the building supply trade.
              </h1>
              <p className="lead mt-5">
                Real answers on fire exposure, product liability, inland marine, fleet, and work comp — written by people who write dealer programs every day.
              </p>
            </FadeIn>
          </div>
        </section>

        {featured && (
          <section className="bg-yard pb-16 md:pb-20">
            <div className="container-wide">
              <FadeIn>
                <Link href={`/blog/${featured.slug}`} className="group block">
                  <article className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center card p-6 md:p-8">
                    {featured.image && (
                      <div className="rounded-2xl overflow-hidden">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-56 md:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div>
                      <span className="pill-emerald mb-4">Featured</span>
                      <h2 className="font-heading font-extrabold text-ink text-2xl md:text-3xl leading-tight group-hover:text-emerald transition-colors">
                        {featured.title}
                      </h2>
                      <p className="mt-3 text-muted leading-relaxed">{featured.description}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted">
                        <span className="inline-flex items-center gap-1.5"><Tag className="w-3.5 h-3.5 text-emerald" />{featured.category}</span>
                        <span className="inline-flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-heading font-bold text-emerald group-hover:gap-2.5 transition-all">
                        Read article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            </div>
          </section>
        )}

        <section className="bg-yard-alt py-16 md:py-20 border-t border-line">
          <div className="container-wide">
            {rest.length > 0 && (
              <>
                <h2 className="font-heading font-extrabold text-ink text-2xl md:text-3xl mb-8">All articles</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((p, i) => (
                    <FadeIn key={p.slug} delay={(i % 3) * 0.08}>
                      <Link href={`/blog/${p.slug}`} className="group block h-full">
                        <article className="card-hover p-6 h-full flex flex-col">
                          {p.image && (
                            <div className="rounded-xl overflow-hidden mb-4 -mx-2 -mt-2">
                              <img src={p.image} alt={p.title} className="w-full h-40 object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                            </div>
                          )}
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-light text-emerald-dark rounded-md text-xs font-heading font-semibold w-fit mb-3">
                            <Tag className="w-3 h-3" />{p.category}
                          </span>
                          <h3 className="font-heading font-bold text-ink text-lg leading-tight group-hover:text-emerald transition-colors line-clamp-2">{p.title}</h3>
                          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3 flex-grow">{p.description}</p>
                          <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                            <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.readTime}</span>
                          </div>
                        </article>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </>
            )}
            {posts.length === 0 && (
              <p className="text-muted">Articles coming soon. Check back shortly.</p>
            )}
          </div>
        </section>

        <CTABand />
      </main>
      <Footer />
    </>
  );
}

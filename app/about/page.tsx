import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400 mb-3">about the project</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-4">
            Russia Uncovered
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
            A slow travel guide to Russia: helping you see the country in more depth — from famous cities to quiet
            places you don&apos;t usually find in tourist brochures.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Project mission</h2>
          <Card className="p-6 sm:p-8 border-slate-200 bg-white rounded-2xl">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
              Russia Uncovered is a non-commercial guide for people who want to see Russia without noise and ads. We
              collect routes, context and practical tips so you don&apos;t have to drown in endless tabs.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              From Moscow and Saint Petersburg to Baikal, Altai and the Caucasus — we give background, logistics tips
              and help you choose the best starting points to explore each region.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">What you&apos;ll find on the site</h2>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            <Card className="p-5 sm:p-6 border-slate-200 bg-white rounded-2xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">routes and cities</p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Structured guides</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Short history, local vibe, key spots and a logical order in which it&apos;s convenient to visit them.
              </p>
            </Card>

            <Card className="p-5 sm:p-6 border-slate-200 bg-white rounded-2xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">practical info</p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Useful details</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transport, seasons, trip length, rough budget and things it&apos;s better to think about in advance.
              </p>
            </Card>

            <Card className="p-5 sm:p-6 border-slate-200 bg-white rounded-2xl">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">experiences</p>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Curated places</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Not only the “must-see” checklist, but also quiet streets, viewpoints, cafés and detours worth taking.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Regions we start with</h2>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Moscow</h4>
              <p className="text-sm text-slate-600">
                The capital with classic must-see spots and neighbourhoods where life feels stronger than postcards.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Saint Petersburg</h4>
              <p className="text-sm text-slate-600">
                Canals, museums, courtyards and a couple of routes so you don&apos;t get stuck only on Nevsky and in the
                Hermitage.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Baikal</h4>
              <p className="text-sm text-slate-600">
                A lake with so many options around it. We help you choose the right season and core routes.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Altai</h4>
              <p className="text-sm text-slate-600">
                Mountains and valleys for travellers ready for a slightly wilder, but very beautiful journey.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Caucasus</h4>
              <p className="text-sm text-slate-600">
                High passes, mountain villages and food that makes you want to stay longer.
              </p>
            </Card>
            <Card className="p-4 sm:p-5 border-slate-200 bg-white rounded-2xl">
              <h4 className="font-semibold text-slate-900 mb-1">Golden Ring</h4>
              <p className="text-sm text-slate-600">
                Small towns with churches, history and a calm rhythm, perfect for a short escape from Moscow.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">The Russia Uncovered approach</h2>
          <Card className="p-6 sm:p-8 border-slate-200 bg-white rounded-2xl">
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Non-commercial.</strong> The goal is to help you plan a trip, not sell a package tour.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Focus on authenticity.</strong> No “top 10 places just to tick off”, only what is truly worth
                  your time.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Wide coverage.</strong> From major cities to remote regions and natural parks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Practical focus.</strong> Concrete tips on how to optimise your route, budget and time.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-500 font-bold shrink-0 mt-[2px]">✓</span>
                <span className="text-sm sm:text-base text-slate-700">
                  <strong>Respect for places.</strong> We support a careful attitude to nature and local communities.
                </span>
              </li>
            </ul>
          </Card>
        </section>

        <section className="text-center pt-4 pb-6">
          <p className="text-sm sm:text-base text-slate-600 mb-4">Ready to jump straight into routes?</p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-slate-900 hover:text-slate-600">
            <span>Go to tours and destinations</span>
            <span className="text-xs">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}

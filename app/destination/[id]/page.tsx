"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DestinationHeader } from "@/components/destination-header";
import { AttractionCard } from "@/components/attraction-card";
import { InfoSection } from "@/components/info-section";
import { Card } from "@/components/ui/card";
import { useParams } from "next/navigation";
import clsx from "clsx";
import { destinations } from "./destinations";

export default function DestinationPage() {
  const params = useParams<{ id: string }>();
  const dest = destinations[params.id];

  if (!dest) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 mb-3">404</p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">Destination not found</h1>
          <p className="text-sm text-slate-600 mb-6">
            It may still be in development or you followed an outdated link.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 sm:mb-8">
          <Breadcrumbs
            items={[
              { label: "Destinations", href: "/tours" },
              { label: dest.name, href: `/destination/${params.id}` },
            ]}
          />
        </div>

        <DestinationHeader
          name={dest.name}
          tagline={dest.tagline}
          description={dest.description}
          heroImage={dest.image}
          bestTime={dest.bestTime}
          difficulty={dest.difficulty}
        />

        <div className="space-y-14 sm:space-y-16 lg:space-y-20 mt-10 sm:mt-12">
          <section className="mb-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">destination highlights</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">Main places and experiences</h2>
              </div>
              <p className="max-w-sm text-xs md:text-sm text-slate-500">
                Key points on the route that are the best starting places to get to know the region.
              </p>
            </div>

            <div
              className="
                mt-8 grid gap-5 sm:gap-6
                grid-cols-1
                md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
              {dest.highlights.map((highlight: any, idx: number) => {
                const isLast = idx === dest.highlights.length - 1;

                return (
                  <Link
                    key={idx}
                    href={`/attraction/${params.id}/${idx}`}
                    className={clsx("block h-full", isLast && "md:col-span-full")}>
                    <AttractionCard
                      title={highlight.title}
                      description={highlight.description}
                      image={highlight.image}
                      category={highlight.category}
                    />
                  </Link>
                );
              })}
            </div>
          </section>

          <section>
            <InfoSection title="Practical information" items={dest.practical} icon="📋" />
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">💡</span>
              <h2 className="text-2xl font-semibold text-slate-900">Tips for travellers</h2>
            </div>
            <Card className="border border-slate-200 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
              <ul className="space-y-4">
                {dest.tips.map((tip: string, idx: number) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-0.5 rounded-full border border-emerald-200 bg-emerald-50 px-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-700 shrink-0">
                      tip
                    </span>
                    <span className="text-sm sm:text-base text-slate-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <section>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <h2 className="text-2xl font-semibold text-slate-900">Other destinations in Russia</h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
                If you want to extend your trip, consider adding a couple of nearby regions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {Object.entries(destinations)
                .filter(([id]) => id !== params.id)
                .slice(0, 3)
                .map(([id, d]: [string, any]) => (
                  <Link key={id} href={`/destination/${id}`}>
                    <Card className="group overflow-hidden border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer">
                      <div className="relative h-40 sm:h-44 overflow-hidden bg-slate-100">
                        <Image
                          src={d.image || "/placeholder.svg"}
                          alt={d.name}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200/90">
                            {d.tagline}
                          </p>
                          <p className="text-sm font-semibold text-white">{d.name}</p>
                        </div>
                      </div>
                      <div className="p-4 border-t border-slate-100">
                        <p className="text-xs text-slate-500">More about the region →</p>
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

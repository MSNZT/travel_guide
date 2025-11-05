import { ScrollReveal } from "@/components/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

const overlayCardClass = "relative rounded-3xl overflow-hidden min-h-[260px] flex items-end p-6 text-white shadow-lg";

export default function Home() {
  return (
    <>
      <main id="home" className="bg-white">
        <section className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-blue-900 mb-4">Discover Russia</h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Travel across Russia and explore its history, culture, and nature with our detailed travel guide
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-12 py-4 text-base font-semibold text-white hover:bg-blue-700 transition shadow-lg">
                Start your journey
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="border-b bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">About the project</h2>
                <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Our non-profit project is a travel guide to Russia created to provide travelers with reliable and
                  accurate information about the country.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  We help travelers plan meaningful trips, revealing both iconic landmarks and hidden gems of Russia.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="w-full rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/moscow-kremlin-red-square-historic-architecture.jpg"
                  alt="Moscow - Kremlin"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="regions" className="border-b bg-white pt-20 pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Iconic destinations in Russia</h2>
                <p className="text-lg text-slate-600">
                  Explore Russia&apos;s most iconic sights with our detailed travel guides
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {[
                  {
                    title: "The Golden Ring of Russia",
                    desc: "A guide to the towns of the Golden Ring, including historical facts and tips for travelers.",
                    img: "/golden-ring-russia-historic-churches.jpg",
                    link: "/destination/golden-ring",
                  },
                  {
                    title: "Saint Petersburg",
                    desc: "A detailed overview of Saint Petersburg’s attractions, including museums, theaters, and architectural landmarks.",
                    img: "/saint-petersburg-hermitage-palace.jpg",
                    link: "/destination/spb",
                  },
                  {
                    title: "Moscow",
                    desc: "Information about Moscow’s main attractions, including Red Square, the Kremlin, and other historic sites.",
                    img: "/moscow-red-square-kremlin.jpg",
                    link: "/destination/moscow",
                  },
                ].map((item, idx) => (
                  <a href={item.link} key={idx}>
                    <article className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition overflow-hidden h-full cursor-pointer">
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <Image
                          src={item.img || "/placeholder.svg"}
                          alt={item.title}
                          width={900}
                          height={600}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-blue-900 mb-3">{item.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: "Natural parks of Russia",
                    desc: "A guide to Russia’s natural parks and reserves, including travel tips and information about local flora and fauna.",
                    img: "/russia-national-parks-nature-wildlife.jpg",
                    link: "/destination/national-parks",
                  },
                  {
                    title: "Volga river cruise",
                    desc: "Descriptions of popular routes along the Volga, including cities and attractions on the riverbanks.",
                    img: "/volga-river-cruise-scenic-views.jpg",
                    link: "/destination/volga",
                    actions: true,
                  },
                ].map((item, idx) => (
                  <article
                    key={idx}
                    className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-slate-100">
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        width={900}
                        height={600}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg text-blue-900 mb-3">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{item.desc}</p>
                      {item.actions && (
                        <div className="flex gap-3">
                          <a
                            href={item.link}
                            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
                            Read more
                          </a>
                          <button className="inline-flex items-center justify-center rounded-full border-2 border-blue-300 px-6 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition">
                            Plan a route
                          </button>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="highlights" className="border-b bg-blue-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Explore Russia’s hidden gems</h2>
                <p className="text-lg text-slate-600">
                  Discover unique places and cultural features that are not part of typical tourist routes
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-2 mb-8">
                <article className={overlayCardClass}>
                  <Image
                    src="/hidden-gems-russia-off-beaten-path.jpg"
                    alt="Lesser-known attractions"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Lesser-known attractions</h3>
                    <p className="text-sm text-slate-100/90">
                      Immerse yourself in Russia’s history and culture by visiting places that rarely make it into
                      guidebooks.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/cultural-experience-russia-traditions.jpg"
                    alt="Cultural experience"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Cultural experience</h3>
                    <p className="text-sm text-slate-100/90">
                      Experience the traditions and customs of different Russian regions through unique cultural events.
                    </p>
                  </div>
                </article>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <article className={overlayCardClass}>
                  <Image
                    src="/local-traditions-russia-culture.jpg"
                    alt="Local specialties"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-sm sm:text-base mb-2">Local specialties</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Learn about local traditions, cuisine, and lifestyle to understand Russia more deeply.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/off-the-beaten-path-russia-adventures.jpg"
                    alt="Off-the-beaten-path exploration"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-wide text-slate-200/90">
                      Unforgettable adventures
                    </span>
                    <h3 className="font-bold text-sm sm:text-base mb-1">Off-the-beaten-path exploration</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Travel across Russia discovering places that transform the way you see the country.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/custom-travel-routes-russia-planning.jpg"
                    alt="Planning unconventional trips"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-wide text-slate-200/90">Unique routes</span>
                    <h3 className="font-bold text-sm sm:text-base mb-1">Planning unconventional trips</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Create your own itinerary based on interesting and lesser-known places in Russia.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/hidden-gems-russia-discovers.jpg"
                    alt="Hidden gems"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-sm sm:text-base mb-2">Hidden gems</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Find amazing places that will make your trip across Russia unforgettable.
                    </p>
                  </div>
                </article>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="culture" className="border-b bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Planning your trip</h2>
                <p className="text-lg text-slate-600">
                  Our guide will help you plan a trip around Russia. You will find information about visa requirements,
                  transport, accommodation options, and practical travel tips.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {[
                  { title: "Visa requirements", img: "/travel-visa-documents-passport.jpg" },
                  { title: "Transport", img: "/russia-trains-railway-transport.jpg" },
                  { title: "Accommodation recommendations", img: "/hotel-accommodation-luxury-rooms.jpg" },
                ].map((item, idx) => (
                  <article
                    key={idx}
                    className="rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition overflow-hidden">
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title}
                        width={900}
                        height={600}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-blue-900">{item.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="rounded-3xl border border-slate-200 bg-white/90 px-6 py-8 sm:px-8 sm:py-9 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">next step</p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
                    Ready to explore tours and itineraries?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                    Go to the tours section and choose the travel format that suits you—from a short weekend break to a
                    full vacation.
                  </p>
                </div>

                <div>
                  <Link
                    href="/tours"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/70">
                    Go to tours
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}

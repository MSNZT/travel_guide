"use client";

import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/ui/card";
import { destinations } from "./destinations";
import { useParams } from "next/navigation";

export default function AttractionPage() {
  const params = useParams<{ id: string; index: string }>();
  const attraction = destinations[params.id]?.highlights[Number.parseInt(params.index)];
  const destination = destinations[params.id];

  if (!attraction || !destination) {
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
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs
          items={[
            { label: "Destinations", href: "/tours" },
            { label: destination.name, href: `/destination/${params.id}` },
            { label: attraction.title, href: "/" },
          ]}
        />

        <div className="mb-12">
          <div className="w-full rounded-3xl overflow-hidden shadow-lg mb-8">
            <Image
              src={attraction.image || "/placeholder.svg"}
              alt={attraction.title}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            {attraction.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">{attraction.title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed">{attraction.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border border-blue-100 p-6 bg-blue-50">
            <h3 className="font-bold text-lg text-blue-900 mb-4">ℹ️ Key information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600">Best time to visit</p>
                <p className="font-semibold text-slate-900">{attraction.bestTime}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Ticket information</p>
                <p className="font-semibold text-slate-900">{attraction.ticketInfo}</p>
              </div>
            </div>
          </Card>

          <Card className="border border-blue-100 p-6">
            <h3 className="font-bold text-lg text-blue-900 mb-4">📝 Detailed description</h3>
            <p className="text-slate-700 leading-relaxed">{attraction.details}</p>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">💡 Visiting tips</h2>
          <Card className="border border-blue-100 p-8 bg-blue-50">
            <ul className="space-y-4">
              {attraction.tips.map((tip: string, idx: number) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-blue-600 font-bold shrink-0">✓</span>
                  <span className="text-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="text-center py-8">
          <Link href={`/destination/${params.id}`}>
            <button className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white hover:bg-blue-700 transition">
              ← Back to destination
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}

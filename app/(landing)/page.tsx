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
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-blue-900 mb-4">
              Откройте для себя Россию
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Путешествуйте по России, изучайте её историю, культуру и природу с нашим подробным путеводителем
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-12 py-4 text-base font-semibold text-white hover:bg-blue-700 transition shadow-lg">
                Начать путешествие
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="border-b bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-4xl font-bold text-blue-900 mb-6">О проекте</h2>
                <div className="w-12 h-1 bg-blue-500 mb-8 rounded-full" />
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Наш некоммерческий проект — это туристический путеводитель по России, созданный для предоставления
                  путешественникам надёжной и достоверной информации о стране.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Мы помогаем туристам планировать осмысленные путешествия, открывая для них как знаковые
                  достопримечательности, так и скрытые жемчужины России.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="w-full rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/moscow-kremlin-red-square-historic-architecture.jpg"
                  alt="Москва - Кремль"
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
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Знаковые направления в России</h2>
                <p className="text-lg text-slate-600">
                  Исследуйте самые знаковые достопримечательности России с помощью наших подробных путеводителей
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {[
                  {
                    title: "Золотое кольцо России",
                    desc: "Путеводитель по городам Золотого кольца, включая исторические факты и советы для путешественников.",
                    img: "/golden-ring-russia-historic-churches.jpg",
                    link: "/destination/golden-ring",
                  },
                  {
                    title: "Санкт-Петербург",
                    desc: "Подробное описание достопримечательностей Санкт-Петербурга, включая музеи, театры и архитектурные памятники.",
                    img: "/saint-petersburg-hermitage-palace.jpg",
                    link: "/destination/spb",
                  },
                  {
                    title: "Москва",
                    desc: "Информация о главных достопримечательностях Москвы, включая Красную площадь, Кремль и другие исторические места.",
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
                    title: "Природные парки России",
                    desc: "Путеводитель по природным паркам и заповедникам России, включая советы по организации путешествий и информацию о флоре и фауне.",
                    img: "/russia-national-parks-nature-wildlife.jpg",
                    link: "/destination/national-parks",
                  },
                  {
                    title: "Круиз по Волге",
                    desc: "Описание популярных маршрутов по Волге, включая города и достопримечательности на берегах реки.",
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
                            Читать далее
                          </a>
                          <button className="inline-flex items-center justify-center rounded-full border-2 border-blue-300 px-6 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition">
                            Планировать маршрут
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
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Исследуйте скрытые жемчужины России</h2>
                <p className="text-lg text-slate-600">
                  Откройте для себя уникальные места и культурные особенности, которые не входят в типичные
                  туристические маршруты
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-2 mb-8">
                <article className={overlayCardClass}>
                  <Image
                    src="/hidden-gems-russia-off-beaten-path.jpg"
                    alt="Малоизвестные достопримечательности"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Малоизвестные достопримечательности</h3>
                    <p className="text-sm text-slate-100/90">
                      Погрузитесь в историю и культуру России, посетив места, которые редко попадают в путеводители.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/cultural-experience-russia-traditions.jpg"
                    alt="Культурный опыт"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">Культурный опыт</h3>
                    <p className="text-sm text-slate-100/90">
                      Прикоснитесь к традициям и обычаям разных регионов России через уникальные культурные мероприятия.
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
                    alt="Местные особенности"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-sm sm:text-base mb-2">Местные особенности</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Узнайте о местных традициях, кухне и образе жизни, чтобы глубже понять Россию.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/off-the-beaten-path-russia-adventures.jpg"
                    alt="Исследование вне туристических троп"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-wide text-slate-200/90">
                      Незабываемые приключения
                    </span>
                    <h3 className="font-bold text-sm sm:text-base mb-1">Исследование вне туристических троп</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Путешествуйте по России, открывая для себя места, которые оживляют ваше восприятие страны.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/custom-travel-routes-russia-planning.jpg"
                    alt="Планирование нестандартных путешествий"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-wide text-slate-200/90">Уникальные маршруты</span>
                    <h3 className="font-bold text-sm sm:text-base mb-1">Планирование нестандартных путешествий</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Создайте свой маршрут, основанный на интересных и малоизвестных местах России.
                    </p>
                  </div>
                </article>

                <article className={overlayCardClass}>
                  <Image
                    src="/hidden-gems-russia-discovers.jpg"
                    alt="Скрытые жемчужины"
                    fill
                    className="object-cover absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative">
                    <h3 className="font-bold text-sm sm:text-base mb-2">Скрытые жемчужины</h3>
                    <p className="text-xs sm:text-sm text-slate-100/90">
                      Найдите удивительные места, которые сделают ваше путешествие по России незабываемым.
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
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Планирование вашей поездки</h2>
                <p className="text-lg text-slate-600">
                  Наш путеводитель поможет вам спланировать путешествие по России. Вы найдёте информацию о визовых
                  требованиях, транспорте, вариантах размещения и полезные советы для путешествий
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid gap-8 md:grid-cols-3 mb-12">
                {[
                  { title: "Визовые требования", img: "/travel-visa-documents-passport.jpg" },
                  { title: "Транспорт", img: "/russia-trains-railway-transport.jpg" },
                  { title: "Рекомендации по размещению", img: "/hotel-accommodation-luxury-rooms.jpg" },
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
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 mb-2">следующий шаг</p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">
                    Готовы посмотреть экскурсии и маршруты?
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                    Перейдите в раздел туров и подберите формат путешествия под себя — от короткого уикенда до
                    полноценного отпуска.
                  </p>
                </div>

                <div>
                  <Link
                    href="/tours"
                    className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/70">
                    Перейти к турам
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

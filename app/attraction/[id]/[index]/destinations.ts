export const destinations: Record<string, any> = {
  moscow: {
    name: "Moscow",
    highlights: [
      {
        title: "Red Square & Kremlin",
        description:
          "The heart of Moscow and Russia, featuring the iconic St. Basil's Cathedral, Lenin's Mausoleum, and historic walls surrounding the presidential residence.",
        image: "/red-square-kremlin-cathedral.jpg",
        category: "Must-See",
        details:
          "Red Square is the largest plaza in Moscow and one of the most recognizable landmarks in Russia. The Kremlin is the ancient heart of the city.",
        bestTime: "September-May for fewer crowds",
        ticketInfo: "Free entry to square, museums have separate fees",
        tips: [
          "Visit at sunset for the best photos",
          "Arrive early to avoid crowds",
          "Respect the solemn atmosphere at Lenin's Mausoleum",
        ],
      },
      {
        title: "Hermitage Museum",
        description:
          "One of the world's largest art museums with an extraordinary collection spanning from ancient Egypt to the 20th century.",
        image: "/kremlin-palace-interior-moscow.jpg",
        category: "Museum",
        details: "The Hermitage is one of the largest and oldest museums in the world.",
        bestTime: "Weekday mornings",
        ticketInfo: "Paid admission, online booking recommended",
        tips: ["Book tickets online", "Hire a guide for best experience", "Allow 3-4 hours minimum"],
      },
      {
        title: "Moscow Metro",
        description:
          'Often called "people\'s palaces," these stunning subway stations feature ornate mosaics, chandeliers, and frescoes.',
        image: "/moscow-metro-station-art.jpg",
        category: "Architecture",
        details: "Moscow Metro is famous for its beautiful stations decorated with mosaics and chandeliers.",
        bestTime: "Off-peak hours",
        ticketInfo: "Inexpensive transit pass",
        tips: [
          "Visit during off-peak hours",
          "Try the famous stroganoff at metro cafes",
          "Photography allowed in stations",
        ],
      },
    ],
  },
  "golden-ring": {
    name: "Golden Ring",
    highlights: [
      {
        title: "Rostov the Great",
        description:
          "An ancient town featuring the magnificent Rostov Kremlin with white walls and stunning churches overlooking Nero Lake.",
        image: "/rostov-kremlin-ancient-russian-town-white-walls-ch.jpg",
        category: "Town",
        details:
          "Rostov the Great is one of the oldest towns in Russia, founded in the 9th century. The Rostov Kremlin is a spectacular white-walled fortress overlooking the peaceful Nero Lake.",
        bestTime: "May-September",
        ticketInfo: "Kremlin museum admission required",
        tips: [
          "Stay overnight to enjoy the peaceful atmosphere",
          "Visit the Kremlin at sunset for stunning photos",
          "Try local pastries at small cafes",
        ],
      },
      {
        title: "Suzdal Village Museums",
        description:
          "An open-air museum with traditional wooden architecture, local crafts, and authentic Russian village atmosphere.",
        image: "/suzdal-traditional-russian-wooden-architecture-vil.jpg",
        category: "Museum",
        details: "Suzdal is an open-air museum of traditional Russian wooden architecture with artisan demonstrations.",
        bestTime: "June-August",
        ticketInfo: "Museum pass covers multiple buildings",
        tips: ["Wear comfortable shoes for walking", "Try kvass (traditional drink)", "Watch craft demonstrations"],
      },
      {
        title: "Sergiev Posad Monastery",
        description:
          "One of Russia's holiest pilgrimage sites featuring stunning architecture and active monastic traditions dating to the 14th century.",
        image: "/sergiev-posad-trinity-monastery-blue-onion-dome.jpg",
        category: "Monastery",
        details: "Sergiev Posad is one of the most important pilgrimage sites in Russian Orthodoxy.",
        bestTime: "Any season",
        ticketInfo: "Free entry to grounds, paid access to churches",
        tips: ["Dress modestly", "Remove shoes inside", "Visit during morning prayers for atmosphere"],
      },
    ],
  },
};

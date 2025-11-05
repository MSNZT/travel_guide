export const destinations: Record<string, any> = {
  moscow: {
    name: "Moscow",
    tagline: "The Heart of Russia",
    description:
      "Moscow is Russia's vibrant capital, where centuries of history blend seamlessly with modern innovation. From the iconic Red Square and ancient Kremlin to world-class museums and contemporary art galleries, Moscow offers an intoxicating mix of tradition and progress. The city's distinctive architecture, including the famous onion-domed churches, reflects its unique cultural heritage.",
    image: "/moscow-kremlin-red-square-night.jpg",
    bestTime: "May-September",
    difficulty: "Easy",
    highlights: [
      {
        title: "Red Square & Kremlin",
        description:
          "The heart of Moscow and Russia, featuring the iconic St. Basil's Cathedral, Lenin's Mausoleum, and historic walls surrounding the presidential residence.",
        image: "/red-square-kremlin-cathedral.jpg",
        category: "Must-See",
      },
      {
        title: "Tretyakov Gallery Museum",
        description:
          "One of the world's largest art museums with an extraordinary collection spanning from ancient Egypt to the 20th century.",
        image: "/kremlin-palace-interior-moscow.jpg",
        category: "Museum",
      },
      {
        title: "Moscow Metro",
        description:
          'Often called "people\'s palaces," these stunning subway stations feature ornate mosaics, chandeliers, and frescoes.',
        image: "/moscow-metro-station-art.jpg",
        category: "Architecture",
      },
    ],
    practical: [
      { label: "Best Time to Visit", value: "May to September" },
      { label: "Getting Around", value: "Metro, Taxis, Buses" },
      { label: "Currency", value: "Russian Ruble (RUB)" },
      { label: "Language", value: "Russian, some English" },
      { label: "Main Airport", value: "Sheremetyevo (SVO)" },
      { label: "Average Stay", value: "3-5 days" },
    ],
    tips: [
      "Get a multi-day metro pass for convenience",
      "Visit museums early to avoid crowds",
      "Try traditional Russian cuisine in local restaurants",
      "Book tickets online in advance",
      "Learn basic Russian phrases",
      "Respect Orthodox church etiquette",
    ],
  },
  spb: {
    name: "Saint Petersburg",
    tagline: "The Venice of the North",
    description:
      'Built on 42 islands and connected by 300+ bridges, Saint Petersburg is Russia\'s most Westernized city and a UNESCO World Heritage site. Often called the "Venice of the North," this elegant metropolis showcases stunning architecture, grand palaces, and world-class cultural institutions. Home to the legendary Hermitage Museum and the opulent Winter Palace, the city exudes imperial grandeur and artistic brilliance.',
    image: "/saint-petersburg-hermitage-palace-winter.jpg",
    bestTime: "June-August (White nights)",
    difficulty: "Easy",
    highlights: [
      {
        title: "Hermitage Museum",
        description:
          "One of the world's greatest art collections housed in the historic Winter Palace with over 3 million artworks.",
        image: "/hermitage-museum-palace-square.jpg",
        category: "Must-See",
      },
      {
        title: "Peterhof Palace",
        description:
          'The "Russian Versailles" featuring stunning gardens, golden fountains, and imperial residences overlooking the Baltic Sea.',
        image: "/peterhof-palace-golden-fountains.jpg",
        category: "Palace",
      },
      {
        title: "Church of the Savior on Blood",
        description:
          "A breathtaking Orthodox church adorned with intricate mosaics and ornate domes, built on the site of a historical assassination.",
        image: "/church-savior-blood-onion-dome.jpg",
        category: "Architecture",
      },
    ],
    practical: [
      { label: "Best Time to Visit", value: "June-August (White Nights)" },
      { label: "Getting Around", value: "Metro, Marshrutkas, Boats" },
      { label: "Currency", value: "Russian Ruble (RUB)" },
      { label: "Language", value: "Russian, limited English" },
      { label: "Main Airport", value: "Pulkovo (LED)" },
      { label: "Average Stay", value: "3-4 days" },
    ],
    tips: [
      "Visit during white nights (June-July) for 24-hour daylight",
      "Take a boat tour through the canals",
      "Book Hermitage tickets in advance",
      "Explore street art in various neighborhoods",
      "Try blini (Russian pancakes) at street markets",
      "Dress warmly even in summer for evening boat rides",
    ],
  },
  "lake-baikal": {
    name: "Lake Baikal",
    tagline: "The Sacred Sea",
    description:
      "Lake Baikal is the world's oldest and deepest freshwater lake, containing 23% of Earth's fresh surface water. Surrounded by pristine taiga forests and dramatic mountain ranges, this natural wonder is a UNESCO World Heritage site. The crystalline waters, unique endemic species, and remote wilderness make it one of Russia's most spectacular destinations for nature lovers and adventure seekers.",
    image: "/lake-baikal-siberia-mountains.jpg",
    bestTime: "June-September (July-August best)",
    difficulty: "Medium",
    highlights: [
      {
        title: "Lake Baikal Ice Formations",
        description:
          "In winter, the lake freezes to spectacular clarity, creating otherworldly landscapes perfect for ice hiking and photography.",
        image: "/lake-baikal-siberia-mountains.jpg",
        category: "Nature",
        featured: true,
      },
      {
        title: "Listvyanka Village",
        description:
          "Picturesque lakeside village offering hiking trails, local restaurants, and stunning views of Baikal's western shore.",
        image: "/listvynka-village.png",
        category: "Village",
      },
      {
        title: "Olkhon Island",
        description:
          "The largest island in Baikal featuring shamanic rock formations, remote wilderness, and authentic Baikal culture.",
        image: "/olkhon-island.png",
        category: "Island",
      },
    ],
    practical: [
      { label: "Best Time to Visit", value: "July-August (summer)" },
      { label: "Getting Around", value: "Car rentals, Tours, Hikes" },
      { label: "Currency", value: "Russian Ruble (RUB)" },
      { label: "Language", value: "Russian" },
      { label: "Nearest Airport", value: "Irkutsk (IKT)" },
      { label: "Average Stay", value: "4-7 days" },
    ],
    tips: [
      "Visit in summer for best accessibility",
      "Book accommodations in advance",
      "Hire a local guide for wilderness exploration",
      "Bring insect repellent for mosquitoes",
      "Pack layers for temperature changes",
      "Try local omul fish (endemic species)",
    ],
  },
  altai: {
    name: "Altai Mountains",
    tagline: "Untamed Wilderness",
    description:
      "The Altai Mountains represent some of Russia's most pristine and dramatic landscapes. This remote region is characterized by towering peaks, cascading waterfalls, crystal-clear alpine lakes, and vast forests teeming with wildlife. UNESCO World Heritage site designation reflects the area's exceptional biodiversity and geological significance. It's a paradise for trekking, mountaineering, and experiencing authentic wilderness.",
    image: "/altai-mountains-hiking-wilderness.jpg",
    bestTime: "July-September",
    difficulty: "Hard",
    highlights: [
      {
        title: "Mount Belukha Trekking",
        description:
          "A challenging multi-day trek to Russia's highest peak in Siberia at 4,506m, offering breathtaking alpine scenery.",
        image: "/altai-mountains-hiking-wilderness.jpg",
        category: "Trekking",
      },
      {
        title: "Geizerny Lake",
        description:
          "A stunning alpine lake surrounded by peaks, featuring unique geothermal springs and pristine wilderness.",
        image: "/geizer-lake.png",
        category: "Lake",
      },
      {
        title: "Karakol Valley",
        description:
          "A scenic valley with three serene glacier-fed lakes, perfect for day hikes and photography of dramatic peaks.",
        image: "/russia-landscapes-mountains-forests-nature.jpg",
        category: "Valley",
      },
    ],
    practical: [
      { label: "Best Time to Visit", value: "July-September" },
      { label: "Getting Around", value: "Jeeps, Horse treks, Hiking" },
      { label: "Currency", value: "Russian Ruble (RUB)" },
      { label: "Language", value: "Russian" },
      { label: "Gateway City", value: "Gorno-Altaysk" },
      { label: "Average Stay", value: "5-10 days" },
    ],
    tips: [
      "Hire experienced guides for remote areas",
      "Book accommodations in mountain lodges",
      "Pack high-altitude gear and proper hiking boots",
      "Bring water purification tablets",
      "Allow acclimatization time",
      "Photography: sunrise/sunset times critical for peaks",
    ],
  },
  caucasus: {
    name: "Caucasus Region",
    tagline: "Land of Mountains",
    description:
      "The Caucasus Mountains are the highest mountain range in Europe, with Mount Elbrus at 5,642m towering above the landscape. This diverse region combines alpine beauty with rich cultural heritage, featuring snow-capped peaks, pristine valleys, and vibrant ethnic communities. The region offers world-class mountaineering, skiing, and trekking opportunities while maintaining unique traditions and authentic mountain culture.",
    image: "/caucasus-mountains-elbrus-peaks.jpg",
    bestTime: "June-September",
    difficulty: "Hard",
    highlights: [
      {
        title: "Mount Elbrus",
        description:
          "Europe's highest peak at 5,642m, offering mountaineering expeditions and Europe's best skiing with stunning panoramic views.",
        image: "/caucasus-mountains-elbrus-peaks.jpg",
        category: "Peak",
      },
      {
        title: "Dombay Ski Resort",
        description:
          "World-class skiing destination with modern facilities, diverse runs, and access to pristine alpine terrain.",
        image: "/dombai-ski-resort.png",
        category: "Skiing",
      },
      {
        title: "Arkhyz Region",
        description:
          "Picturesque mountain valleys with traditional villages, hiking trails, and authentic Caucasian hospitality and cuisine.",
        image: "/arkhyz-village.png",
        category: "Region",
      },
    ],
    practical: [
      { label: "Best Time to Visit", value: "June-September" },
      { label: "Getting Around", value: "Cable cars, Jeeps, Hiking" },
      { label: "Currency", value: "Russian Ruble (RUB)" },
      { label: "Language", value: "Russian, local dialects" },
      { label: "Gateway City", value: "Pyatigorsk" },
      { label: "Average Stay", value: "4-7 days" },
    ],
    tips: [
      "Acclimatize before attempting high-altitude hikes",
      "Hire certified mountain guides",
      "Check weather conditions before expeditions",
      "Try local khachapuri (cheese bread)",
      "Respect local customs and traditions",
      "Bring sun protection for reflection from snow",
    ],
  },
  "golden-ring": {
    name: "Golden Ring",
    tagline: "Timeless Traditions",
    description:
      "The Golden Ring is a traditional cluster of ancient Russian towns northeast of Moscow, each preserving centuries of Orthodox heritage and traditional craftsmanship. These charming settlements are characterized by white-washed churches with distinctive golden onion domes, peaceful monasteries, and authentic Russian folk traditions. The region offers intimate glimpses into traditional Russian life, ancient architecture, and vibrant local crafts.",
    image: "/golden-ring-russia-historic-churches.jpg",
    bestTime: "May-September",
    difficulty: "Easy",
    highlights: [
      {
        title: "Rostov the Great",
        description:
          "An ancient town featuring the magnificent Rostov Kremlin with white walls and stunning churches overlooking Nero Lake.",
        image: "/rostov-kremlin-ancient.png",
        category: "Town",
      },
      {
        title: "Suzdal Village Museums",
        description:
          "An open-air museum with traditional wooden architecture, local crafts, and authentic Russian village atmosphere.",
        image: "/suzdal-traditional-russian-wooden-architecture-vil.jpg",
        category: "Museum",
      },
      {
        title: "Sergiev Posad Monastery",
        description:
          "One of Russia's holiest pilgrimage sites featuring stunning architecture and active monastic traditions dating to the 14th century.",
        image: "/sergiev-posad-monastyr.png",
        category: "Monastery",
      },
    ],
    practical: [
      { label: "Best Time to Visit", value: "May-September" },
      { label: "Getting Around", value: "Buses, Taxis, Rental cars" },
      { label: "Currency", value: "Russian Ruble (RUB)" },
      { label: "Language", value: "Russian, some English" },
      { label: "Nearest Hub", value: "Moscow" },
      { label: "Average Stay", value: "2-4 days" },
    ],
    tips: [
      "Take day trips from Moscow for easier logistics",
      "Respect Orthodox church customs (dress modestly)",
      "Buy local crafts like nesting dolls and lacquerware",
      "Try traditional Russian pies at local cafes",
      "Visit monasteries during prayer times",
      "Rent a car to explore multiple towns efficiently",
    ],
  },
};

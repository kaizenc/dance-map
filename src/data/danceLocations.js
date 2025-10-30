const default_pin_color = "red";

// Helper function to add jitter to coordinates for locations in the same city
const addJitter = (lat, lng, index = 0, total = 1) => {
  if (total === 1) return [lat, lng];
  
  // Small offset to make overlapping pins visible
  const jitterAmount = 0.08; // Adjust this for more or less spread
  const angle = (index / total) * 2 * Math.PI;
  const radius = jitterAmount * (1 + Math.floor(index / 8) * 0.5);
  
  return [
    lat + radius * Math.cos(angle),
    lng + radius * Math.sin(angle)
  ];
};

// const currentDanceStyles = [
//   "Locking",
//   "House",
//   "Waacking",
//   "Jersey Club",
//   "Baltimore Club",
//   "Philly Club",
//   "Hustle",
//   "Litefeet",
//   "Hip Hop",
//   "Voguing",
//   "Popping",
//   "Breaking",
//   "Footwork",
//   "FlexN",
//   "Jookin",
//   "Yeek",
//   "Wham",
//   "Lindy Hop", 
//   "Krump",
//   "Clown",
//   "Beat Ya Feet",
//   "Dallas Jigging",
//   "Louisiana Jigging",
//   "NOLA Bounce"
// ];

export const danceLocations = [
  {
    id: 1,
    city: "Los Angeles",
    state: "California",
    coordinates: addJitter(34.0522, -118.2437, 0, 3), // LA has 3 locations
    danceStyle: "Locking",
    type: "dance",
    pinColor: default_pin_color,
    year: 1970,
    description: "Locking is a funk dance form that originated in Los Angeles in the early 1970s. It's characterized by distinctive 'locking' movements where dancers freeze in specific positions.",
    music: "Funk, particularly the music of James Brown and George Clinton. The dance was created to match the funky rhythms and breakbeats of the era.",
    notableFigures: [
      "Don Campbell - Creator of locking, founded The Lockers",
      "Toni Basil - Choreographer and member of The Lockers",
      "Fred Berry - Member of The Lockers, known as 'Rerun'"
    ]
  },
  {
    id: 2,
    city: "New York City",
    state: "New York",
    coordinates: [40.7128, -74.0060],
    danceStyle: "House",
    type: "dance",
    pinColor: default_pin_color,
    year: 1980,
    description: "House dance emerged in the underground club scene of Chicago and New York in the late 1970s and early 1980s. It's known for its fast, intricate footwork and fluid body movements.",
    music: "House music with its four-on-the-floor beats, typically 120-130 BPM. Influenced by disco, funk, and electronic music from Chicago and New York clubs.",
    notableFigures: [
      "Ejoe Wilson - Pioneer of house dance, known for innovative footwork",
      "Brian 'Footwork' Green - Legendary house dancer and teacher",
      "Caleaf Sellers - Influential house dancer and choreographer"
    ],
    relatedLocationId: 3 // Links to House Music in Chicago
  },
  {
    id: 4,
    city: "Los Angeles",
    state: "California",
    coordinates: (addJitter(34.0522, -118.2437, 1, 3)), // LA has 3 locations
    danceStyle: "Waacking",
    type: "dance",
    pinColor: default_pin_color,
    year: 1970,
    description: "Waacking is a dance form that originated in the LGBTQ+ clubs of Los Angeles in the 1970s. It's characterized by its expressive arm movements and poses, often performed to disco music.",
    music: "Disco music, particularly the tracks that were popular in the 1970s club scene.",
    notableFigures: [
      "Toni Basil - Choreographer and member of The Lockers",
      "Fred Berry - Member of The Lockers, known as 'Rerun'"
    ]
  },
  {
    id: 5,
    city: "Newark",
    state: "New Jersey",
    coordinates: [40.7357, -74.1724],
    danceStyle: "Jersey Club",
    type: "dance",
    pinColor: default_pin_color,
    year: 2010,
    description: "Jersey Club is a high-energy dance music and dance form that emerged from Newark, New Jersey in the early 2000s. It's characterized by rapid bed squeaks, vocal chops, and aggressive, fast-paced movements.",
    music: "Jersey Club music features fast tempos (typically 130-140 BPM), heavy use of the 'bed squeak' sample, vocal chops, and Baltimore Club influences. The genre became mainstream in the 2010s.",
    notableFigures: [
      "DJ Sliink - Pioneer of Jersey Club sound",
      "R3ll - Influential Jersey Club producer",
      "Uniiqu3 - Jersey Club DJ and producer who brought the sound to global audiences"
    ]
  },
  {
    id: 6,
    city: "Baltimore",
    state: "Maryland",
    coordinates: [39.2904, -76.6122],
    danceStyle: "Baltimore Club",
    type: "dance",
    pinColor: default_pin_color,
    year: 1990,
    description: "Baltimore Club is a high-energy dance form that emerged from Baltimore's underground club scene in the late 1980s. It features rapid footwork, energetic movements, and is performed to the fast-paced Baltimore Club music genre.",
    music: "Baltimore Club music features breakbeats, samples, and tempos around 130 BPM. The sound influenced Jersey Club and other regional styles. Key producers include Rod Lee, KW Griff, and DJ Technics.",
    notableFigures: [
      "Rod Lee - Pioneer of Baltimore Club music",
      "KW Griff - Influential Baltimore Club producer",
      "DJ Technics - Key figure in developing the Baltimore sound"
    ]
  },
  {
    id: 7,
    city: "Philadelphia",
    state: "Pennsylvania",
    coordinates: [39.9526, -75.1652],
    danceStyle: "Philly Club",
    type: "dance",
    pinColor: default_pin_color,
    year: 2000,
    description: "Philly Club is Philadelphia's answer to Baltimore and Jersey Club, featuring fast-paced footwork and energetic movements. The style reflects Philadelphia's unique urban dance culture and street style.",
    music: "Philly Club music takes influence from Baltimore Club, featuring fast tempos, breakbeats, and Philadelphia's distinctive hip-hop influence. The genre emphasizes heavy bass and rapid-fire percussion.",
    notableFigures: [
      "DJ Sega - Key figure in Philly Club scene",
      "TT The Artist - Baltimore/Philly Club artist and activist",
      "Various street dancers from Philadelphia's underground scene"
    ]
  },
  {
    id: 8,
    city: "Bronx",
    state: "New York",
    coordinates: addJitter(40.8448, -73.8648, 0, 3), // Bronx has 3 locations
    danceStyle: "Hustle",
    type: "dance",
    pinColor: default_pin_color,
    year: 1970,
    description: "The Hustle is a partner dance that emerged in the Bronx and other New York neighborhoods during the 1970s disco era. It features smooth turns, spins, and synchronized footwork patterns.",
    music: "Disco music, particularly tracks with strong four-on-the-floor beats. Made famous by songs like 'The Hustle' by Van McCoy and tracks played at Studio 54 and other disco clubs.",
    notableFigures: [
      "Van McCoy - Created 'The Hustle' song in 1975",
      "Willie Estrada - Pioneered Latin Hustle variations",
      "Various dancers from New York's disco scene"
    ]
  },
  {
    id: 9,
    city: "Harlem",
    state: "New York",
    coordinates: addJitter(40.8116, -73.9465, 0, 3), // Harlem has 3 locations
    danceStyle: "Litefeet",
    type: "dance",
    pinColor: default_pin_color,
    year: 2000,
    description: "Litefeet (also known as 'getting lite') is a street dance form that emerged in Harlem and across New York City in the early 2000s. It features rapid footwork, spins, acrobatic moves, and hat tricks performed on subway platforms and street corners.",
    music: "Uptempo hip-hop and R&B tracks, particularly those with Jersey Club and Baltimore Club influences. Dancers often perform to contemporary hip-hop with fast beats.",
    notableFigures: [
      "Young B - Pioneer of the Litefeet movement",
      "Tone Doe - Influential Litefeet dancer",
      "Various subway and street performers throughout NYC"
    ]
  },
  {
    id: 10,
    city: "Bronx",
    state: "New York",
    coordinates: addJitter(40.8448, -73.8648, 1, 3), // Bronx has 3 locations
    danceStyle: "Hip Hop",
    type: "dance",
    pinColor: default_pin_color,
    year: 1970,
    description: "Hip Hop dance originated in the Bronx in the 1970s as part of the broader hip-hop culture. It encompasses various styles including breaking, locking, and popping, and evolved through block parties and street performances.",
    music: "Hip-hop music with its roots in funk, soul, and disco breaks. Pioneered by DJs like Kool Herc who isolated breakbeats for dancers. The music features strong rhythmic patterns and bass-heavy production.",
    notableFigures: [
      "DJ Kool Herc - Father of hip-hop, created the breakbeat",
      "Rock Steady Crew - Legendary b-boy crew that popularized breaking",
      "Afrika Bambaataa - Pioneer of hip-hop culture and music"
    ]
  },
  {
    id: 11,
    city: "Harlem",
    state: "New York",
    coordinates: addJitter(40.8116, -73.9465, 1, 3), // Harlem has 3 locations
    danceStyle: "Voguing",
    type: "dance",
    pinColor: default_pin_color,
    year: 1980,
    description: "Voguing is a highly stylized dance form that emerged from Harlem's Black and Latino LGBTQ+ ballroom culture in the 1980s. It features angular, geometric poses inspired by fashion models and Egyptian hieroglyphics, along with fluid movements and dramatic performances.",
    music: "House music and ballroom beats, popularized internationally by Madonna's 'Vogue' (1990). The ballroom scene features performances to uptempo house and electronic music.",
    notableFigures: [
      "Willi Ninja - Legendary voguer, 'Godfather of Voguing'",
      "Hector Xtravaganza - Founder of House of Xtravaganza",
      "Leiomy Maldonado - 'Wonder Woman of Vogue', modern icon"
    ]
  },
  {
    id: 12,
    city: "Los Angeles",
    state: "California",
    coordinates: addJitter(34.0522, -118.2437, 2, 3), // LA has 3 locations
    danceStyle: "Popping",
    type: "dance",
    pinColor: default_pin_color,
    year: 1970,
    description: "Popping is a funk dance form that originated in Fresno and Los Angeles in the late 1970s. It's characterized by sudden muscle contractions that create a 'popping' or 'hitting' effect, combined with fluid movements and mime-like isolations.",
    music: "Funk and electro-funk music, particularly tracks with strong rhythmic patterns. The Electric Boogaloos popularized the style to music by artists like Kraftwerk and early hip-hop beats.",
    notableFigures: [
      "Boogaloo Sam - Creator of popping, founder of Electric Boogaloos",
      "Popin' Pete - Member of Electric Boogaloos, popularized the style worldwide",
      "Skeeter Rabbit - Electric Boogaloos member, innovator of popping techniques"
    ]
  },
  {
    id: 13,
    city: "Bronx",
    state: "New York",
    coordinates: addJitter(40.8448, -73.8648, 2, 3), // Bronx has 3 locations
    danceStyle: "Breaking",
    type: "dance",
    pinColor: default_pin_color,
    year: 1973,
    description: "Breaking (breakdancing) originated in the Bronx in the early 1970s as part of hip-hop culture. It features acrobatic moves, freezes, power moves, and intricate footwork performed to breakbeats. Breaking became an Olympic sport in 2024.",
    music: "Breakbeats isolated from funk, soul, and disco records. DJ Kool Herc pioneered the technique of extending breaks, creating the perfect soundtrack for b-boys and b-girls to showcase their moves.",
    notableFigures: [
      "DJ Kool Herc - Created breakbeats that inspired breaking",
      "Crazy Legs - Rock Steady Crew leader, breaking ambassador",
      "Ken Swift - Rock Steady Crew member, legendary b-boy"
    ]
  },
  {
    id: 14,
    city: "Chicago",
    state: "Illinois",
    coordinates: addJitter(41.8781, -87.6298, 1, 2), // Chicago has 2 locations across dance and music
    danceStyle: "Footwork",
    type: "dance",
    pinColor: default_pin_color,
    year: 2000,
    description: "Footwork is a dance form that emerged from Chicago's South and West sides in the late 1990s and early 2000s. It features rapid, intricate leg movements and complex footwork patterns performed low to the ground, often in battle format.",
    music: "Juke and Footwork music featuring frenetic tempos (typically 160+ BPM), chopped samples, and Roland TR-808 drum machine patterns. Pioneered by Chicago producers in the ghetto house scene.",
    notableFigures: [
      "DJ Rashad - Legendary footwork producer (RIP)",
      "DJ Spinn - Pioneer of footwork music and culture",
      "RP Boo - Originator of footwork music in the 1990s"
    ]
  },
  {
    id: 15,
    city: "Brooklyn",
    state: "New York",
    coordinates: [40.6782, -73.9442],
    danceStyle: "FlexN",
    type: "dance",
    pinColor: default_pin_color,
    year: 2010,
    description: "FlexN (Bone Breaking or Flexing) is a street dance form from Brooklyn that emerged in the late 2000s. It features extreme contortionist movements, rhythmic bone-breaking illusions, and acrobatic flexibility performed to uptempo music.",
    music: "Brooklyn drill, hip-hop, and uptempo trap beats. The music provides the aggressive, hard-hitting backdrop for the intense physical movements of FlexN.",
    notableFigures: [
      "Flizzo - Pioneer of FlexN style",
      "Chino - Key figure in the FlexN movement",
      "Storyboard P - Brooklyn dancer who helped popularize FlexN"
    ]
  },
  {
    id: 16,
    city: "Memphis",
    state: "Tennessee",
    coordinates: [35.1495, -90.0490],
    danceStyle: "Jookin",
    type: "dance",
    pinColor: default_pin_color,
    year: 1980,
    description: "Memphis Jookin (also known as 'gangsta walking') is a street dance form that originated in Memphis. It features gliding footwork, toe stands, splits, and smooth transitions performed on the balls of the feet, often in Timberland boots or Converse.",
    music: "Memphis hip-hop and crunk music, characterized by heavy bass, hi-hats, and dark production. Three 6 Mafia and other Memphis rappers provided the soundtrack for jookin culture.",
    notableFigures: [
      "Lil Buck - International jookin ambassador, collaborated with Yo-Yo Ma",
      "Marico Flake - Memphis jookin pioneer",
      "Ron Myles - Legendary jookin dancer and teacher"
    ]
  },
  {
    id: 17,
    city: "Atlanta",
    state: "Georgia",
    coordinates: [33.7490, -84.3880],
    danceStyle: "Yeek",
    type: "dance",
    pinColor: default_pin_color,
    year: 2010,
    description: "Yeek is a high-energy dance form that emerged from Atlanta's strip club and urban dance scene in the 2010s. It features rapid twerking movements, knee bounces, and synchronized group performances often seen in music videos.",
    music: "Atlanta trap and hip-hop music with heavy bass and rapid hi-hat patterns. The style complements the bounce and energy of Atlanta's signature sound from producers like Metro Boomin and Zaytoven.",
    notableFigures: [
      "Various Atlanta strip club dancers who pioneered the style",
      "Social media influencers who popularized Yeek",
      "Atlanta's dance community and choreographers"
    ]
  },
  {
    id: 18,
    city: "Miami",
    state: "Florida",
    coordinates: [25.7617, -80.1918],
    danceStyle: "Wham",
    type: "dance",
    pinColor: default_pin_color,
    year: 2010,
    description: "Wham is a dance form that emerged from Florida's urban dance scene, particularly in Miami. It features aggressive, rhythmic movements and is closely tied to Florida's hip-hop and bass music culture.",
    music: "Florida bass music, Miami bass, and Southern hip-hop. The heavy, bass-driven sound of Florida's club scene provides the foundation for Wham dancing.",
    notableFigures: [
      "Various Miami and Florida dancers",
      "Street performers from Florida's urban dance scene",
      "Social media dancers who spread the style"
    ]
  },
  {
    id: 19,
    city: "Harlem",
    state: "New York",
    coordinates: addJitter(40.8116, -73.9465, 2, 3), // Harlem has 3 locations
    danceStyle: "Lindy Hop",
    type: "dance",
    pinColor: default_pin_color,
    year: 1928,
    description: "Lindy Hop is a partner dance that originated in Harlem's Savoy Ballroom in the late 1920s and 1930s. It evolved from Charleston and other jazz dances, featuring energetic swingouts, aerials, and improvisational movements that captured the spirit of the Swing Era.",
    music: "Swing jazz, particularly the big band music of the 1930s and 1940s. Performed to music by Count Basie, Duke Ellington, Benny Goodman, and other swing era legends.",
    notableFigures: [
      "Frankie Manning - Legendary Lindy Hopper, invented aerial moves",
      "Norma Miller - 'Queen of Swing', original Whitey's Lindy Hoppers member",
      "Shorty George Snowden - Early Lindy Hop innovator"
    ]
  },
  {
    id: 20,
    city: "Compton",
    state: "California",
    coordinates: addJitter(33.8958, -118.2201, 1, 2),
    danceStyle: "Clown",
    type: "dance",
    pinColor: default_pin_color,
    year: 1992,
    description: "WIP",
    music: "West Coast hip-hop and funk music",
    notableFigures: [
      "Tommy the Clown - Pioneer of clowning dance form",
    ]
  },
  {
    id: 21,
    city: "Compton",
    state: "California",
    coordinates: addJitter(33.8958, -118.2201, 0, 2), // Compton has 2 locations
    danceStyle: "Krump",
    type: "dance",
    pinColor: default_pin_color,
    year: 2000,
    description: "WIP",
    music: "West Coast hip-hop",
    notableFigures: [
      "Tight Eyez - Co-creator of krump dance form",
      "Big Mijo - Co-creator of krump dance form",
    ]
  },
  {
    id: 22,
    city: "Washington D.C.",
    state: "Washington D.C.",
    coordinates: [38.8951, -77.0364],
    danceStyle: "Beat Ya Feet",
    type: "dance",
    pinColor: default_pin_color,
    year: 1992,
    description: "Beat Ya Feet is a street dance form that originated in Washington D.C. in the early 1990s. It is characterized by its fast-paced footwork and energetic movements, often performed to go-go music.",
    music: "Go-go music, a subgenre of funk that originated in D.C., featuring live bands and a strong emphasis on percussion.",
    notableFigures: [
      "Various D.C. dancers who contributed to the style's development",
      "Street performers who popularized Beat Ya Feet in urban dance culture"
    ]
  },
  {
    id: 23,
    city: "Dallas",
    state: "Texas",
    coordinates: [32.7767, -96.7970],
    danceStyle: "Dallas Jigging",
    type: "dance",
    pinColor: default_pin_color,
    year: 3000,
    description: "WIP",
    music: "WIP",
    notableFigures: [
      "WIP"
    ]
  },
  {
    id: 24,
    city: "New Orleans",
    state: "Louisiana",
    coordinates: addJitter(29.9511, -90.0715, 0, 2), // New Orleans has 2 locations
    danceStyle: "Louisiana Jigging",
    type: "dance",
    pinColor: default_pin_color,
    year: 3000,
    description: "WIP",
    music: "WIP",
    notableFigures: [
      "WIP"
    ]
  },
  {
    id: 25,
    city: "New Orleans",
    state: "Louisiana",
    coordinates: addJitter(29.9511, -90.0715, 1, 2), // New Orleans has 2 locations
    danceStyle: "NOLA Bounce",
    type: "dance",
    pinColor: default_pin_color,
    year: 3000,
    description: "WIP",
    music: "WIP",
    notableFigures: [
      "WIP"
    ]
  },
];

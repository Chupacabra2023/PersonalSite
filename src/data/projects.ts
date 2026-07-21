export interface Project {
  id: string;
  title: string;
  category: 'school' | 'personal';
  description: string;
  descriptionEn?: string;
  longDescription: string;
  longDescriptionEn?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  googlePlayUrl?: string;
  policyPath?: string;
  deleteAccountUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'Custom Soundboard',
    title: 'Custom Soundboard app',
    category: 'personal',
    description: 'Mobilná aplikácia typu soundboard s plne prispôsobiteľnými tlačidlami a podporou vlastných zvukov.',
    descriptionEn: 'A soundboard mobile app with fully customizable buttons and support for custom sounds.',
    longDescription: 'SoundButtons je mobilná aplikácia typu soundboard, ktorá umožňuje používateľovi pracovať so zvukmi pomocou prehľadnej mriežky tlačidiel. Každé tlačidlo je možné individuálne prispôsobiť – zmeniť jeho názov, farbu, priradiť kategóriu alebo ho označiť ako obľúbené.\n\nPo kliknutí na tlačidlo sa zobrazí prehrávač s progress barom, kde je možné zvuk prehrávať, pozastaviť, loopovať alebo meniť rýchlosť prehrávania. Používateľ si môže vytvárať vlastné zvuky pomocou vstavaného nahrávača alebo ich importovať priamo zo zariadenia.\n\nAplikácia podporuje správu kategórií, filtrovanie tlačidiel a ukladanie nastavení, pričom kladie dôraz na jednoduchosť, rýchly prístup k zvukom a možnosť plnej personalizácie.',
    longDescriptionEn: 'SoundButtons is a mobile soundboard application that allows the user to work with sounds using a well-organized grid of buttons. Each button can be individually customized – change its name, color, assign a category or mark it as a favorite.\n\nClicking a button opens a player with a progress bar where you can play, pause, loop or change the playback speed. The user can create custom sounds using the built-in recorder or import them directly from the device.\n\nThe app supports category management, button filtering and settings saving, while emphasizing simplicity, quick access to sounds and the option for full personalization.',
    technologies: ['Flutter', 'Dart'],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=sk.marcelsotak.soundboard',
    policyPath: 'policies',
    deleteAccountUrl: '/PersonalSite/policies/delete-account.html',
  },
  {
    id: 'Snowball Roll Down',
    title: 'Snowball Roll Down',
    category: 'personal',
    description: 'Arkádová mobilná hra, kde ovládate snehovú guľu valiacu sa dole kopcom, zbierajúc body a vyhýbajúc sa prekážkam.',
    descriptionEn: 'An arcade mobile game where you control a snowball rolling down a hill, collecting points and avoiding obstacles.',
    longDescription: 'Snowball Roll Down je návyková arkádová hra, v ktorej ovládate snehovú guľu valiacu sa dole zasneženým kopcom. Počas jazdy guľa postupne naberá na veľkosti, čo zvyšuje náročnosť hry.\n\nCieľom je dosiahnuť čo najvyššie skóre vyhýbaním sa prekážkam ako sú stromy, kamene a ďalšie objekty. Hra ponúka systém upgradov, ktoré vylepšujú vlastnosti vašej gule, rôzne power-upy na trati a globálny rebríček skóre pre porovnanie s ostatnými hráčmi.\n\nHra sa vyznačuje pekným zimným dizajnom, plynulou grafikou a intuitívnym ovládaním. Obsahuje tiež možnosť prispôsobenia nastavení hry.',
    longDescriptionEn: 'Snowball Roll Down is an addictive arcade game in which you control a snowball rolling down a snowy slope. During the ride, the ball gradually grows in size, increasing the game difficulty.\n\nThe goal is to achieve the highest possible score by avoiding obstacles such as trees, rocks and other objects. The game offers an upgrade system that improves your ball\'s properties, various power-ups on the track and a global leaderboard for comparing with other players.\n\nThe game features beautiful winter design, smooth graphics and intuitive controls. It also includes the option to customize game settings.',
    technologies: ['C++', 'Unity', 'Photoshop'],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.yourapp.snowballrolldown',
    policyPath: 'policies/snowball',
    deleteAccountUrl: '/PersonalSite/policies/snowball/delete-account.html',
  },
  {
    id: 'Word Learner',
    title: 'Aplikácia na učenie slovnej zásoby',
    category: 'personal',
    description: 'Android aplikácia na učenie cudzích slov s podporou 20 jazykov, 40 frekvenčných levelov a 20 tematických levelov. Čoskoro na Google Play.',
    descriptionEn: 'Android app for learning vocabulary with support for 20 languages, 40 frequency levels and 20 thematic levels. Coming soon on Google Play.',
    longDescription: 'Samostatne vyvinutá Android aplikácia na učenie slovnej zásoby cudzieho jazyka. Aplikácia podporuje 20 jazykov a obsahuje 40 levelov najfrekventovanejších slov a 20 tematických levelov (chémia, anatómia, povolania a i.).\n\nLearning progress je uložený lokálne cez DataStore, pričom obsah slovíčok je načítaný zo Supabase backendu. Aplikácia využíva Text-to-Speech výslovnosť slov vo vybranom jazyku a swipe gesto na označenie naučených slov.\n\nPonúka konfigurovateľný počet odpovedí, mnoho farebných tém a viacero jazykov rozhrania. Čoskoro dostupná na Google Play.',
    longDescriptionEn: 'An independently developed Android application for learning foreign language vocabulary. The app supports 20 languages and contains 40 levels of the most frequent words and 20 thematic levels (chemistry, anatomy, professions, etc.).\n\nLearning progress is saved locally via DataStore, while vocabulary content is loaded from the Supabase backend. The app uses Text-to-Speech pronunciation in the selected language and swipe gestures to mark learned words.\n\nOffers configurable number of answer options, many color themes and multiple interface languages. Coming soon to Google Play.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Material3', 'Supabase', 'DataStore'],
    policyPath: 'policies/wordlearner',
  },
  {
    id: 'Joinly',
    title: 'Joinly',
    category: 'personal',
    description: 'Android aplikácia na objavovanie a organizovanie udalostí v okolí — vytváraj vlastné udalosti, prihlasuj sa na cudzie a chatuj s účastníkmi. Zameraná predovšetkým na slovenský trh.',
    descriptionEn: 'Android app for discovering and organizing nearby events — create your own events, join others and chat with participants. Focused primarily on the Slovak market.',
    longDescription: 'Joinly je Android aplikácia na objavovanie a organizovanie udalostí v okolí používateľa, postavená na Kotlin Multiplatform. Umožňuje vytváranie vlastných udalostí, prihlasovanie sa na udalosti iných používateľov, chat medzi účastníkmi a odporúčania na základe polohy a preferencií.\n\nAplikácia zobrazuje udalosti na interaktívnej mape (Google Maps Platform), pričom vlastný obsah aj obrázky prechádzajú automatizovanou moderáciou cez Google Cloud Vision a Natural Language API. Okrem používateľských udalostí appka zobrazuje aj externé podujatia cez Ticketmaster API.\n\nBackend beží na Google Firebase (Auth, Firestore, Storage) a obrázky sú uložené cez Cloudinary. Appka kladie dôraz na bezpečnosť komunity vďaka systému nahlásení, blokácií a sledovaniu no-show účasti na udalostiach.',
    longDescriptionEn: 'Joinly is an Android app for discovering and organizing nearby events, built with Kotlin Multiplatform. It allows users to create their own events, join events created by others, chat with participants, and get recommendations based on location and preferences.\n\nEvents are shown on an interactive map (Google Maps Platform), while user-generated content and images pass through automated moderation using Google Cloud Vision and Natural Language API. Besides user-created events, the app also surfaces external events via the Ticketmaster API.\n\nThe backend runs on Google Firebase (Auth, Firestore, Storage) with images stored via Cloudinary. The app focuses on community safety through a reporting and blocking system, along with no-show tracking for event attendance.',
    technologies: ['Kotlin Multiplatform', 'Android', 'Firebase', 'Google Maps API', 'Cloudinary'],
    policyPath: 'policies/joinly',
    deleteAccountUrl: '/PersonalSite/policies/joinly/delete-account.html',
  },
  {
    id: 'Time Reminder',
    title: 'Time Reminder',
    category: 'personal',
    description: 'Simple timer application that lets you set multiple reminders with notifications and screen wake-up alerts.',
    longDescription: 'Time Reminder is a straightforward and easy-to-use timer application for Android. It allows users to create and manage multiple countdown timers simultaneously, each with a custom name and duration.\n\nWhen a timer expires, the app delivers a notification in the top notification bar, wakes up the screen, and displays a full-screen alert — even when the device is locked. This ensures you never miss an important reminder.\n\nEach completed timer offers an "Again" button for instant restart, making it perfect for repetitive tasks like cooking, workouts, study intervals, or any activity that requires timed reminders. The app works entirely offline, collects no personal data, and respects your privacy.',
    technologies: ['Kotlin', 'Android'],
    policyPath: 'policies/timereminder',
  },
];

export interface Project {
  id: string;
  title: string;
  category: 'school' | 'personal';
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'Custom Soundboard',
    title: 'Custom Soundboard app',
    category: 'personal',
    description: 'Mobilná aplikácia typu soundboard s plne prispôsobiteľnými tlačidlami a podporou vlastných zvukov.',
  longDescription: 'SoundButtons je mobilná aplikácia typu soundboard, ktorá umožňuje používateľovi pracovať so zvukmi pomocou prehľadnej mriežky tlačidiel. Každé tlačidlo je možné individuálne prispôsobiť – zmeniť jeho názov, farbu, priradiť kategóriu alebo ho označiť ako obľúbené.\n\nPo kliknutí na tlačidlo sa zobrazí prehrávač s progress barom, kde je možné zvuk prehrávať, pozastaviť, loopovať alebo meniť rýchlosť prehrávania. Používateľ si môže vytvárať vlastné zvuky pomocou vstavaného nahrávača alebo ich importovať priamo zo zariadenia.\n\nAplikácia podporuje správu kategórií, filtrovanie tlačidiel a ukladanie nastavení, pričom kladie dôraz na jednoduchosť, rýchly prístup k zvukom a možnosť plnej personalizácie.',
    technologies: ['Flutter','Dart'],
    githubUrl: 'https://github.com/Chupacabra2023/soundAppFlutter',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.yourapp.soundboard',
  },
  {
    id: 'project-2',
    title: 'pridaj',
    category: 'school',
    description: 'prridaj',
    longDescription: 'Detailný popis školského projektu 2.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
  },
];

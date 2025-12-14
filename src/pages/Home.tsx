import Navigation from '../components/Navigation';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navigation />

      <header className="header">
     <h1 className="name">Marcel Soták</h1>
        <p className="title">Junior Web Developer | Junior Software Developer | Junior Application Developer</p>
      </header>

      <section className="about">
        <h2>O mne</h2>
        <p>
         Volám sa Marcel Soták a som študentom Fakulty elektrotechniky a informatiky, kde som v prvých troch ročníkoch študoval odbor Aplikovaná informatika. V súčasnosti som v poslednom ročníku so zameraním na kybernetickú bezpečnosť.

Vo voľnom čase sa venujem práci na vlastných projektoch, ktoré si stanovujem ako osobné ciele, a aktívne sa učím nové technológie. Baví ma objavovať nové oblasti v IT a rozširovať si znalosti praktickou formou.

Stredoškolské vzdelanie som získal na technickom lýceu na SPŠ, kde som si vybudoval technické základy a záujem o informatiku.

Ovládam anglický jazyk na úrovni B2 a nemecký jazyk na úrovni A1–A2. Zatiaľ nemám veľa pracovných skúseností priamo v IT sfére, keďže sa momentálne sústreďujem najmä na štúdium a rozvoj vlastných projektov.
        </p>
      </section>

      <section className="strengths-weaknesses">
        <div className="strengths">
          <h2>Silné stránky</h2>
          <ul>
            <li>
              <strong>Zodpovednosť a dochvíľnosť</strong>
              <span>Som veľmi dochvíľny a beriem dohody vážne. Keď sa na niečom dohodneme, považujem to za záväzok.</span>
            </li>
            <li>
              <strong>Vnútorná motivácia a chuť učiť sa</strong>
              <span>Vo voľnom čase sa aktívne zaujímam o nové témy (informatika, história, spoločenské dianie). Rád pracujem na vlastných projektoch a neustále sa posúvam dopredu.</span>
            </li>
            <li>
              <strong>Racionálne a logické myslenie</strong>
              <span>Premýšľam logicky, overujem si informácie a snažím sa rozhodovať na základe faktov. Nepodlieham hoaxom ani nezmyslom.</span>
            </li>
            <li>
              <strong>Efektívne využívanie času</strong>
              <span>Nemám rád zbytočné plytvanie časom. Uprednostňujem činnosti, ktoré mi prinášajú hodnotu alebo nové vedomosti.</span>
            </li>
            <li>
              <strong>Tolerancia a empatia</strong>
              <span>Som tolerantný, priateľský a rešpektujem iných ľudí. Snažím sa byť spravodlivý, pomáhať svojim blízkym a správať sa férovo.</span>
            </li>
            <li>
              <strong>Emočná stabilita</strong>
              <span>Nie som precitlivený, väčšinu vecí beriem s nadhľadom a viem zachovať pokoj aj v náročnejších situáciách.</span>
            </li>
            <li>
              <strong>Sebareflexia a pokora</strong>
              <span>Snažím sa byť dobrým človekom, nepreceňujem sa a uvedomujem si, že vždy je priestor na zlepšenie.</span>
            </li>
            <li>
              <strong>Vnímavosť k ľuďom</strong>
              <span>Myslím si, že viem pomerne dobre „čítať" ľudí a chápať ich správanie a motivácie.</span>
            </li>
            <li>
              <strong>Vzťah k prírode a environmentálne hodnoty</strong>
              <span>Mám silný vzťah k prírode a environmentálnym témam, preferujem prirodzené prostredie pred mestským ruchom.</span>
            </li>
            <li>
              <strong>Zmysel pre humor</strong>
              <span>Podľa okolia mám dobrý zmysel pre humor a viem odľahčiť atmosféru.</span>
            </li>
            <li>
              <strong>Skromnosť</strong>
              <span>Nepreceňujem sa, zostávam nohami na zemi a uvedomujem si vlastné limity.</span>
            </li>
            <li>
              <strong>Kreativita a predstavivosť</strong>
              <span>Mám dobrú fantáziu a predstavivosť, čo mi pomáha pri hľadaní riešení, navrhovaní nápadov a tvorbe vlastných projektov.</span>
            </li>
            <li>
              <strong>Tvorivé myslenie</strong>
              <span>Dokážem premýšľať tvorivo a vidieť veci z rôznych uhlov, čo využívam najmä pri programovaní a práci na aplikáciách.</span>
            </li>
            <li>
              <strong>Schopnosť prichádzať s nápadmi</strong>
              <span>Často prichádzam s vlastnými nápadmi a riešeniami, nielen s hotovými postupmi.</span>
            </li>
          </ul>
        </div>
        <div className="weaknesses">
          <h2>Slabé stránky</h2>
          <ul>
            <li>
              <strong>Slabšia pamäť</strong>
              <span>Moja krátkodobá pamäť nie je silná stránka, preto si veci rád zapisujem a snažím sa pracovať systematicky.</span>
            </li>
            <li>
              <strong>Organizácia a poriadok</strong>
              <span>Mám tendenciu k neporiadnosti, čo si uvedomujem a postupne na tom pracujem.</span>
            </li>
            <li>
              <strong>Introvertnosť a uzavretejšia povaha</strong>
              <span>Som skôr introvert, lepšie sa cítim v menších kolektívoch alebo pri samostatnej práci. Vo veľkých a neznámych skupinách som spočiatku hanblivejší.</span>
            </li>
            <li>
              <strong>Opatrnosť v komunikácii</strong>
              <span>Nehovorím o témach, v ktorých si nie som istý. Radšej sa najprv dôkladne pripravím, než by som hovoril nepresne.</span>
            </li>
            <li>
              <strong>Emočné napätie pri dlhodobom strese</strong>
              <span>Ak sa stres dlhšie hromadí, môže sa prejaviť náhle – najmä pri technických problémoch alebo neférovom správaní. Učím sa lepšie pracovať so stresom.</span>
            </li>
            <li>
              <strong>Ranná produktivita</strong>
              <span>Nie som ranný typ, najlepšie fungujem popoludní a večer. Ráno potrebujem viac času na „rozbeh".</span>
            </li>
            <li>
              <strong>Rozptýliteľnosť</strong>
              <span>Občas bývam nepozorný, preto sa snažím obmedzovať rušivé vplyvy a pracovať v blokoch.</span>
            </li>
            <li>
              <strong>Tvrdohlavosť (čiastočne)</strong>
              <span>Viem o sebe, že viem byť tvrdohlavý, no naučil som sa počúvať iných, rešpektovať ich názory a zvažovať rôzne pohľady.</span>
            </li>
            <li>
              <strong>Hry ako forma oddychu</strong>
              <span>Občas si zahrám hry na odreagovanie, no vedome si dávam pozor, aby to nešlo na úkor produktivity.</span>
            </li>
            <li>
              <strong>Nervozita v sociálnych situáciách</strong>
              <span>V neznámom prostredí alebo medzi novými ľuďmi môžem pôsobiť nervózne alebo rezervovane.</span>
            </li>
            <li>
              <strong>Ťažkosti s dlhodobým udržaním tempa</strong>
              <span>Pri projektoch, ktoré trvajú dlhší čas, potrebujem jasný cieľ a štruktúru, aby som si udržal konzistentné tempo.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact">
        <h2>Kontakt</h2>
        <div className="contact-info">
          <p><strong>Email:</strong> marclus868@gmail.com</p>
          <p><strong>GitHub:</strong> <a href="https://github.com/Chupacabra2023" target="_blank" rel="noopener noreferrer">github.com/Chupacabra2023</a></p>
          <p><strong>LinkedIn:</strong> <a href="" target="_blank" rel="noopener noreferrer">este nie je je hacknuty</a></p>
        </div>
      </section>

      <section className="cv-section">
        <h2>Životopis</h2>
        <p>Stiahnite si môj životopis v textovom formáte:</p>
        <a href="/zivotopis.txt" download="Zivotopis.txt" className="download-btn">
          <span className="download-icon">↓</span>
          Stiahnuť životopis
        </a>
        
      </section>
    </div>
  );
};

export default Home;

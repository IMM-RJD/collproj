<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('bulletinboard_headline') }}</h4>

    <h5>
      {{ $t('bulletinboard_description') }}
    </h5>
    <div class="q-mb-md">
      <q-btn
        class="float-right"
        color="primary"
        text-color="secondary"
        :label="$t('shuffle')"
        icon="shuffle"
        @click="() => (shoutouts = randomize(shoutouts))"
      />
    </div>

    <shoutout-component :shoutouts="shoutouts"></shoutout-component>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="2000"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="km-timeline" />
    </q-page-scroller>
  </q-page>
</template>

<script lang="ts">
import { Shoutout } from 'components/models';
import ShoutoutComponent from 'components/ShoutoutComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BulletinBoardPage',
  components: { ShoutoutComponent },
  data() {
    return {
      shoutouts: ref<Shoutout[]>([
        {
          id: 0,
          imgSrc: 'src/assets/bulletinboard/worldcommunitygrid/wcg-logo.png',
          imgClass: 'q-py-md',
          imgPosition: '50% 0%',
          imgFit: 'contain',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'World Community Grid',
            en: 'World Community Grid',
          },
          subtitle: {
            de: 'ermöglicht es jedem, der einen Computer oder ein Android-Gerät besitzt, seine ungenutzte Rechenleistung zu spenden, um die wissenschaftliche Spitzenforschung zu Themen wie Gesundheit, Armut und Nachhaltigkeit voranzutreiben.',
            en: 'enables anyone with a computer or Android device to donate their unused computing power to advance cutting-edge scientific research on topics related to health, poverty and sustainability.',
          },
          introVideo: {
            de: 'https://www.youtube.com/watch?v=P5QU_99oF5k',
            en: 'https://www.youtube.com/watch?v=P5QU_99oF5k',
          },
          description: {
            de: 'Durch die Beiträge von Freiwilligen aus aller Welt hat World Community Grid bisher 31 Forschungsprojekte unterstützt, darunter die Suche nach wirksameren Behandlungsmethoden für Krebs, HIV/AIDS und wenig erforschte Tropenkrankheiten. Andere Projekte befassen sich mit der Suche nach kostengünstigen Wasserfiltersystemen und neuen Materialien zur effizienten Nutzung von Sonnenenergie.',
            en: 'Through the contributions of volunteers all over the globe, World Community Grid has supported 31 research projects to date, including searches for more effective treatments for cancer, HIV/AIDS and under-researched tropical diseases. Other projects are looking for low-cost water filtration systems and new materials for capturing solar energy efficiently.',
          },
          readmore: {
            de: 'https://www.worldcommunitygrid.org/about/about.s',
            en: 'https://www.worldcommunitygrid.org/about/about.s',
          },
          homepage: 'https://www.worldcommunitygrid.org/',
          homepageText: 'homepage',
          facebook: 'worldcommunitygrid.org',
          youtube: '@worldcommunitygrid7090',
          twitter: 'WCGrid',
          socialOrder: 'twitter, facebook, youtube',
        },
        {
          id: 1,
          imgSrc:
            'src/assets/bulletinboard/meingrundeinkommen/mein_grundeinkommen.jpg',
          imgClass: '',
          imgPosition: '50% 0%',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Mein Grundeinkommen',
            en: 'Mein Grundeinkommen',
          },
          subtitle: {
            de: 'Wir wollen wissen, was Grundeinkommen mit Menschen macht. Darum probieren wir es einfach aus und sammeln per Crowdfunding Geld. Immer wenn 12.000 Euro zusammenkommen, verlosen wir das Geld als Bedingungsloses Grundeinkommen: Ein Jahr lang monatlich 1.000 Euro. Ohne Bedingungen. Für alle.',
            en: "We want to know what basic income does to people. That's why we're simply trying it out and collecting money via crowdfunding. Whenever 12,000 euros are collected, we give the money away as an unconditional basic income: 1,000 euros a month for a year. No strings attached. For everyone.",
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zBXmebZfLLNdPQEk6qY14ga',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zBXmebZfLLNdPQEk6qY14ga',
          },
          description: {
            de: 'Auf den ersten Blick ist die Wirkung des Grundeinkommens eher langweilig. Was kann man schon mit Geld machen? Ausgeben, verschenken, sparen oder investieren. Aber unser achtjähriger Praxistest zeigt: Es geht gar nicht so sehr ums Geld, sondern um die Bedingungslosigkeit. \n\n Es ist eine völlig neue Erfahrung für fast alle Gewinner*innen, von fremden Menschen Geld ganz ohne Bedingungen zu erhalten. Dieser Akt suggeriert ihnen: Wir glauben an dich, probier dich aus, zeig was du kannst. Wenn es schiefgeht, macht das nichts. Dann probierst du es nächsten Monat einfach wieder. Das ermutigt und gibt Selbstvertrauen.',
            en: "At first glance, the effect of basic income is rather boring. What can you do with money? Spend it, give it away, save it or invest it. But our eight-year practical test shows: It's not so much about money, but about unconditionality. \n\n It is a completely new experience for almost all winners to receive money from strangers without any conditions. This act suggests to them: We believe in you, try yourself, show what you can do. If it goes wrong, it doesn't matter. Then you just try again next month. This encourages and gives self-confidence.",
          },
          readmore: {
            de: 'https://www.mein-grundeinkommen.de/erkenntnisse/wie-wirkt-es',
            en: 'https://www.mein-grundeinkommen.de/erkenntnisse/wie-wirkt-es',
          },
          homepage: 'https://www.mein-grundeinkommen.de/',
          homepageText: 'homepage',
          facebook: 'MeinGrundeinkommen',
          twitter: 'meinbge',
          instagram: 'meinbge',
          youtube: '@MeinGrundeinkommenOfficial',
          socialOrder: 'facebook, twitter, instagram, youtube',
        },
        {
          id: 2,
          imgSrc: 'src/assets/bulletinboard/sharethemeal/sharethemeal.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'ShareTheMeal',
            en: 'ShareTheMeal',
          },
          subtitle: {
            de: 'Mit nur wenigen Klicks auf deinem Handy kannst du für eine bedürftige Person spenden und das UN World Food Programme wird die Mahlzeiten liefern. Hilf uns, den Hunger zu beenden, indem du die ShareTheMeal-App noch heute herunterlädst.',
            en: 'With just a few taps on your phone you can donate to someone in need and the United Nations World Food Programme will deliver the meals. Help us end hunger by downloading the ShareTheMeal app today.',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zCKewGjMM9FIgbvMmeTolCy',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zCKewGjMM9FIgbvMmeTolCy',
          },
          description: {
            de: 'Sebastian Stricker und Bernhard Kowatsch arbeiten beide für das UN World Food Programme (WFP). Die früheren Unternehmensberater haben ShareTheMeal während eines Sabbaticals gegründet und mit der Unterstützung vieler freiwilliger und unersetzlicher Helfer entwickelt. Inzwischen ist ShareTheMeal ein Innovationsprojekt des WFP. Das Team sitzt in Berlin. (siehe Abschnitt "Wie ist die Idee von ShareTheMeal entstanden?")',
            en: 'Sebastian Stricker and Bernhard Kowatsch founded ShareTheMeal in April 2014 in Berlin during a sabbatical. A large number of voluntary supporters were essential to the further development of ShareTheMeal. ShareTheMeal is now an innovation project within WFP. The team is located in Berlin, Germany. (see section "Where did the idea for ShareTheMeal originate from?")',
          },
          readmore: {
            de: 'https://sharethemeal.org/faq',
            en: 'https://sharethemeal.org/faq',
          },
          homepage: 'https://sharethemeal.org/',
          homepageText: 'homepage',
          facebook: 'sharethemeal',
          twitter: 'ShareTheMealorg',
          youtube: '@SharethemealOrg',
          instagram: 'sharethemeal',
          socialOrder: 'facebook, twitter, youtube, instagram',
        },
        {
          id: 3,
          imgSrc: 'src/assets/bulletinboard/teamtrees/teamtrees.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: '#TEAMTREES',
            en: '#TEAMTREES',
          },
          subtitle: {
            de: 'SCHLIESSEN SIE SICH DER BEWEGUNG AN! Das Team wächst jeden Tag und erzielt Erfolge für den Planeten. Pflanzen Sie mit uns und verfolgen Sie unsere Fortschritte!',
            en: 'JOIN THE MOVEMENT! The team is growing every day and scoring wins for the planet. Plant with us and track our progress!',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zDxRe6ay38cPPShCyBkZ07-',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zDxRe6ay38cPPShCyBkZ07-',
          },
          description: {
            de: '2019 forderte das Internet MrBeast auf, 20 Millionen Dollar zu sammeln, um 20 Millionen Bäume zu pflanzen. Mit der Hilfe des ehemaligen NASA-Ingenieurs Mark Rober, Hunderten von anderen YouTube-Autoren und euch allen haben wir es geschafft, über 24 Millionen Dollar zu sammeln und mehr als 1 Milliarde organische Videoaufrufe zu generieren. Jetzt, wo Millionen von Bäumen in der Erde stehen und Pflanzprojekte auf der ganzen Welt laufen, sorgt #TeamTrees für eine grünere Zukunft. (siehe FAQ "How did #TeamTrees® get started?")',
            en: 'In 2019, the internet challenged MrBeast to raise $20M to plant 20M trees. With the help of ex-NASA engineer Mark Rober, hundreds of other YouTube creators, and all of you, we absolutely crushed it—raising over $24M and generating more than 1B organic video views. Now with millions of trees in the ground and planting projects underway around the world, #TeamTrees is growing a greener future. (see faq "How did #TeamTrees® get started?")',
          },
          homepage: 'https://teamtrees.org/',
          homepageIconOnly: true,
          // homepageText: 'homepage',
          reddit: 'TeamTrees',
          instagram: 'teamtrees',
          twitter: 'teamtreesofficl',
          facebook: 'teamtreesofficial',
          tiktok: '@teamtreesofficial',
          youtube: '@teamtrees',
          socialOrder: 'reddit, instagram, twitter, facebook, tiktok, youtube',
        },
        {
          id: 4,
          imgSrc: 'src/assets/bulletinboard/teamseas/TEAMSEAS.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: '#TEAMSEAS',
            en: '#TEAMSEAS',
          },
          subtitle: {
            de: '#TeamSeas ist eine globale Kampagne, mit der 30 Millionen Dollar gesammelt werden sollen, um 30 Millionen Pfund Plastik und Müll aus unseren Ozeanen, Flüssen und Stränden zu entfernen. Es ist auch die zweite Welle der größten von Künstlern geleiteten Spendenkampagne, die es je im Internet gab: #TeamTrees. \n(siehe FAQ "WHAT IS #TEAMSEAS?")',
            en: '#TeamSeas is a global campaign to raise $30M to remove 30M pounds of plastic and trash from our ocean, rivers and beaches. It’s also the second wave of the largest creator-led fundraising campaign to ever hit the internet: #TeamTrees. \n(see faq "WHAT IS #TEAMSEAS?")',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zAhadHw2QzKgJvSV5tw6Uo2',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zAhadHw2QzKgJvSV5tw6Uo2',
          },
          description: {
            de: 'Jeder einzelne Dollar, den #TeamSeas für die 30 Millionen Dollar sammelt, wird für unabhängig verifizierte Pfunde an Müll verwendet, die von Stränden, Flüssen oder dem Meer entfernt wurden. Wenn Sie spenden, gehen die Gelder direkt an die beiden gemeinnützigen Organisationen Ocean Conservancy und The Ocean Cleanup. Sie teilen sich die Gelder 50/50, und das Geld wird freigegeben, wenn der Müll entfernt und überprüft wurde: 1 Dollar für ein Pfund. Jede gemeinnützige Organisation ist für die Erreichung ihrer Hälfte des Ziels verantwortlich. (siehe FAQ "WHAT HAPPENS TO THE MONEY?")',
            en: 'Every single dollar #TeamSeas raises toward the $30M will go to independently verified pounds of trash that have been removed from beaches, rivers or the ocean. When you donate, the funds go directly to the two not-for-profit organizations, Ocean Conservancy and The Ocean Cleanup. They split the funds 50/50 and the money will be released when the trash is removed and verified: $1, one pound. Each non-profit is responsible for delivering on their half of the goal. (see faq "WHAT HAPPENS TO THE MONEY?")',
          },
          homepage: 'https://teamseas.org/',
          homepageIconOnly: true,
          // homepageText: 'homepage',
          facebook: 'TeamSeas',
          instagram: 'teamseas',
          twitter: 'teamseas',
          reddit: 'teamseas',
          tiktok: '@teamseas',
          youtube: '@teamseas',
          socialOrder: 'facebook, instagram, twitter, reddit, tiktok, youtube',
        },
        {
          id: 5,
          imgSrc: 'src/assets/bulletinboard/dailyart/dailyart.webp',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'DailyArt',
            en: 'DailyArt',
          },
          subtitle: {
            de: 'Erhalten Sie jeden Tag ein Kunstwerk mit einer kurzen Geschichte dazu und erkunden Sie unseren umfangreichen Katalog mit mehr als 3800 Kunstwerken, 1200 Künstlern und 600 Museen und Galerien.',
            en: 'Every day get a one piece of fine art with a short story about it, and explore our vast catalogue of more than 3800 artworks, 1200 artists, 600 museums and galleries.',
          },
          introVideo: {
            de: 'https://www.youtube.com/watch?v=h-SY0Q97mNQ',
            en: 'https://www.youtube.com/watch?v=h-SY0Q97mNQ',
          },
          description: {
            de: 'Kunstgeschichte ist eine erstaunliche Sache. Wir möchten, dass sie populär ist und von der breiten Masse verstanden wird. In den Museen und Galerien findet man oft schwierige (und langweilige) Beschreibungen der Kunstwerke, die weder informativ noch lehrreich sind. Mit DailyArt wollen wir kunstgeschichtliche Geschichten auf die interessanteste und verständlichste Weise vermitteln.',
            en: 'Art history is an amazing thing. We want it to be popular and understood among masses. Often in the museums and galleries you can find difficult (and boring) descriptions of the artworks, which are nor informative, nor educative. With DailyArt we want to share art history stories in the most interesting and digestible way.',
          },
          homepage: 'https://www.getdailyart.com/',
          homepageText: 'homepage',
        },
        {
          id: 6,
          imgSrc: 'src/assets/bulletinboard/signal/signal.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Signal',
            en: 'Signal',
          },
          subtitle: {
            de: 'Sag Hallo zu einer neuen Messaging-Erfahrung: ein ungewohnter Fokus auf Privatsphäre, zusammen mit all den Funktionen, die du gewohnt bist.',
            en: 'Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect.',
          },
          description: {
            de: 'Fortschrittlichste Ende-zu-Ende-Verschlüsselung (auf Basis des quelloffenen Signal Protocol) macht deine Unterhaltungen sicher. Weder wir noch irgendjemand sonst können deine Nachrichten lesen oder deinen Telefonaten zuhören. Vertraulichkeit ist kein optionaler Modus – sie ist ausnahmslos in alle Funktionen von Signal integriert. Für jede Nachricht, jeden Anruf, jederzeit.',
            en: "State-of-the-art end-to-end encryption (powered by the open source Signal Protocol) keeps your conversations secure. We can't read your messages or listen to your calls, and no one else can either. Privacy isn’t an optional mode — it’s just the way that Signal works. Every message, every call, every time.",
          },
          homepage: 'https://signal.org/',
          homepageText: 'homepage',
          github: 'signalapp',
          twitter: 'signalapp',
          instagram: 'signal_app',
          socialOrder: 'github, twitter, instagram',
        },
        {
          id: 7,
          imgSrc:
            'src/assets/bulletinboard/farmbot/FarmBot_Logo_White_on_Brown.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'cover',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'FarmBot',
            en: 'FarmBot',
          },
          subtitle: {
            de: 'FarmBot ist zu 100% Open-Source. Unser kleines Unternehmen wurde 2016 gegründet und umfasst inzwischen Mitglieder in Kalifornien, Oregon, Illinois, Kanada und Belgien. Bis heute haben wir mehr als 1.000 FarmBot-Bausätze an Kunden in über 65 Ländern ausgeliefert, was dem Projekt eine wirklich globale Reichweite verleiht.',
            en: "FarmBot is 100% Open-Source. Founded in 2016, our small company has grown to include members in California, Oregon, Illinois, Canada, and Belgium. To date, we've shipped more than 1,000 FarmBot kits to customers in over 65 countries, giving this project a truly global reach.",
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zBvHmKuBsy0b3f3gv_TTvdP',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zBvHmKuBsy0b3f3gv_TTvdP',
          },
          description: {
            de: 'Obwohl wir die Entwicklung von DIY-Builds unterstützen, beachten Sie bitte, dass wir als Unternehmen nicht in der Lage sind, Ressourcen für die Fehlerbehebung bei Installationen bereitzustellen, die nicht als komplettes FarmBot-Kit in unserem Online-Shop erworben wurden. Obwohl wir ein 100%iges Open-Source-Unternehmen sind, liegt der technische Support für DIY-Builds außerhalb des Rahmens unseres Open-Source-Mandats.',
            en: 'While we encourage the development of DIY builds, please note that as a company we are not able to dedicate resources to helping troubleshoot installations that were not purchased as a full FarmBot kit from our online store. Although we are a 100% open source company, technical support for DIY builds is beyond the scope of our open source mandate.',
          },
          readmore: {
            de: 'https://farm.bot/pages/open-source',
            en: 'https://farm.bot/pages/open-source',
          },
          homepage: 'https://farm.bot/',
          homepageText: 'homepage',
          github: 'FarmBot',
          youtube: '@farmbot',
          instagram: 'farm.bot',
          facebook: 'FarmBot.io',
          twitter: 'farmbotio',
          tiktok: '@farm.bot',
          pinterest: 'getfarmbot',
          socialOrder:
            'github, youtube, instagram, facebook, twitter, tiktok, pinterest',
        },
        {
          id: 8,
          imgSrc: 'src/assets/bulletinboard/nagerit/faire_maus.jpg',
          imgClass: 'q-py-md',
          imgPosition: 'none',
          imgFit: 'contain',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Nager IT',
            en: 'Nager IT',
          },
          subtitle: {
            de: 'Dem scheinbar unerreichbaren Ziel einer Computermaus ohne jegliche Ausbeutung nähern wir uns Schritt für Schritt, nach dem Motto »Am Fairsten → Fairer → Fair«. \n(siehe "Das Projekt" -> "Der Weg dorthin")',
            en: 'It seems impossible to create a mouse which is definitely free of all exploitation in its product chain in one go, so we are approaching our goal step by step. \n(see "The Project" -> "How to reach this")',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zA4MHrljqXHOuLiAGNQBJUz',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zA4MHrljqXHOuLiAGNQBJUz',
          },
          description: {
            de: 'Wie alle kleineren Elektronikprodzuenten stehen wir vor dem Problem, dass es uns bei unserem geringen Produktionsvolumen nicht möglich ist, nur faire Rohstoffe in unserer Maus zu verwenden. Die Lieferkette ist zu lang, zu komplex, zu sehr von großen, konservativen Technikunternehmen bestimmt. Als Ausgleich unterstützen wir nun, auch rückwirkend, ein lokales Netzwerk in Indonesien, die sich seit Jahrzehnten ernsthaft für einen verträglichen Zinnabbau einsetzt, u.a. indem sie Menschenrechte in den betroffenen Regionen vor Gericht erstreitet. \n(siehe "Sind die Metalle in der Fairen Maus auch fair gewonnen?")',
            en: 'Our mouse is going to be by far the most sustainable IT product currently available on the market, and we know we can\'t stress that enough when marketing it. While we can\'t completely rule out exploitation for now due to the centralised structure of the supply chain, the degree of exploitative labour with our mouse has been, compared to its "fellow" anyway, significantly reduced. Therefore, while not entirely fair, this mouse can be rightfully called considerably sustainable. It is by far the fairest alternative and should therefore be preferred to other mice at any rate. It ist also important to see that the project of NAGER IT is a dynamic one: The aim to produce a completely fair computer mouse will not be kept sight of. Further efforts, to create a fairer and fairer production process for the mouse will be made transaparent and will be accessible on demand or publicly. \n(see "If an entirely fair mouse isn\'t possible, does a partly fair mouse actually stand a chance of getting marketed?")',
          },
          readmore: {
            de: 'https://www.nager-it.de/informationen/faq',
            en: 'https://www.nager-it.de/en/informationen/faq',
          },
          homepage: 'https://www.nager-it.de/',
          homepageText: 'homepage',
          twitter: 'NagerIT',
          facebook: 'people/nager-it/100064707307591/',
          youtube: '@nagerit5165',
          socialOrder: 'twitter, facebook, youtube',
        },
        {
          id: 9,
          imgSrc: 'src/assets/partner/galerie-netzwerk.jpg',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'fill',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Galerie Netzwerk',
            en: 'Galerie Netzwerk',
          },
          subtitle: {
            de: 'Kämpfen Sie für die Dinge, die Ihnen wichtig sind, aber tun Sie es auf eine Weise, die andere dazu bringt, sich Ihnen anzuschließen.',
            en: 'Fight for the things that are important to you, but do it in a way that makes others want to join you.',
          },
          description: {
            de: 'In der Trierer Innenstadt, mitten in der Fußgängerzone, können seit über einem Jahr Besucher wie Einheimische einen Ort entdecken, der sie mit auf Reisen nimmt. Die monatlich wechselnden Ausstellungen werden von sehr unterschiedlichen Künstlern, kreativen Menschen und ihren persönlichen Interaktionen getragen - solch eine Galerie zu führen ist eine Herzensangelegenheit.',
            en: 'In downtown Trier, in the middle of the pedestrian zone, visitors and locals alike have been able to discover a place that takes them on a journey for over a year. The monthly changing exhibitions are supported by very different artists, creative people and their personal interactions - running such a gallery is a matter of the heart.',
          },
          readmore: {
            de: 'https://www.galerie-netzwerk.de/philosophie-der-galerie/',
            en: 'https://www.galerie-netzwerk.de/philosophie-der-galerie/',
          },
          phone: '01578 3678 038',
          homepage: 'https://www.galerie-netzwerk.de/',
          homepageText: 'homepage',
          instagram: 'galerienetzwerk',
          facebook: 'galerienetzwerk',
          socialOrder: 'instagram, facebook',
        },
        {
          id: 10,
          imgSrc: 'src/assets/bulletinboard/bemyeyes/bemyeyes.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'fill',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Be My Eyes',
            en: 'Be My Eyes',
          },
          subtitle: {
            de: '„Be My Eyes“ verbindet Menschen, die sehende Unterstützung benötigen, mit Freiwilligen und Unternehmen per Live-Video auf der ganzen Welt.',
            en: '"Be My Eyes" connects people needing sighted support with volunteers and companies through live video around the world.',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zBkGmQTA0IBLmQd9vvhs1b2',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zBkGmQTA0IBLmQd9vvhs1b2',
          },
          description: {
            de: '„Be My Eyes“ ist eine kostenlose App, mit der Sie im Handumdrehen Videounterstützung erhalten. Jeden Tag stellen sehende Freiwillige und Fachleute ihre Augen zur Verfügung, um große und kleine Aufgaben zu lösen und blinden und sehbehinderten Menschen ein unabhängigeres Leben zu ermöglichen.',
            en: '"Be My Eyes" is a free app for receiving video support at a moment’s notice. Every day, sighted volunteers and professionals lend their eyes to solve tasks big and small to assist blind and low-vision people lead more independent lives.',
          },
          homepage: 'https://www.bemyeyes.com/',
          homepageText: 'homepage',
          facebook: 'bemyeyesapp',
          twitter: 'bemyeyes',
          linkedin: 'https://dk.linkedin.com/company/be-my-eyes',
          instagram: 'bemyeyesapp',
          youtube: '@bemyeyes',
          tiktok: '@bemyeyesapp',
          socialOrder:
            'facebook, twitter, linkedin, instagram, youtube, tiktok',
        },
        {
          id: 11,
          imgSrc: 'src/assets/bulletinboard/algorave/algorave.jpg',
          imgClass: '',
          imgPosition: 'none',
          imgFit: '',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Algorave',
            en: 'Algorave',
          },
          subtitle: {
            de: 'Ein Algorave (von "Algorithmus" und "Rave") ist eine Veranstaltung, bei der zu Musik getanzt wird, die von Algorithmen generiert wird, oft unter Verwendung von Live-Coding-Techniken.',
            en: 'An algorave (from an algorithm and rave) is an event where people dance to music generated from algorithms, often using live coding techniques.',
          },
          introVideo: {
            de: 'https://www.youtube.com/watch?v=RPiyEUWPhxU',
            en: 'https://www.youtube.com/watch?v=RPiyEUWPhxU',
          },
          description: {
            de: 'Algoraves kann eine Reihe von Stilen umfassen, einschließlich einer komplexen Form von Minimal Techno, und die Bewegung wurde als Treffpunkt von Hacker-Philosophie, Geek-Kultur und Clubbing beschrieben. (Übersetztung des englischen Wikipediaeintrag)',
            en: 'Algoraves can include a range of styles, including a complex form of minimal techno, and the movement has been described as a meeting point of hacker philosophy, geek culture, and clubbing.',
          },
          readmore: {
            de: 'https://www.vice.com/de/article/rjq8nx/algorave-ist-die-zukunft-der-dance-musik-wenn-du-ein-nerd-bist',
            en: 'https://en.wikipedia.org/wiki/Algorave',
          },
          homepage: 'https://algorave.com/',
          homepageText: 'homepage',
          github: 'tidalcycles/Tidal',
          socialOrder: 'github',
        },
        {
          id: 12,
          imgSrc: 'src/assets/bulletinboard/germanzero/germanzero.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: '',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'GermanZero',
            en: 'GermanZero',
          },
          subtitle: {
            de: 'Als Klimaschutzorganisation arbeiten wir für eine Welt, in der zukünftige Generationen ein gutes Leben führen können. Das bedeutet, die Erderwärmung auf 1,5 Grad zu begrenzen. Dafür muss Deutschland bis 2035 klimaneutral werden. Wir zeigen, wie das geht.',
            en: 'As a climate protection organization, we work for a world in which future generations can lead a good life. That means limiting global warming to 1.5 degrees. To achieve this, Germany must become climate neutral by 2035. We show how this can be done.',
          },
          introVideo: {
            de: 'https://www.youtube.com/watch?v=WqJdlmkYEoo',
            en: 'https://www.youtube.com/watch?v=WqJdlmkYEoo',
          },
          description: {
            de: 'Das 1,5-Grad-Gesetzespaket ist unser Angebot an die Bundesregierung. Es enthält einen Maßnahmenkatalog, der ganz konkret die Lösungen beschreibt, mit denen jeder Sektor bis 2035 klimaneutral werden kann. Damit diese Maßnahmen auch rechtswirksam umgesetzt werden können, präsentieren wir für einen Großteil unserer Vorschläge auch fertig ausformulierte Gesetzesentwürfe.',
            en: 'The 1.5-degree legislative package is our offer to the German government. It contains a catalog of measures that very specifically describes the solutions with which each sector can become climate-neutral by 2035. To ensure that these measures can also be implemented with legal effect, we also present ready-formulated draft laws for a large part of our proposals.',
          },
          readmore: {
            de: 'https://germanzero.de/downloads',
            en: 'https://germanzero.de/downloads',
          },
          homepage: 'https://germanzero.de/',
          homepageText: 'homepage',
          facebook: 'GermanZero.NGO',
          twitter: '_germanzero',
          youtube: '@GermanZero',
          linkedin: 'https://www.linkedin.com/company/germanzero/',
          instagram: '_GermanZero',
          socialOrder: 'facebook, twitter, youtube, linkedin, instagram',
        },
        {
          id: 13,
          imgSrc: 'src/assets/bulletinboard/spielefuerkinder/joystick.jpg',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'scale-down',
          imgWrapBgColor: 'white',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Spiele fuer Kinder',
            en: 'Games for Kids',
          },
          subtitle: {
            de: '& andere.',
            en: '& others.',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zDSZtyXdi2hFLXRYoAGU2ZF',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zD_-Kdl1Lz6DJf04RycqVrP',
          },
          readmore: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zDSZtyXdi2hFLXRYoAGU2ZF',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zD_-Kdl1Lz6DJf04RycqVrP',
          },
        },
        {
          id: 13,
          imgSrc: 'src/assets/bulletinboard/nina/nina.png',
          imgClass: '',
          imgPosition: 'none',
          imgFit: 'scale-down',
          imgWrapBgColor: '#F5F5F5',
          funkyStyles: true,
          bgColor: '#c7a583',
          title: {
            de: 'Warn-App NINA',
            en: 'Warning App NINA',
          },
          subtitle: {
            de: 'Mit der Notfall-Informations- und Nachrichten-App des Bundes, kurz Warn-App NINA, erhalten Sie wichtige Warnmeldungen des Bevölkerungsschutzes.',
            en: 'Emergency information sources for international visitors in Germany.',
          },
          introVideo: {
            de: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zAd8EdUzhZXM1UhTbFWc14z',
            en: 'https://www.youtube.com/playlist?list=PLPw5IThuM1zAd8EdUzhZXM1UhTbFWc14z',
          },
          readmore: {
            de: 'https://www.bbk.bund.de/DE/Warnung-Vorsorge/Warn-App-NINA/warn-app-nina_node.html',
            en: 'https://www.bbk.bund.de/EN/International-Visitors/international-visitors_node.html',
          },
          twitter: 'bbk_bund',
          youtube: '@BBKBund',
          socialOrder: 'twitter, youtube',
        },
      ]),
    };
  },
  // TODO:
  // fairphone
  // GLS BANK
  // die ofenmacher?
  // startnext?
  // malala fund?
  // wetalk?
  methods: {
    randomize: function (obj: Array<Shoutout>): Array<Shoutout> {
      return obj.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
});
</script>

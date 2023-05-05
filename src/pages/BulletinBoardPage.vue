<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('bulletinboard_headline') }}</h4>

    <h5>
      {{ $t('bulletinboard_description') }}
    </h5>

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
  setup() {
    const shoutouts = ref<Shoutout[]>([
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
        introVideo: 'https://www.youtube.com/watch?v=P5QU_99oF5k',
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
        introVideo:
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zBXmebZfLLNdPQEk6qY14ga',

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
        introVideo:
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zCKewGjMM9FIgbvMmeTolCy',

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
        introVideo:
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zDxRe6ay38cPPShCyBkZ07-',

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
    ]);
    return { shoutouts };
  },
});
</script>

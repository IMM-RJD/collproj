<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Unser Team</h4>

    <person-component :persons="persons"></person-component>
  </q-page>
</template>

<script lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TeamPage',
  components: { PersonComponent },
  setup() {
    const persons = ref<Person[]>([
      /**
       * TODO:
       * - blur bei personComp ueber class deaktivieren (Jaezz bei /contact)
       * - seo / alt-tag fuer images
       */

      {
        id: 0,
        imgSrc: 'src/assets/team/jes-man.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Jessica',
        lastName: 'Mans',
        role: 'Organisatorin und performative Lichtkünstlerin',
        description:
          'Als Head des Kollektivs sprudelt sie vor Ideen und ist ein begeisterungsfähiger Wirbelwind. Ihren Abschluss B. A. absolvierte sie mit dem Schwerpunkt Modedesign und verknüpft ihre Liebe zum Kostüm und Theater mit ihren Bühnenshows unter dem Künstlernamen Lady Lightflow. Sie war bereits zwei Mal mit unterschiedlichen Konzepten bei der Illuminale vertreten. Voller Tatendrang und Herzblut begeistert sie die Außenwelt für neue Projekte. \n\n„Den Mutigen gehört die Welt.“',
        phone: '0152 363 748 04',
        email: 'anfragen@kollektivmehrklang.de',
        homepage: 'http://www.ladylightflow.com',
        homepageText: 'ladylightflow.com',
        facebook: 'ladylightflow',
        instagram: 'ladylacelatex',
        socialOrder: 'instagram, facebook',
      },
      {
        id: 1,
        imgSrc: 'src/assets/team/seb-gro.jpg',
        funkyStyles: true,
        firstName: 'Sebastian',
        lastName: 'Groll',
        role: 'IT & Sound',
        description:
          'Technikaffin, audiophil und begeisterungsfähig unterstützt er das Kollektiv durch Rat und Tat. Die Pfelge der Webseite, das Abmixen von Sets sowie elektronische Live-Performances sind dabei sein Hauptmetie. Mit Freude bringt er sich auch auf vielfältige Art und Weise in die unterschiedlichsten Aufgaben ein. \n\n"Greatness from small beginnings - Ukulele ftw."',
        email: 'real_jane_doe@gmx.de',
        youtube: 'channel/UCf1CouiM7wRwDrROYltYDYA',
        soundcloud: 'improvisingmusicmachines',
        socialOrder: 'soundcloud, youtube',
      },
      {
        id: 2,
        imgSrc: 'src/assets/team/fran-leh.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Franziska',
        lastName: 'Lehmann',
        role: 'Studierende der Psychologie (B. Sc.), Sozialassistentin',
        description:
          'Franziska kommt ursprünglich aus Thüringen und durfte dort Erfahrungen in sozio-kulturellen und ökologischen Projekten sammeln. Neben ihrem Studium lässt sie sich für kreative Aktionen begeistern und träumt von Räumen, die achtsame Begegnung und herzlichen Austausch ermöglichen. \n\n„Es heißt, dass alles, was wir wirklich suchen, uns seinerseits schon seit Ewigkeiten sucht und dass es uns findet, wenn wir nur ein Weilchen innehalten können.“',
      },
      {
        id: 3,
        imgSrc: 'src/assets/team/irene.jpeg',
        imgPosition: '50% 40%',
        funkyStyles: true,
        firstName: 'Irene',
        lastName: 'Lichtenwald',
        role: 'Makeup-Artist',
        description:
          'Unsere Makeup-Zauberfrau hat schon viele Male ihre Pinsel geschwungen und bis zu fünf Darstellerinnen an einem Tag verwandelt. Bei den Trierer Unterwelten 2022 war sie mit von der Partie, sowie bei der Illuminale 2021. \n\n"If you look for the light, you can often find it. But if you look for the dark, that is all you will ever see."',
        instagram: 'http_manray',
        socialOrder: 'instagram',
      },
      {
        id: 4,
        imgSrc: 'src/assets/team/sam-pet.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Samira',
        lastName: 'Petry',
        role: 'Studentin der Sozialpädagogik B. A., Schwerpunkt Kinder- und Jugendarbeit und soziale Gruppenarbeit',
        description:
          'Samira lässt mit ihrer mehrjährigen theoretischen und praktischen Erfahrung in sozialpädagogischer und kreativer Projektarbeit und ihrem kinderfreundlichen sowie empathischen Wesen die Augen und Herzen der Kinder mit Freude erblühen. Egal ob beim Modellierballons zaubern, Basteln, Malen, Kinderschminken oder interaktiven erlebnispädagogischen Rollenspielen: Für Jeden ist etwas dabei. Die soziale Gruppenarbeit und Kinderbetreuung unterschiedlicher Gruppenformen ist ihre Expertise. \n\n„Kinder sind keine Fässer, die gefüllt, sondern Feuer, die entzündet werden wollen.“',
      },
      // {
      //   id: 3,
      //   imgSrc: 'src/assets/team/persona-dummy.png',
      //   imgPosition: '50% 0%',
      //   funkyStyles: true,
      //   firstName: 'Sarah',
      //   lastName: 'Kowatsch',
      //   role: 'M.A. Kommunikationsdesign, Flyer und Printmediengestaltung/soziale Medien',
      //   description:
      //     'Unser Genie in Sachen Printmedien und social Network…? Ihre Professionalität steckt sie liebevolle in all ihre Gestaltungen, was man sehen und spüren kann.',
      //   phone: '',
      //   email: '',
      // },
      {
        id: 5,
        imgSrc: 'src/assets/team/cla-sch.jpg',
        imgPosition: '50% 49%',
        funkyStyles: true,
        firstName: 'Clara',
        lastName: 'Schiffmann',
        role: 'Raumgestaltung/Dekoration und Bühnenbild',
        description:
          'Schon bei vielen Events in und um die Trierer Region konnte man die verzückenden Dekorationen von unserer Frau für die Bühnen- und Raumgestaltung bewundern. Sie belebt Stoffe und Naturmaterialien mit neuem Flair und schafft so neue Zauberwelten. \n\n"Der krumme Baum lebt sein Leben, der gerade Baum wird ein Brett."',
      },
      {
        id: 6,
        imgSrc: 'src/assets/team/isa-mul.jpg',
        imgPosition: '50% 0%',
        funkyStyles: true,
        firstName: 'Isabell',
        lastName: 'Müller',
        role: 'Grundschullehrerin, ausgebildeter 4-Elemente-Coach',
        description:
          'Achtsam und empathisch begleitet sie gerade ihre Viertklässler in Lernprozessen auf dem Weg zur weiterführenden Schule. Ihre Vision ist es, Mädchen und Frauen in ihre innewohnende Kraft zu bringen, um sich selbst zu erkennen und zu verwirklichen. Behilflich sind ihr dabei Elemente aus dem NLP, der Trance und dem Familienstellen. \n\n„Sei realistisch. Plane Wunder ein.“ ',
      },
    ]);
    return { persons };
  },
});
</script>

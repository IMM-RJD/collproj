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
      {
        id: 0,
        imgSrc: 'src/assets/team/jes-man.jpg',
        firstName: 'Jessica',
        lastName: 'Mans',
        role: 'Organisatorin und performative Lichtkünstlerin',
        description:
          'Als Head des Kollektivs sprudelt sie vor Ideen und ist ein begeisterungsfähiger Wirbelwind. Ihren Abschluss B. A. absolvierte sie mit dem Schwerpunkt Modedesign und verknüpft ihre Liebe zum Kostüm und Theater mit ihren Bühnenshows unter dem Künstlernamen Lady Lightflow. Sie war bereits zwei Mal mit unterschiedlichen Formaten/Konzepten bei der Illuminale vertreten. Voller Tatendrang und Herzblut motiviert/begeistert sie die Außenwelt für neue Projekte. (www.ladylightflow.com) „Den Mutigen gehört die Welt.“',
        phone: '015236374804',
        email: 'jessica.mans@gmx.de',
      },
      {
        id: 1,
        imgSrc: 'src/assets/team/sam-pet.jpg',
        firstName: 'Samira',
        lastName: 'Petry',
        role: 'Studentin der Sozialpädagogik B.A., Schwerpunkt Kinder- und Jugendarbeit und soziale Gruppenarbeit',
        description:
          'Samira lässt mir ihrer mehrjährigen theoretischen und praktischen Erfahrung in sozialpädagogischer und kreativer Projektarbeit und ihrem kinderfreundlichen sowie empathischen Wesen die Augen und Herzen der Kinder mit Freude erblühen. Egal ob beim Modellierballons zaubern, Basteln, Malen, Kinderschminken oder interaktiven erlebnispädagogischen Rollenspielen. Für jeden ist etwas dabei. Die soziale Gruppenarbeit und Kinderbetreuung unterschiedlicher Gruppenformen ist ihre Expertise. „Kinder sind keine Fässer, die gefüllt, sondern Feuer, die entzündet werden wollen.“',
        phone: '',
        email: '',
      },

      {
        id: 2,
        imgSrc: 'src/assets/team/persona-dummy.png',
        firstName: 'Sebastian',
        lastName: 'Groll',
        role: 'IT & Sound',
        description: '',
        phone: '',
        email: 'real_jane_doe@gmx.de',
      },
      {
        id: 3,
        imgSrc: 'src/assets/team/persona-dummy.png',
        firstName: 'Sarah',
        lastName: 'Kowatsch',
        role: 'M.A. Kommunikationsdesign, Flyer und Printmediengestaltung/soziale Medien',
        description:
          'Unser Genie in Sachen Printmedien und social Network…? Ihre Professionalität steckt sie liebevolle in all ihre Gestaltungen, was man sehen und spüren kann.',
        phone: '',
        email: '',
      },
      {
        id: 4,
        imgSrc: 'src/assets/team/persona-dummy.png',
        firstName: 'Clara',
        lastName: 'Schiffmann',
        role: 'Raumgestaltung/Dekoration und Bühnenbild',
        description:
          'Schon bei vielen Events in und um die Trierer Region konnte man die verzückenden Dekorationen von unserer Frau für die Bühnen- und Raumgestaltung bewundern. Sie belebt Stoffe und Naturmaterialien mit neuem Flair und schafft so neue Zauberwelten.',
        phone: '',
        email: '',
      },
      {
        id: 5,
        imgSrc: 'src/assets/team/persona-dummy.png',
        firstName: 'Isabel',
        lastName: 'Müller',
        role: 'Grundschullehrerin, ausgebildeter 4-Elemente-Coach',
        description:
          'Achtsam und empathisch begleitet sie gerade ihre Viertklässler in Lernprozessen auf dem Weg zur weiterführenden Schule. Ihre Vision ist es, Mädchen und Frauen in ihre innewohnende Kraft zu bringen, um sich selbst zu erkennen und zu verwirklichen. Behilflich sind ihr dabei Elemente aus dem NLP, der Trance und dem Familienstellen. „Sei realistisch. Plane Wunder ein.“ ',
        phone: '',
        email: '',
      },

      {
        id: 6,
        imgSrc: 'src/assets/team/fran-leh.jpg',
        firstName: 'Franziska',
        lastName: 'Lehmann',
        role: 'Studierende der Psychologie (B. Sc.), Sozialassistentin',
        description:
          'Franziska kommt ursprünglich aus Thüringen und durfte dort Erfahrungen in sozio-kulturellen und ökologischen Projekten sammeln. Neben ihrem Studium lässt sie sich für kreative Aktionen begeistern und träumt von Räumen, die achtsame Begegnung und herzlichen Austausch ermöglichen. „Es heißt, dass alles, was wir wirklich suchen, uns seinerseits schon seit Ewigkeiten sucht und dass es uns findet, wenn wir nur ein Weilchen innehalten können.“',
        phone: '',
        email: '',
      },
    ]);
    return { persons };
  },
});
</script>

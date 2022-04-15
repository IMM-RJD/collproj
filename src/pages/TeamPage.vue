<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Unser Team</h4>

    <!-- <p class="q-mb-md">
      Asperiores voluptatibus natus quasi sed voluptatum molestiae. Veniam atque
      nostrum quo. Doloribus fugit consequatur. Ea consequatur enim consequuntur
      qui aut aliquam. Necessitatibus neque necessitatibus ex est.
    </p>
    <p class="q-mb-md">
      Asperiores voluptatibus natus quasi sed voluptatum molestiae. Veniam atque
      nostrum quo. Doloribus fugit consequatur. Ea consequatur eni.
    </p>
    <p class="q-mb-md">
      Asperiores voluptatibus natus quasi sed voluptatum molestiae. Veniam atque
      nostrum quo. Doloribus fugit consequatur. Ea consequatur enim consequuntur
      qui aut aliquam. Necessitatibus neque necessitatibus ex est. Ea
      consequatur enim consequuntur qui aut aliquam. Necessitatibus neque
      necessitatibus ex est.
    </p> -->

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
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Jessica',
        lastName: 'Mans',
        role: 'Organisatorin und performative Lichtkünstlerin',
        description:
          'Als Head des Kollektivs sprudelt sie vor Ideen und ist ein begeisterungsfähiger Wirbelwind. Ihren Abschluss B. A. hat sie in Modedesign und verknüpft ihre Liebe zum Kostüm und Theater mit ihren Bühnenshows unter dem Künstlernamen Lady Lightflow. Sie war schon 2x mit unterschiedlichen Formaten/Konzepten bei der Illuminale vertreten. (www.ladylightflow.com) Voller Tatendrang und Herzblut motiviert/begeistert sie die Außenwelt für neue Projekte. „Den Mutigen gehört die Welt.“',
        phone: '1-290-207-6841 x547',
        email: 'something@else.com',
      },
      {
        id: 1,
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Samira',
        lastName: 'Petry',
        role: 'Studentin der Sozialpädagogik B.A., Schwerpunkt Kinder- und Jugendarbeit und soziale Gruppenarbeit',
        description:
          'Soziale Gruppenarbeit mit Kindern und Jugendlichen insbesondere im Bereich interaktives, sozialpädagogisches Projektmanagement auch im Bereich Eventplanung: Planung, Durchführung und Organisation inkl. Sponsoring und Akquise, zzgl. Gemeinwesenarbeit und Kinderbetreuung, Projektarbeit mit Kindern und Jugendlichen, juleica Schulung 2017 mit Auffrischung 2020. Unser Profi in Sachen Sozialarbeit hat schon etliche/n Kinder/n und Jugendliche/n mit ihren Angeboten an Projekten glücklich gemacht/Funkeln in die Kinderaugen gezaubert.',
        phone: '',
        email: '',
      },
      {
        id: 2,
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Sebastian',
        lastName: 'Groll',
        role: 'IT & Sound',
        description: '',
        phone: '',
        email: 'real_jane_doe@gmx.de',
      },
      {
        id: 3,
        imgSrc: 'https://picsum.photos/400/400',
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
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Clara',
        lastName: 'Schiffmann',
        role: 'Raumgestaltung/Dekoration und Bühnenbild',
        description:
          'Schon bei vielen Events in und um die Trierer Region konnte man die verzückenden Dekorationen von unserer Frau für die Bühnen- und Raumgestaltung bewundern. Sie belebt Stoffe und Naturmaterialien mit neuem Flair und schafft so neue Zauberwelten/bezaubernde Welten.',
        phone: '',
        email: '',
      },
      {
        id: 5,
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Isabel',
        lastName: 'Müller',
        role: 'Raumgestaltung/Dekoration und Bühnenbild',
        description: '„Sei realistisch. Plane Wunder ein.“',
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

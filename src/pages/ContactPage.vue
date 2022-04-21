<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Kontakt</h4>

    <!-- <p class="q-mb-md">
      Asperiores voluptatibus natus quasi sed voluptatum molestiae. Veniam atque
      nostrum quo. Doloribus fugit consequatur. Ea consequatur enim consequuntur
      qui aut aliquam. Necessitatibus neque necessitatibus ex est.
    </p> -->

    <person-component :persons="persons"></person-component>
  </q-page>
</template>

<script lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ContactPage',
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
    ]);
    return { persons };
  },
});
</script>

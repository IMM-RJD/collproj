<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Kontakt</h4>

    <p class="q-mb-md">
      Liebe Menschen, bei Interesse und Fragen sowie Kooperationsideen meldet
      euch gerne telefonisch oder per E-Mail.
    </p>

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
        imgPosition: '50% 0%',
        firstName: 'Jessica',
        lastName: 'Mans',
        role: 'Organisatorin und performative Lichtkünstlerin',
        description: '',
        phone: '0152 363 748 04',
        email: 'anfragen@kollektivmehrklang.de',
      },
    ]);
    return { persons };
  },
});
</script>

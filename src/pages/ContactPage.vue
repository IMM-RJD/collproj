<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('contact_headline') }}</h4>

    <p class="q-mb-md">{{ $t('contact_p_first') }}</p>

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
        funkyStyles: false,
        firstName: 'Jessica',
        lastName: 'Mans',
        role: {
          de: 'Organisatorin und performative Lichtkünstlerin',
          en: 'Organizer and performative light artist',
        },
        description: { de: '', en: '' },
        phone: '0152 363 748 04',
        email: 'anfragen@kollektivmehrklang.de',
      },
    ]);
    return { persons };
  },
});
</script>

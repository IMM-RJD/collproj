<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h3>Kontakt</h3>

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
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Nachname',
        lastName: 'Vorname',
        role: 'Rolle',
        description: 'Beschreibung',
        phone: 'Telefonnummer',
        email: 'something@else.com',
      },
      {
        id: 0,
        imgSrc: 'https://picsum.photos/400/400',
        firstName: 'Cameron',
        lastName: 'Romaguera',
        role: 'Projektmanager',
        description:
          'Et nesciunt dolorem est deleniti adipisci ut quia repudiandae. Est velit nulla soluta recusandae. Beatae ipsa qui repellendus et est. Unde in dolores aut error animi id quis.',
        phone: '(278) 560-7620 x8593',
        email: 'something@else.com',
      },
    ]);
    return { persons };
  },
});
</script>

<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Kontakt</h4>

    <p class="q-mb-md">
      Asperiores voluptatibus natus quasi sed voluptatum molestiae. Veniam atque
      nostrum quo. Doloribus fugit consequatur. Ea consequatur enim consequuntur
      qui aut aliquam. Necessitatibus neque necessitatibus ex est.
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

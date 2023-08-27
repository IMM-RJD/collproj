<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">{{ $t('team_headline') }}</h4>

    <person-component :persons="persons"></person-component>
  </q-page>
</template>

<script lang="ts">
import { Person } from 'components/models';
import PersonComponent from 'components/PersonComponent.vue';
import { defineComponent, ref } from 'vue';
import teamData from 'src/assets/data/team.json';

export default defineComponent({
  name: 'TeamPage',
  components: { PersonComponent },
  data() {
    return {
      persons: ref<Person[]>(teamData),
    };
  },
});
</script>

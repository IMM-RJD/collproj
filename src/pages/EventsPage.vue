<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Heute ist nicht aller Tage, wir sehen uns wieder...</h4>
    <h5>und planen schon fürs neue Jahr :)</h5>

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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EventsPage',
  setup() {
    return {};
  },
});
</script>

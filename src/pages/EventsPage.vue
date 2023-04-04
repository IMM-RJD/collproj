<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">{{ $t('event_headline') }}</h4>

    <h5 class="q-mb-md">{{ $t('event_event1_title') }}</h5>
    <p>
      {{ $t('event_event1_description') }}
    </p>

    <!-- <h5 class="q-mb-md">{{ $t('event_event2_title') }}</h5>
    <p>
      {{ $t('event_event2_description') }}
    </p> -->

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

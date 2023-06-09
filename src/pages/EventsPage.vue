<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">{{ $t('event_headline') }}</h4>

    <h5 style="color: #d46643" class="q-mb-md">
      {{ $t('event_event2_title') }}
    </h5>
    <q-video src="https://www.youtube.com/embed/gwcd96MDOnM"></q-video>
    <p class="q-mt-sm">
      {{ $t('event_event2_description') }}
    </p>
    <q-btn
      flat
      icon="fa-solid fa-share"
      type="a"
      style="color: #d46643"
      no-caps
      align="left"
      target="_blank"
      href="https://www.loversoftheuniverse.com/danceofthegods"
      :label="$t('visitHomepage')"
    ></q-btn>
    <div style="height: 50px; width: 100%"></div>
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

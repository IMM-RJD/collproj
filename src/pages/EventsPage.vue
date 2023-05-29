<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">{{ $t('event_headline') }}</h4>

    <h5 class="q-mb-md">Lady Lightflow -- 12.5. - Galerie Netzwerk - 19:00</h5>
    <p>
      {{ $t('event_udinegeht_description') }}
    </p>

    <div class="row fit q-gutter-md">
      <q-img
        style="border-radius: 3px"
        src="src/assets/events/udine0.jpeg"
      ></q-img>
      <q-img
        style="border-radius: 3px"
        src="src/assets/events/udine1.jpeg"
      ></q-img>
    </div>

    <h5 class="q-mb-md">{{ $t('event_event1_title') }}</h5>
    <p>
      {{ $t('event_event1_description') }}
    </p>
    <q-btn
      flat
      icon="fa-brands fa-facebook"
      type="a"
      style="background-color: #007842; color: #e8a91e"
      no-caps
      target="_blank"
      href="https://facebook.com/events/s/jetzt-gehts-wieder-loslosloshe/6083421895071408/"
      :label="$t('visitEvent')"
    ></q-btn>
    <q-btn
      flat
      icon="fa-brands fa-instagram"
      type="a"
      class="q-ml-md"
      style="background-color: #e8a91e; color: #007842"
      no-caps
      target="_blank"
      href="https://instagram.com/losloslosheim?igshid=YmMyMTA2M2Y="
      :label="$t('visitEvent')"
    ></q-btn>
    <div class="row fit q-gutter-md q-mt-xs">
      <q-img
        style="border-radius: 3px"
        src="src/assets/events/JGWLLL_Artists_Story_KollektivMehrklang.jpg"
      ></q-img>
      <q-img
        style="border-radius: 3px"
        src="src/assets/events/JGWLLL_Artists_Rij7-VAK3-KollektivMehrklang.jpg"
      ></q-img>
    </div>

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

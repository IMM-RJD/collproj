<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Bevorstehende Events</h4>
    <q-img
      width="200px"
      loading="lazy"
      position="-20px 50%"
      src="src/assets/projects/gb/logo.png"
    ></q-img>
    <div style="font-size: 18px; margin-bottom: 10px">
      Projekt "Glücksbringer" vom 25.07. bis 04.09.2022 im
      <a
        href="https://kulturspektrum-trier.de/"
        target="blank"
        class="imm-event-link"
      >
        KULTURSPEKTRUM
      </a>
      - Soziokulturelles Programm mit Workshops und Events.
      <br />
      <q-btn
        label="Flyer anzeigen"
        color="primary"
        @click="flyer = true"
        style="margin-top: 10px; margin-bottom: 10px"
      />
    </div>
    <q-dialog v-model="flyer" transition-show="rotate" transition-hide="rotate">
      <q-carousel
        animated
        v-model="slide"
        v-model:fullscreen="fullscreen"
        navigation
        infinite
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1">
          <q-img
            width="1600px"
            loading="lazy"
            src="src/assets/projects/gb/flyer_front.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
          <q-img
            width="1600px"
            loading="lazy"
            src="src/assets/projects/gb/flyer_back.jpg"
          ></q-img>
        </q-carousel-slide>
        <template v-slot:control>
          <q-carousel-control position="bottom-right" :offset="[18, 18]">
            <q-btn
              push
              round
              dense
              color="white"
              text-color="primary"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
      </q-carousel>
    </q-dialog>
    <div
      class="fb-page"
      data-href="https://www.facebook.com/kollektivmehrklang"
      data-tabs="timeline,events"
      data-lazy="true"
      data-adapt-container-width="true"
      data-width=""
      data-height=""
      data-small-header="false"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/kollektivmehrklang"
        class="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/kollektivmehrklang"
          >Kollektiv Mehrklang</a
        >
      </blockquote>
    </div>
    <q-separator color="secondary" inset spaced="20px" />
    <div style="font-size: 18px">
      <a
        href="https://www.trierer-unterwelten.de/"
        target="blank"
        class="imm-event-link"
      >
        Unterwelten-Festival
      </a>
      vom 28.10. bis 19.11.2022 mit dem Projekt "Schattenwelten und
      Lichtgestalten", je 3 Veranstaltungen pro Woche im Frankenturm Trier -
      Tanztheaterstück plus musikalisches Happening.
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  // name: 'PageName',
  setup() {
    return {
      flyer: ref(false),
      slide: ref(1),
      fullscreen: ref(false),
    };
  },
};
</script>

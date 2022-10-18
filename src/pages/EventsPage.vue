<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Bevorstehende Events</h4>
    <div style="font-size: 24px; margin-bottom: 10px">
      Schattenwelten und Lichtgestalten
    </div>
    <q-img
      height="300px"
      loading="lazy"
      src="src/assets/projects/uw/frankenturm_innen_aussen.jpg"
    ></q-img>

    <div style="font-size: 18px; margin-top: 10px; margin-bottom: 10px">
      <q-btn
        label="Visuelles anzeigen"
        color="secondary"
        @click="flyer = true"
        style="margin-top: 10px; margin-bottom: 10px; margin-right: 20px"
      />
      <q-btn
        label="zu den Tickets"
        color="primary"
        href="https://www.ticket-regional.de/kollektivmehrklang"
        target="_blank"
        style="float: right; margin-top: 10px; margin-bottom: 10px"
      />
    </div>
    <q-dialog v-model="flyer" transition-show="rotate" transition-hide="rotate">
      <q-carousel
        animated
        v-model="slide"
        v-model:fullscreen="fullscreen"
        navigation
        infinite
        control-color="primary"
        class="bg-white shadow-1 rounded-borders"
      >
        <q-carousel-slide :name="1" class="imm-p-0-important">
          <q-img
            width="380px"
            loading="lazy"
            src="src/assets/projects/uw/ticketregional_qr.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="imm-p-0-important">
          <q-img
            width="380px"
            loading="lazy"
            src="src/assets/projects/uw/anzeige.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/dj_liste.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/ll_mood.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="imm-p-0-important">
          <q-img
            width="400px"
            loading="lazy"
            src="src/assets/projects/uw/innen.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="6" class="imm-p-0-important">
          <q-img
            width="400px"
            loading="lazy"
            src="src/assets/projects/uw/aeste.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="7" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/rotweis1.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="8" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/rotweis2.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="9" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/sebastian.jpg"
          ></q-img>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
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
    <q-separator class="q-my-md" />
    <div style="font-size: 18px">
      <a
        href="https://www.trierer-unterwelten.de/"
        target="blank"
        class="imm-event-link"
      >
        Unterwelten-Festival
      </a>
      from 28.10. to 19.11.2022 with the project "Schattenwelten und
      Lichtgestalten" ("Shadow worlds and light figures"), 3 Events per week in
      the Frankenturm Trier - dance theater play plus musical happening.
    </div>
    <q-img
      class="q-my-md"
      fit="contain"
      loading="lazy"
      src="src/assets/projects/uw/Logoleiste_Partner_quer.png"
    ></q-img>
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
import { date } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EventsPage',
  setup() {
    return {
      flyer: ref(false),
      slide: ref(1),
      fullscreen: ref(false),
      pastEvents: ref(false),
      date,
    };
  },
});
</script>

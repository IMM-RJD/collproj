<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Bevorstehende Events</h4>
    <div style="font-size: 24px">Schattenwelten und Lichtgestalten</div>
    <div style="font-size: 20px; margin-bottom: 15px">
      als Teil des Programms der Trierer Unterwelten
    </div>
    <q-img
      height="300px"
      loading="lazy"
      src="src/assets/projects/uw/frankenturm_innen_aussen.jpg"
    ></q-img>

    <div style="font-size: 18px; margin-top: 10px; margin-bottom: 10px">
      <q-btn
        label="Tickets"
        color="secondary"
        href="https://www.ticket-regional.de/kollektivmehrklang"
        target="_blank"
      /><br />
      <q-btn
        label="Lineup"
        class="q-my-sm km-prim-sec-gradient"
        @click="flyerLineup = true"
      />
      <q-dialog
        v-model="flyerLineup"
        transition-show="rotate"
        transition-hide="rotate"
        :square="true"
      >
        <q-img
          fit="fill"
          loading="lazy"
          src="src/assets/projects/uw/dj_liste.jpg"
          width="400px"
          height="400px"
        ></q-img>
      </q-dialog>
      <br />
      <div style="display: flex; flex-direction: row-reverse">
        <q-btn
          label="Visuelles"
          color="primary"
          class="float-right"
          @click="flyer = true"
        />
      </div>
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
            src="src/assets/projects/uw/anzeige_ohneBild.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/ll_mood.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="imm-p-0-important">
          <q-img
            width="400px"
            loading="lazy"
            src="src/assets/projects/uw/innen.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="5" class="imm-p-0-important">
          <q-img
            width="400px"
            loading="lazy"
            src="src/assets/projects/uw/aeste.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="6" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/rotweis1.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="7" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/rotweis2.jpg"
          ></q-img>
        </q-carousel-slide>
        <q-carousel-slide :name="8" class="imm-p-0-important">
          <q-img
            width="580px"
            loading="lazy"
            src="src/assets/projects/uw/sebastian.jpg"
          ></q-img>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
    <div style="font-size: 18px; margin-top: 20px">
      <a
        href="https://www.trierer-unterwelten.de/"
        target="blank"
        class="imm-event-link"
      >
        Unterwelten-Festival
      </a>
      vom 28.10. bis 19.11.2022 mit dem Projekt "Schattenwelten und
      Lichtgestalten". <br />
      Insgesamt 9 Veranstaltungen plus die "Lange Nacht der Unterwelten" (Route
      2) am 12.11. im Frankenturm Trier - Tanztheaterstück mit
      musikalisch-elektronischem Sound im Anschluss.
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
      Lichtgestalten" ("Shadow worlds and light figures"). <br />
      A total of 9 events plus the "Lange Nacht der Unterwelten" ("Long Night of
      the Underworlds") (Route 2) on November 12th. in the Frankenturm Trier -
      dance theatre play with musical-electronic sound afterwards.
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
      flyerLineup: ref(false),
      slide: ref(1),
      fullscreen: ref(false),
      pastEvents: ref(false),
      date,
    };
  },
});
</script>

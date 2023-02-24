<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h4 class="q-my-lg">Vergangene Projekte</h4>
    <!-- https://quasar.dev/style/color-palette#adding-your-own-colors -->
    <q-timeline color="km-timeline">
      <!-- <q-timeline-entry heading> Vergangene Projekte </q-timeline-entry> -->

      <!-- <q-timeline-entry
        title="TESTESTEST Schattenwelten und Lichtgestalten - Choreografische Tanzperformance in eigens designtem Outfit [FRANKENTURM - Im Rahmen des Unterweltenfestivals 2022]"
      >
        <q-carousel
          swipeable
          animated
          v-model="slideSL"
          v-model:fullscreen="fullscreenSL"
          thumbnails
          infinite
          class="secondary shadow-1 rounded-borders"
        >
          <q-carousel-slide
            :name="1"
            img-src="src/assets/projects/uw/frankenturm_innen_aussen.jpg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="src/assets/projects/uw/ll_mood.jpg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="3"
            img-src="src/assets/projects/uw/anzeige_ohneBild.jpg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="4"
            img-src="src/assets/projects/uw/rotweis1.jpg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="5"
            img-src="src/assets/projects/uw/aeste.jpg"
          ></q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                text-color="primary"
                :icon="fullscreenSL ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenSL = !fullscreenSL"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </q-timeline-entry> -->

      <q-timeline-entry
        title="Schattenwelten und Lichtgestalten - Choreografische Tanzperformance [FRANKENTURM - Im Rahmen des Trierer Unterweltenfestivals 2022]"
      >
        <q-carousel
          thumbnails
          animated
          swipeable
          v-model="slideSL"
          v-model:fullscreen="fullscreenSL"
          control-color="secondary"
          infinite
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide
            :name="1"
            class="imm-p-0-important"
            img-src="src/assets/projects/uw/frankenturm_innen_aussen.jpg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="2"
            class="imm-p-0-important"
            img-src="src/assets/projects/uw/ll_mood.jpg"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="3"
            class="imm-p-0-important"
            img-src="src/assets/projects/uw/anzeige_ohneBild.jpg"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="4"
            class="imm-p-0-important"
            img-src="src/assets/projects/uw/rotweis1.jpg"
          >
          </q-carousel-slide>
          <q-carousel-slide
            :name="5"
            class="imm-p-0-important"
            img-src="src/assets/projects/uw/aeste.jpg"
          >
          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreenSL ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenSL = !fullscreenSL"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          Im realen Leben gibt es viele Gegensätze: Gut & Böse, Schatten &
          Licht, warm & kalt. Ohne das Eine nicht das Andere. Die Veranstaltung
          beginnt in einer dunklen Schattenwelt, der „Unterwelt“, hier leben
          düstere Gestalten, die sich durch Tanz und Bewegung ausdrücken. Doch
          wo Schatten, da muss auch Licht sein! Es folgt der Wandel ins Licht
          mit Sängerin und mitreißender Lichtperformance von Lady Lightflow. Es
          folgt ein musikalischer Liveact elektronischer Art, ca. 2 Std. von
          Soundkünstler:innen der Region, die das Spiel der Gegensätze zwischen
          Licht & Schatten, Realität & Fiktion sowie Diesseits & Jenseits
          thematisieren. <br /><br />
          Kostüm und Styling: Lady Lace LATEX || Make-up Artist: Irene
          Lichtenwald || Sound: Sebastian Groll
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title="Glücksbringer - Soziokulturelles Programm mit Workshops und Events [KULTURSPEKTRUM 2022]"
      >
        <q-carousel
          animated
          v-model="slide"
          v-model:fullscreen="fullscreen"
          arrows
          control-color="primary"
          infinite
          class="secondary shadow-1 rounded-borders"
          height="200px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <q-img
              width="1300px"
              loading="lazy"
              src="src/assets/projects/gb/flyer_front.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              width="1300px"
              loading="lazy"
              src="src/assets/projects/gb/flyer_back.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              loading="lazy"
              src="src/assets/projects/gb/freiesmitaneindertanzenundmusizieren.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="imm-p-0-important">
            <q-img
              loading="lazy"
              src="src/assets/projects/gb/gewaltfreiekommunikation.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="5" class="imm-p-0-important">
            <q-img
              loading="lazy"
              src="src/assets/projects/gb/maxmukke.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="6" class="imm-p-0-important">
            <video controls>
              <source
                src="src/assets/projects/gb/modularmeetup.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element. Kindly update it
              to latest version.
            </video>
          </q-carousel-slide>
          <q-carousel-slide :name="7" class="imm-p-0-important">
            <q-img
              loading="lazy"
              src="src/assets/projects/gb/familienfreundlichesevent.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="8" class="imm-p-0-important">
            <q-img loading="lazy" src="src/assets/projects/gb/logo.png"></q-img>
          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                push
                round
                dense
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          Das Kulturspektrum wird im Rahmen unseres Projekts einen Ort der
          Vielfalt und Begegnung darstellen. Es werden soziokulturelle Workshops
          angeboten, die interdisziplinäre, inklusive und interaktive Inhalte
          vermitteln. Zudem ist ein zweitägiges, öffentliches Familienfest Teil
          unseres Projekts. Hier werden verschiedene Programmpunkte für Groß und
          Klein, Jung und Alt, Menschen mit und ohne Handicap angeboten. Das
          Kulturspektrum soll zu einem „Glücksbringer“ für die Stadt Trier und
          ihre Kultur werden. <br />
          Das Kollektiv Mehrklang ist ein Zusammenschluss kreativer Köpfe
          verschiedener Sparten aus Kunst und Sozialem. <br />Es geht uns um
          Achtsamkeit, Austausch, Unterhaltung und Kreativität. Unser Fokus
          liegt auf Vernetzung, Experimentierfreude und ganzheitlichem Lernen.
          Diese vereinen wir mit den Elementen der Musik, der Bewegung, des
          Spiels und der kreativen Gestaltung. <br />Wir freuen uns auf eine
          wunderbare Reise mit euch!
        </div>
      </q-timeline-entry>
      <q-timeline-entry
        title='Illuminale - Tanztheaterstück mit Lady Lightflow "panta rhei-alles fließt" [TRIER 2021] '
        subtitle=""
      >
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/oOBoDeAeCgs"
        ></q-video>
        <div class="q-py-md">
          Für die Illuminale in Trier ist ein Tanztheaterstück entstanden,
          welches im Rahmen der Veranstaltung als Programmpunkt aufgeführt
          wurde. Lady Lightflow, die performative Lichtkünstlerin erarbeitete
          das Konzept und war für die Kostüme, die in liebevoller Handarbeit
          entstanden, zuständig. Das Thema des Stücks war "panta rhei - alles
          fließt". Es wurden die fünf Elemente Luft, Erde, Feuer, Wasser und der
          Spirit, der allem innewohnt, charakterisiert. Bachelorarbeit von
          Jessica Mans, Modedesign. <br />
          Passend zu den Kreationen zückte die Make-up Artistin Irene
          Lichtenwald ihren Pinsel und verzauberte alle Gesichter.
          <br /><br />
          Vielen herzlichen Dank an dieser Stelle an Jan Hoffman, ttm und an
          Kathrin Koutrakos, Museum Simeonstift.
          <br /><br />
          Video/Schnitt/Musik: Lukas Busch, Quarantechno.de || Produktion:
          Philipp Köhn, Quarantechno.de
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="KALI interiUS [TRIER 2019]" subtitle="">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/etmYMG6CoTI"
        ></q-video>
        <q-video
          style="margin-top: 10px"
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/gRBVq0AJONA"
        ></q-video>
        <div class="q-py-md">
          Das Video, welches im Rahmen des Semesterprojekts 2019 von Jessica
          Mans (sechstes Semester) entstanden ist, trägt den Namen "KALI
          interiUS".<br />
          Kooperation mit Galerie Netzwerk, Ausstellung „Die Schönheit des
          Defekts“ des Künstlers Jenzzz (jenzzz.net).<br /><br />
          Vielen herzlichen Dank an dieser Stelle an Bettina Ghasempoor und Marc
          Kalbusch aus der Galerie Netzwerk in Trier, deren Location wir als
          Drehort nutzen durften.<br /><br />
          Video/Schnitt/Produktion: Marius Jacob || Kostüm und Styling: Lady
          Lace LATEX
        </div>
      </q-timeline-entry>

      <!--
        <q-timeline-entry heading> November, 2017 </q-timeline-entry>

         <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          avatar="https://cdn.quasar.dev/img/avatar2.jpg"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          color="orange"
          icon="done_all"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          </div>
        </q-timeline-entry>
        -->
    </q-timeline>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  // name: 'PageName',
  setup() {
    return {
      slide: ref(1),
      slideSL: ref(1),
      fullscreen: ref(false),
      fullscreenSL: ref(false),
    };
  },
});
</script>

<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('project_headline') }}</h4>

    <!-- <h5 class="q-mb-md">Lady Lightflow -- 12.5. - Galerie Netzwerk - 19:00</h5>
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
    </div> -->

    <q-timeline color="km-timeline">
      <q-timeline-entry :title="$t('project_timeline_revengeofthegods_title')">
        <q-carousel
          v-model="slideROTG"
          v-model:fullscreen="fullscreenROTG"
          animated
          arrows
          infinite
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/revengeofthegods/kollektiv.jpeg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/revengeofthegods/kollektiv_flyer.jpeg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/revengeofthegods/rotg_banner.jpeg"
            ></q-img>
          </q-carousel-slide>

          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreenROTG ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenROTG = !fullscreenROTG"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          {{ $t('project_timeline_revengeofthegods_description_first') }}
        </div>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_arttower_title')">
        <q-img
          loading="lazy"
          position="left"
          width="300px"
          height="450px"
          fit="contain"
          src="src/assets/projects/arttower/arttower.jpeg"
        ></q-img>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_losheim_title')">
        <q-carousel
          v-model="slideLosheim"
          v-model:fullscreen="fullscreenLosheim"
          animated
          arrows
          infinite
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <video controls>
              <source
                src="src/assets/projects/losheim/losheim.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element. Kindly update it
              to latest version.
            </video>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/losheim/JGWLLL_Artists_Rij7-VAK3-KollektivMehrklang.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/losheim/JGWLLL_Artists_Story_KollektivMehrklang.jpg"
            ></q-img>
          </q-carousel-slide>

          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreenLosheim ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenLosheim = !fullscreenLosheim"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          {{ $t('project_timeline_losheim_description_first') }}
        </div>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_udine_title')">
        <q-carousel
          v-model="slideUdine"
          v-model:fullscreen="fullscreenUdine"
          animated
          arrows
          infinite
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <video controls>
              <source
                src="src/assets/projects/udine/udine_geht.mp4"
                type="video/mp4"
              />
              Your browser does not support the video element. Kindly update it
              to latest version.
            </video>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/udine/udine0.jpeg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/udine/udine1.jpeg"
            ></q-img>
          </q-carousel-slide>

          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreenUdine ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreenUdine = !fullscreenUdine"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          {{ $t('project_timeline_udine_description_first') }}
          <br />
          {{ $t('project_timeline_udine_description_second') }}
          <br /><br />
          {{ $t('project_timeline_udine_description_third') }}
          <a href="https://soundcloud.com/r_meinrich" target="_blank"
            >Roland Meinrich</a
          >
        </div>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_schattenwelten_title')">
        <q-carousel
          v-model="slideSL"
          v-model:fullscreen="fullscreenSL"
          animated
          arrows
          infinite
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/uw/frankenturm_innen_aussen.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/uw/ll_mood.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/uw/anzeige_ohneBild.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/uw/rotweis1.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="5" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/uw/aeste.jpg"
            ></q-img>
          </q-carousel-slide>

          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
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
        <q-video
          style="height: 250px; margin-top: 1rem"
          loading="lazy"
          fetchpriority="high"
          src="https://www.youtube.com/embed/playlist?list=PLPw5IThuM1zBmvN--4iJhhK1s03WRQn-G"
        />
        <div class="q-py-md">
          {{ $t('project_timeline_schattenwelten_description_first') }}
          <br /><br />
          {{ $t('project_timeline_schattenwelten_description_second') }}
        </div>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_gluecksbringer_title')">
        <q-carousel
          v-model="slide"
          v-model:fullscreen="fullscreen"
          animated
          arrows
          control-type="regular"
          control-color="secondary"
          control-text-color="primary"
          prev-icon="arrow_left"
          next-icon="arrow_right"
          infinite
          class="secondary shadow-1 rounded-borders"
          height="250px"
        >
          <q-carousel-slide :name="1" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/gb/flyer_front.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/gb/flyer_back.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/gb/freiesmitaneindertanzenundmusizieren.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
              loading="lazy"
              src="src/assets/projects/gb/gewaltfreiekommunikation.jpg"
            ></q-img>
          </q-carousel-slide>
          <q-carousel-slide :name="5" class="imm-p-0-important">
            <q-img
              class="imm-sliderImgImprovMobExp"
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
          <template #control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn
                round
                dense
                color="secondary"
                text-color="primary"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
                @click="fullscreen = !fullscreen"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
        <div class="q-py-md">
          {{ $t('project_timeline_gluecksbringer_description_first') }}
          <br />
          {{ $t('project_timeline_gluecksbringer_description_second') }}
          <br />
          {{ $t('project_timeline_gluecksbringer_description_third') }}
          <br />
          {{ $t('project_timeline_gluecksbringer_description_fourth') }}
        </div>
      </q-timeline-entry>
      <q-timeline-entry :title="$t('project_timeline_panta_title')" subtitle="">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/oOBoDeAeCgs"
        ></q-video>
        <q-video
          style="height: 250px; margin-top: 1rem"
          loading="lazy"
          fetchpriority="high"
          src="https://www.youtube.com/embed/o13ojPp_s8o"
        />
        <div class="q-py-md">
          {{ $t('project_timeline_panta_description_first') }} <br />
          {{ $t('project_timeline_panta_description_second') }}
          <br /><br />
          {{ $t('project_timeline_panta_description_third') }}
          <br /><br />
          {{ $t('project_timeline_panta_description_fourth') }}
        </div>
      </q-timeline-entry>

      <q-timeline-entry :title="$t('project_timeline_kali_title')" subtitle="">
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
          {{ $t('project_timeline_kali_description_first') }}
          <br />
          {{ $t('project_timeline_kali_description_second') }}
          <br /><br />
          {{ $t('project_timeline_kali_description_third') }}
          <br /><br />
          {{ $t('project_timeline_kali_description_fourth') }}
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
      fullscreen: ref(false),
      slideSL: ref(1),
      fullscreenSL: ref(false),
      slideUdine: ref(1),
      fullscreenUdine: ref(false),
      slideLosheim: ref(1),
      fullscreenLosheim: ref(false),
      slideROTG: ref(1),
      fullscreenROTG: ref(false),
    };
  },
});
</script>

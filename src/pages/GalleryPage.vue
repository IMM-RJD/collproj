<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">Einblicke</h4>
    <h5>
      Schattenwelten und Lichtgestalten - Choreografische Tanzperformance
      [FRANKENTURM - Im Rahmen des Trierer Unterweltenfestivals 2022]
    </h5>
    <div
      class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
    >
      <q-img
        v-for="imgsrc in uw_imgs"
        width="300px"
        style="max-height: 300px"
        :key="imgsrc"
        :src="imgsrc"
        fit="contain"
        loading="lazy"
      ></q-img>
      <video width="300" style="overflow: hidden" controls>
        <source
          src="src/assets/gallery/unterwelten22/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video element. Kindly update it to
        latest version.
      </video>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // name: 'PageName'
  setup() {
    return {
      uw_imgs: [
        'src/assets/gallery/unterwelten22/1.jpeg',
        'src/assets/gallery/unterwelten22/2.jpeg',
        'src/assets/gallery/unterwelten22/3.jpeg',
      ],
    };
  },
});
</script>

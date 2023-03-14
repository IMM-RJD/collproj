<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('gallery_headline') }}</h4>
    <h5>
      {{ $t('gallery_subheadline') }}
    </h5>
    <div
      class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
    >
      <q-img
        v-for="imgsrc in uw_imgs"
        :key="imgsrc"
        width="300px"
        style="max-height: 300px"
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
        'src/assets/gallery/unterwelten22/group_hor.jpeg',
        'src/assets/gallery/unterwelten22/moni_oben.jpeg',
        'src/assets/gallery/unterwelten22/moni_portrae.jpeg',
        'src/assets/gallery/unterwelten22/moni_pose.jpeg',
        'src/assets/gallery/unterwelten22/group_ver.jpeg',
        'src/assets/gallery/unterwelten22/franzi_pose.jpeg',
        'src/assets/gallery/unterwelten22/franzi_vorne.jpeg',
        // 'src/assets/gallery/unterwelten22/franzi_oben.jpeg',
        'src/assets/gallery/unterwelten22/jess_kopf.jpeg',
        'src/assets/gallery/unterwelten22/jess_ganz.jpeg',
      ],
    };
  },
});
</script>

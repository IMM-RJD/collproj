<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('music_headline') }}</h4>
    <div class="q-mb-md">
      <span style="font-size: 24px">
        {{ $t('music_recommendation') }}
      </span>
      <q-btn
        class="float-right"
        color="primary"
        text-color="secondary"
        :label="$t('shuffle')"
        icon="shuffle"
        @click="($event) => (links_recom = randomize(links_recom))"
      />
    </div>
    <div style="max-height: 600px; overflow: scroll">
      <div v-for="lrec in links_recom" :key="lrec" class="q-ma-md">
        <q-video
          style="height: 330px"
          loading="lazy"
          fetchpriority="high"
          :src="lrec"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      links_recom: this.randomize(
        this.createEmbeded([
          'https://www.youtube.com/watch?v=TLYYVSFVVJU',
          'https://www.youtube.com/watch?v=d020m8_PMGU',
          'https://www.youtube.com/watch?v=t8HNHFFZPhU',
          'https://www.youtube.com/watch?v=UYqRE8WRSog',
          'https://www.youtube.com/watch?v=Vn8phH0k5HI',
          'https://youtu.be/v-QD7vaHQgY',
          'https://www.youtube.com/watch?v=v-QD7vaHQgY',
          'https://www.youtube.com/watch?v=vqRWMDv0r78',
          'https://www.youtube.com/playlist?list=OLAK5uy_nH99tyjJtLp-Fk1gFjhWLf51cGPSjIE0E',
          'https://youtu.be/9prvrirks24?si=KdWTEq77FCjbHmr7',
          //////// sebastians musik ////////
          'https://youtu.be/ThKU8AhGPOo',
          'https://youtu.be/wtqkNCx06Ls',
          'https://youtu.be/_1b7GtCBYQU',
          'https://youtu.be/PWXYe5J23sA',
          'https://youtu.be/QqgODVZTSQ8',
          'https://youtu.be/2JlU0h_wADA',
          'https://youtu.be/Pupqu0z9Oqg',
          'https://youtu.be/vBAQj_ODWuM',
          'https://youtu.be/3tsTWluql74',
          'https://youtu.be/Wsu8Qjn0nnk',
          'https://youtu.be/GlV9M-jBlbs',
          'https://youtu.be/K65YKcLSzH8',
          'https://youtu.be/PcD-Y1G87Mo',
          'https://youtu.be/Ga-MS8enIMM',
          'https://youtu.be/wazQlv_iPMw',
          'https://youtu.be/RbLSw9YSet8',
          'https://youtu.be/2l6_GHn1GH4',
          'https://youtu.be/MaAOn0dX37Q',
          'https://youtu.be/8h54yxXwBpY',
          'https://youtu.be/4C1vXMajX5w',
          'https://youtu.be/AHVZ1TLaZDE',
          // my music - imm_radio
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zC4voWF4hVlfzE5-Llz1ULN',
          // music i like - imm_radio
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zDgBOQwXiq10I0onDN_-4qH',
          // food for artists - imm_radio
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zBv7LOK-PmgTR9cCMyFyz3V',
          // yes - music - electronic -- imm_radio
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zAOnlJ7a-BS-4lUIeA-9Ehc',
          // pause - imm_radio
          'https://www.youtube.com/playlist?list=PLPw5IThuM1zCb8WK0Mt35_amWVK4K0Mm4',
        ])
      ),
    };
  },
  methods: {
    createEmbeded: function (obj: Array<string>): Array<string> {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = obj[i]
          .replace('watch?v=', 'embed/')
          .replace('playlist?list', 'embed/videoseries?list')
          .replace('https://youtu.be/', 'https://www.youtube.com/embed/');
      }
      return obj;
    },
    randomize: function (obj: Array<string>): Array<string> {
      return obj.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
});
</script>

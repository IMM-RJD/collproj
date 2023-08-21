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
          'https://www.youtube.com/playlist?list=OLAK5uy_nH99tyjJtLp-Fk1gFjhWLf51cGPSjIE0E',
          'https://www.youtube.com/watch?v=t_dP9Jp5Yo4',
          'https://www.youtube.com/watch?v=TLYYVSFVVJU',
          'https://www.youtube.com/watch?v=d020m8_PMGU',
          'https://www.youtube.com/watch?v=t8HNHFFZPhU',
          'https://www.youtube.com/watch?v=UYqRE8WRSog',
          'https://www.youtube.com/watch?v=Vn8phH0k5HI',
          'https://youtu.be/v-QD7vaHQgY',
          'https://www.youtube.com/watch?v=Pkfc8mh377E',
          'https://www.youtube.com/watch?v=BNig6xG36i4',
          'https://www.youtube.com/watch?v=KK9kXITV_dw',
          'https://www.youtube.com/watch?v=tQidkessjZA',
          'https://www.youtube.com/watch?v=pwz3roWATog',
          'https://www.youtube.com/watch?v=2G8MMMn6Nq4',
          'https://www.youtube.com/watch?v=t4DX-kUDVLM',
          'https://www.youtube.com/watch?v=41o5QeG-E_Y',
          'https://www.youtube.com/watch?v=4RcFPLt3Dd0',
          'https://www.youtube.com/watch?v=zfYfvXTydGg',
          'https://www.youtube.com/watch?v=v-QD7vaHQgY',
          'https://www.youtube.com/watch?v=vqRWMDv0r78',
          //////// sebastians musik ////////
          'https://www.youtube.com/watch?v=h25INlZxmwQ',
          'https://www.youtube.com/watch?v=9SzKl38nWQk',
          'https://www.youtube.com/watch?v=AHVZ1TLaZDE',
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

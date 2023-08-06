<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('bulletinboard_headline') }}</h4>

    <h5>
      {{ $t('bulletinboard_description') }}
    </h5>
    <div class="q-mb-md">
      <q-btn
        class="float-right"
        color="primary"
        text-color="secondary"
        :label="$t('shuffle')"
        icon="shuffle"
        @click="() => (shoutouts = randomize(shoutouts))"
      />
    </div>

    <shoutout-component
      :shoutouts="reverseByID(shoutouts)"
    ></shoutout-component>

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
import { Shoutout } from 'components/models';
import ShoutoutComponent from 'components/ShoutoutComponent.vue';
import { defineComponent, ref } from 'vue';
import shoutoutData from 'src/assets/data/bulletinboardpage.json';
// =============
// const shoutoutData: Shoutout[] = (await import('src/assets/data/bulletinboardpage.json'))
//   .default;
// =============
// let shoutoutData: Shoutout[];
// const loadShoutoutData = async () => {
//   shoutoutData = (await import('src/assets/data/bulletinboardpage.json'))
//     .default;
// };
// loadShoutoutData();
// =============
// let shoutoutData: Shoutout[];
// import('src/assets/data/bulletinboardpage.json')
//   .then((data) => {
//     shoutoutData = data;
//   })
//   .catch(() => {
//     console.log('failed loading bbp data');
//   });

// TODO:
// fairphone
// malala fund?
// wetalk?
// https://80000hours.org/
// brilliant.org ?
// nebula streaming?
// MIT Free Open Online Course
// leap
// https://www.wren.co/
// able gamer foundation
// https://www.openphilanthropy.org/?

export default defineComponent({
  name: 'BulletinBoardPage',
  components: { ShoutoutComponent },
  data() {
    return {
      shoutouts: ref<Shoutout[]>(shoutoutData),
    };
  },
  methods: {
    randomize: function (obj: Array<Shoutout>): Array<Shoutout> {
      return obj.sort(function () {
        return 0.5 - Math.random();
      });
    },
    reverseByID: function (obj: Array<Shoutout>): Array<Shoutout> {
      let revObj = [];
      for (let i = obj.length - 1; i >= 0; i--) {
        revObj[revObj.length] = obj[i];
      }
      return revObj;
    },
  },
});
</script>

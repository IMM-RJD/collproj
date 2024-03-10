<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('bulletinboard_headline') }}</h4>

    <h5>
      {{ $t('bulletinboard_description') }}
    </h5>

    <q-btn
      class="float-right q-mb-lg"
      color="primary"
      text-color="secondary"
      :label="$t('shuffle')"
      icon="shuffle"
      @click="() => randomize(shoutouts)"
    />
    <q-toggle
      v-model="modelCitizenscience"
      class="q-mb-lg"
      :label="$t('citizenscience')"
      left-label
      @update:model-value="
        (val, evt) => {
          shoutoutFilter[0].citizenscience = modelCitizenscience;
          shoutouts = filterShoutout(shoutoutFilter);
        }
      "
    />

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
import { Shoutout, ShoutoutFilter } from 'components/models';
import ShoutoutComponent from 'components/ShoutoutComponent.vue';
import { defineComponent, ref } from 'vue';
import shoutoutData from 'src/assets/data/bulletinboard.json';
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
// https://www.keychange.eu/ | https://www.reeperbahnfestival.com/de/keychange
// brilliant.org ?
// nebula streaming?
// MIT Free Open Online Course
// https://www.wren.co/
// able gamer foundation
// https://www.openphilanthropy.org/?
/**
 * TODO:
 * - wrap personComp in skeleton (+testing slow bandwidth)
 * - diff font-size (acc) - alles in rem und dann einfach --calc mit einer variable
 * - themeing
 */

export default defineComponent({
  name: 'BulletinBoardPage',
  components: { ShoutoutComponent },
  setup() {
    return {
      modelCitizenscience: ref(false),
    };
  },
  data() {
    return {
      shoutouts: ref<Shoutout[]>(shoutoutData),
      shoutoutFilter: ref<ShoutoutFilter[]>([{ citizenscience: false }]),
    };
  },
  methods: {
    filterShoutout: function (filter: Array<ShoutoutFilter>) {
      let shoutouts = shoutoutData;
      if (filter[0].citizenscience == false) {
        return shoutouts;
      } else {
        let newShoutouts = [];
        for (let i = 0; i < shoutouts.length; i++) {
          if (
            filter[0].citizenscience == true &&
            shoutouts[i].filter?.citizenscience !== undefined &&
            shoutouts[i].filter?.citizenscience !== false
          ) {
            newShoutouts.push(shoutouts[i]);
          }
        }
        return newShoutouts;
      }
    },
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

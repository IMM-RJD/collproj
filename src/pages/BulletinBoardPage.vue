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

    <q-btn
      color="secondary"
      round
      dense
      :icon="filterExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
      @click="filterExpanded = !filterExpanded"
    />
    <q-slide-transition class="q-mb-lg">
      <div v-show="filterExpanded">
        <q-toggle
          v-model="modelFCitizenscience"
          class="q-pt-md"
          :label="$t('citizenscience')"
          left-label
          @update:model-value="
            (val, evt) => {
              filterShoutout[0].citizenscience = modelFCitizenscience;
              filter(shoutouts, filterShoutout, $i18n.locale);
            }
          "
        />
        <q-input
          v-model="modelFSearch"
          class="q-pt-none q-pb-lg"
          debounce="300"
          clearable
          clear-icon="close"
          @update:model-value="
            (value) => {
              if (value === null) {
                modelFSearch = '';
              }
              filterShoutout[0].text = modelFSearch;
              filter(shoutouts, filterShoutout, $i18n.locale);
            }
          "
        >
          <template #append>
            <q-icon class="q-ml-xs" name="search" />
          </template>
        </q-input></div
    ></q-slide-transition>

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
import { Shoutout, FilterShoutout } from 'components/models';
import ShoutoutComponent from 'components/ShoutoutComponent.vue';
import { defineComponent, ref } from 'vue';
import shoutoutData from 'src/assets/data/bulletinboard.json';
import { useI18n } from 'vue-i18n';
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
      modelFCitizenscience: ref(false),
      modelFSearch: ref(''),
      filterExpanded: ref(false),
    };
  },
  data() {
    return {
      shoutouts: ref<Shoutout[]>(shoutoutData),
      filterShoutout: ref<FilterShoutout[]>([
        { text: '', citizenscience: false },
      ]),
    };
  },
  methods: {
    filter: function (
      shoutouts: Array<Shoutout>,
      filterShoutout: Array<FilterShoutout>,
      locale: string
    ) {
      let getTitle = function (shoutout: Shoutout, locale: string): string {
        return locale === 'en-US'
          ? shoutout.title.en
          : locale === 'de'
          ? shoutout.title.de
          : 'missing title';
      };
      for (let i = 0; i < shoutouts.length; i++) {
        // no filter
        if (
          filterShoutout[0].citizenscience == false &&
          filterShoutout[0].text == ''
        ) {
          shoutouts[i].filter.visibility = 'visible';
          continue;
        }
        //// filter
        // citizenscience
        else if (
          filterShoutout[0].citizenscience == true &&
          shoutouts[i].filter?.citizenscience !== undefined &&
          shoutouts[i].filter?.citizenscience !== false
        ) {
          shoutouts[i].filter.visibility = 'visible';
        } // search
        else if (
          filterShoutout[0].text !== '' &&
          // case insensitive
          getTitle(shoutouts[i], locale)
            .toLocaleLowerCase()
            .indexOf(filterShoutout[0].text.toLocaleLowerCase()) >= 0
        ) {
          shoutouts[i].filter.visibility = 'visible';
        } else {
          shoutouts[i].filter.visibility = 'hidden';
        }
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

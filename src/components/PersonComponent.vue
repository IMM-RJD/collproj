<style lang="scss">
.imm-person-card {
  width: 300px;
  display: flex;
  flex-flow: column;
  transition: all 0.2s;
  &:hover {
    transform: scale(0.98) translateZ(0) perspective(1px);
    filter: blur(0px);
    opacity: 1;
  }
  > .content-wrapper {
    flex-grow: 10000;
    display: flex;
    flex-direction: column;
    > .content-description {
      flex-grow: 1;
      white-space: pre-line;
    }
  }
}
@media (min-width: $breakpoint-md-min) {
  .imm-person-card {
    filter: blur(15px);
    opacity: 0.6;
  }
}
</style>
<template>
  <div
    class="q-pa-md fit row wrap justify-evenly items-stretch content-start q-gutter-lg"
  >
    <q-card
      v-for="person in persons"
      :key="person.id"
      class="bg-secondary text-white imm-person-card"
    >
      <q-img
        width="100%"
        height="250px"
        fit="cover"
        :position="person.imgPosition || '50% 50%'"
        loading="lazy"
        :src="person.imgSrc"
      ></q-img>
      <div class="q-pb-none content-wrapper">
        <q-card-section class="q-pb-xs">
          <div class="text-h6">
            {{ person.firstName }} {{ person.lastName }}
          </div>
          <div class="text-subtitle2">{{ person.role }}</div>
        </q-card-section>

        <q-card-section class="content-description">
          {{ person.description }}
        </q-card-section>

        <q-separator
          dark
          v-show="
            person.phone || person.email || person.homepage || person.instagram
          "
        />
        <q-card-actions
          vertical
          class="q-pb-none q-pt-md"
          v-show="person.phone || person.email || person.homepage"
        >
          <q-btn
            v-show="person.phone"
            unelevated
            class="q-mb-sm"
            :no-caps="true"
            align="left"
            type="a"
            :href="'tel:' + person.phone?.replaceAll(' ', '')"
            icon="fa-solid fa-phone"
            :label="person.phone"
          ></q-btn>
          <q-btn
            v-show="person.email"
            flat
            unelevated
            class="q-mb-sm imm-ml-0-important"
            :no-caps="true"
            align="left"
            type="a"
            :href="'mailto:' + person.email"
            icon="fa-solid fa-envelope"
            :label="person.email"
          ></q-btn>
          <q-btn
            v-show="person.homepage"
            unelevated
            class="q-mb-sm"
            :no-caps="true"
            align="left"
            type="a"
            :href="person.homepage"
            target="_blank"
            icon="fa-solid fa-share"
            :label="person.homepageText || person.homepage"
          ></q-btn>
        </q-card-actions>
        <q-card-actions
          v-if="
            person.facebook ||
            person.instagram ||
            person.youtube ||
            person.soundcloud
          "
          align="evenly"
        >
          <q-btn
            v-for="so in person.socialOrder?.replaceAll(' ', '').split(',')"
            :key="so"
            unelevated
            :no-caps="true"
            align="left"
            type="a"
            :href="
              so == 'facebook'
                ? 'https://www.facebook.com/' + person.facebook
                : so == 'instagram'
                ? 'https://www.instagram.com/' + person.instagram
                : so == 'youtube'
                ? 'https://www.youtube.com/' + person.youtube
                : so == 'soundcloud'
                ? 'https://www.soundcloud.com/' + person.soundcloud
                : ''
            "
            target="_blank"
            :icon="'fa-brands fa-' + so"
          ></q-btn>
        </q-card-actions>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Person } from './models';
export default defineComponent({
  name: 'PersonComponent',
  props: {
    persons: {
      type: Array as PropType<Person[]>,
      default: () => [],
    },
  },
  setup() {
    return {};
  },
});
</script>

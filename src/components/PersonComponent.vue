<template>
  <div
    class="q-pa-md fit row wrap justify-evenly items-start content-start q-gutter-lg"
  >
    <div v-for="person in persons" :key="person.id">
      <q-card class="bg-secondary text-white imm-person-card">
        <q-img
          width="100%"
          height="250px"
          class=""
          fit="fill"
          :src="person.imgSrc"
        ></q-img>
        <div class="q-pb-none">
          <q-card-section class="q-pb-xs">
            <div class="text-h6">
              {{ person.firstName }} {{ person.lastName }}
            </div>
            <div class="text-subtitle2">{{ person.role }}</div>
          </q-card-section>

          <q-card-section>
            {{ person.description }}
          </q-card-section>

          <q-separator dark />

          <q-card-actions vertical class="q-pb-none q-pt-md">
            <q-btn
              unelevated
              class="q-mb-sm"
              :no-caps="true"
              align="left"
              type="a"
              :href="'tel:' + person.phone"
              icon="fa-solid fa-phone"
              :label="person.phone"
            ></q-btn>
            <q-btn
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
          </q-card-actions>
        </div>
      </q-card>
    </div>
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

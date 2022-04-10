<template>
  <!-- https://youtu.be/zas-tasp1ds?t=90 -->

  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      :mini="miniStateLeft"
      @mouseover="miniStateLeft = false"
      @mouseout="miniStateLeft = true"
      :width="220"
      :breakpoint="500"
      v-model="leftDrawerOpen"
      side="left"
      bordered
    >
      <!-- drawer content -->
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item clickable v-ripple to="/team">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section> Team </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/concept">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-ambulance" />
            </q-item-section>

            <q-item-section> Konzept </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/events">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-calendar" />
            </q-item-section>

            <q-item-section> Termine & aktuelles </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/projects">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-fan" />
            </q-item-section>

            <q-item-section> Projekte </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/contact">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-mail" />
            </q-item-section>

            <q-item-section> Kontakt </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/partner">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-fan" />
            </q-item-section>

            <q-item-section> Partner </q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/impressum">
            <q-item-section avatar>
              <q-icon name="draft" />
            </q-item-section>

            <q-item-section> Impressum </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white">
      <div>
        <div
          class="full-width row wrap justify-evenly items-start content-start q-py-lg"
        >
          <q-btn flat unelevated padding="md"
            ><q-img
              width="40px"
              height="40px"
              fit="contain"
              src="https://picsum.photos/40/40"
            ></q-img
          ></q-btn>
          <q-btn flat unelevated padding="md"
            ><q-img
              width="40px"
              height="40px"
              fit="contain"
              src="https://picsum.photos/40/40"
            ></q-img></q-btn
          ><q-btn flat unelevated padding="md"
            ><q-img
              width="40px"
              height="40px"
              fit="contain"
              src="https://picsum.photos/40/40"
            ></q-img></q-btn
          ><q-btn flat unelevated padding="md"
            ><q-img
              width="40px"
              height="40px"
              fit="contain"
              src="https://picsum.photos/40/40"
            ></q-img
          ></q-btn>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      miniStateLeft: ref(true),
      miniState: ref(true),
    };
  },
};
</script>

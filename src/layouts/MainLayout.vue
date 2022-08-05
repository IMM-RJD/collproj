<template>
  <!-- Hello and welcome my dear dev friend to quasar https://youtu.be/zas-tasp1ds?t=90 -->

  <q-layout view="hHh LpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar class="q-py-md">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <a class="imm-banner-logo" href="/"
          ><img src="src/assets/name.jpg" alt=""
        /></a>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="km-background"
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
              <q-icon name="fa-solid fa-people-group" />
            </q-item-section>

            <q-item-section> Team </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/concept">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-shield-heart" />
            </q-item-section>

            <q-item-section> Konzept </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/events">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-calendar-days" />
            </q-item-section>

            <q-item-section> Termine & Aktuelles </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/projects">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-shield-virus" />
            </q-item-section>

            <q-item-section> Projekte </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/contact">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-envelope" />
            </q-item-section>

            <q-item-section> Kontakt </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/partner">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-children" />
            </q-item-section>

            <q-item-section> Förderer & Partner</q-item-section>
          </q-item>

          <q-separator />

          <q-item clickable v-ripple to="/impressum">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-child" />
            </q-item-section>

            <q-item-section> Impressum </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-primary text-white q-py-xs">
      <div
        class="full-width row wrap justify-evenly items-start content-start q-py-xs"
      >
        <q-btn
          flat
          unelevated
          size="1rem"
          padding="10px"
          icon="fa-brands fa-facebook-f"
          href="https://www.facebook.com/kollektivmehrklang"
          target="_blank"
        >
        </q-btn>
        <q-btn
          flat
          unelevated
          size="1rem"
          padding="10px"
          icon="fa-brands fa-instagram"
          href="https://www.instagram.com/kollektiv_mehrklang"
          target="_blank"
        >
        </q-btn>
        <q-btn
          flat
          unelevated
          size="27px"
          dense
          padding="0px"
          icon="img:src/assets/logo.png"
          to="/"
        >
        </q-btn>
        <q-btn
          flat
          unelevated
          size="1rem"
          padding="10px"
          icon="fa-brands fa-youtube"
          to=""
          disable
        >
        </q-btn>
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

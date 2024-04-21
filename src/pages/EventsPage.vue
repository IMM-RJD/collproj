<template>
  <q-page padding class="q-px-md spring-wrapper">
    <div class="spring-ripple-background">
      <div class="spring-circle spring-xxlarge spring-shade1"></div>
      <div class="spring-circle spring-xlarge spring-shade2"></div>
      <div class="spring-circle spring-large spring-shade3"></div>
      <div class="spring-circle spring-mediun spring-shade4"></div>
      <div class="spring-circle spring-small spring-shade5"></div>
    </div>
    <!-- <h4 class="q-my-lg q-ml-md" style="color: white">
      {{ $t('event_headline') }}
    </h4> -->
    <q-img
      class="q-mt-md q-ml-lg rounded-borders"
      width="350px"
      height="500px"
      fit="fill"
      loading="lazy"
      src="src/assets/events/arttower.jpeg"
    ></q-img>
    <!-- <h5 class="q-my-lg q-ml-md q-mt-lg" style="color: white">
      {{ $t('event_headline_others') }}
    </h5> -->
    <!-- <div class="q-my-lg q-ml-md" style="color: white">
      <h6 class="q-my-none" style="color: #355852">∞Shahab Amin∞</h6>
      <q-btn
        unelevated
        :no-caps="true"
        align="left"
        type="a"
        href="https://soundcloud.com/shahab-amin-6129446"
        target="_blank"
        icon="fa-brands fa-soundcloud"
      ></q-btn>

      <div class="q-mt-md rounded-borders">
        <a
          href="https://www.facebook.com/photo/?fbid=971062761689515&set=gm.1074735293833530"
          target="_blank"
        >
          <q-img
            width="350px"
            height="500px"
            fit="fill"
            loading="lazy"
            src="src/assets/event/shahab.jpg"
          ></q-img>
        </a>
      </div>
    </div> -->

    <!-- <q-btn
      :label="$t('Team')"
      to="/team"
      icon="fa-solid fa-people-group"
      color="primary"
      class="q-py-md"
    />
    <q-space class="q-py-md"></q-space>
    <q-btn
      :label="$t('BulletinBoard')"
      to="/bulletinboard"
      icon="fa-solid fa-globe"
      color="secondary"
      class="q-py-md"
    />
    <q-space class="q-py-md"></q-space>
    <q-btn
      :label="$t('Mehr_klang')"
      to="/music"
      icon="fa-solid fa-music"
      color="primary"
      class="q-py-md"
    /> -->

    <!-- <h5 style="color: #d46643" class="q-mb-md">
      {{ $t('event_event2_title') }}
    </h5>
    <q-video src="https://www.youtube.com/embed/gwcd96MDOnM"></q-video>
    <p class="q-mt-sm">
      {{ $t('event_event2_description') }}
    </p>
    <q-btn
      flat
      icon="fa-solid fa-share"
      type="a"
      style="color: #d46643"
      no-caps
      align="left"
      target="_blank"
      href="https://www.loversoftheuniverse.com/danceofthegods"
      :label="$t('visitHomepage')"
    ></q-btn> -->
    <div style="height: 50px; width: 100%"></div>
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EventsPage',
  setup() {
    return {};
  },
});
</script>

<style>
/* https://codepen.io/vaibhavarora/pen/xmpxjp */
.spring-wrapper {
  background: #d74b13;
  overflow: hidden;
}
.spring-circle {
  position: absolute;
  border-radius: 50%;
  background: rgb(246, 240, 152);
  animation: spring-ripple 15s infinite;
  box-shadow: 0px 0px 1px 0px #d74b13;
}
.spring-small {
  width: 200px;
  height: 200px;
  left: -100px;
  bottom: -100px;
}
.spring-medium {
  width: 400px;
  height: 400px;
  left: -200px;
  bottom: -200px;
}
.spring-large {
  width: 600px;
  height: 600px;
  left: -300px;
  bottom: -300px;
}
.spring-xlarge {
  width: 800px;
  height: 800px;
  left: -400px;
  bottom: -400px;
}
.spring-xxlarge {
  width: 1000px;
  height: 1000px;
  left: -500px;
  bottom: -500px;
}
.spring-shade1 {
  opacity: 0.2;
}
.spring-shade2 {
  opacity: 0.5;
}
.spring-shade3 {
  opacity: 0.7;
}
.spring-shade4 {
  opacity: 0.8;
}
.spring-shade5 {
  opacity: 0.9;
}
@keyframes spring-ripple {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8);
  }
}
</style>

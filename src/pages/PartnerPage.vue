<template>
  <q-page padding class="q-mx-md">
    <h4 class="q-my-lg">{{ $t('partner_sponsor') }}</h4>

    <div class="fit row wrap justify-around items-start content-start">
      <div class="q-ma-md">
        <a href="https://www.trier.de/" target="_blank">
          <q-img
            width="200px"
            loading="lazy"
            src="src/assets/partner/stadttrier.png"
          ></q-img>
        </a>
      </div>
      <div class="q-ma-md">
        <a href="https://www.kulturspektrum-trier.de/" target="_blank">
          <q-img
            width="200px"
            loading="lazy"
            src="src/assets/partner/kulturspektrum.png"
          ></q-img>
        </a>
      </div>
      <div class="q-ma-md">
        <a
          href="https://www.sparkassenstiftungen.de/stiftungen/kulturstiftung-sparkasse-trier/stiftungs-startseite/"
          target="_blank"
        >
          <q-img
            width="200px"
            loading="lazy"
            src="src/assets/partner/kulturstiftungsparkassetrier.png"
          ></q-img>
        </a>
      </div>
      <div class="q-ma-md" style="background-color: #999a8f">
        <a href="https://www.stiftung-rehkids.de" target="_blank">
          <q-img
            width="200px"
            height="100px"
            loading="lazy"
            src="src/assets/partner/rehkids.png"
          ></q-img>
        </a>
      </div>
    </div>
    <h4 class="q-my-lg">{{ $t('partner_partner') }}</h4>
    <div class="fit row wrap justify-around items-start content-start">
      <div class="q-ma-md">
        <a href="https://taw-trier.de/" target="_blank">
          <q-img
            width="200px"
            height="90px"
            loading="lazy"
            src="src/assets/partner/taw.png"
          ></q-img>
        </a>
      </div>
    </div>
    <div
      class="q-ma-lg"
      style="display: inline-block; font-size: 25px; font-style: bold"
    >
      Kunsthaus "Alte Druckerei" Trier
    </div>
    <div
      class="q-ma-lg"
      style="display: inline-block; font-size: 25px; font-style: bold"
    >
      Seniorenbüro Trier
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

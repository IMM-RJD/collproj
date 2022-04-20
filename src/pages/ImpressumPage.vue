<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h3>Impressum</h3>

    <!-- <div class="q-mb-xs">Verein e.V.</div> -->
    <div class="q-mb-xs">Jessica Mans</div>
    <!-- <div class="q-mb-xs">Titel? Bachelor Arts</div> -->
    <div class="q-mb-xs">Alkuinstr. 35</div>
    <div class="q-mb-md">54292 Trier</div>

    <q-btn
      flat
      dense
      unelevated
      class="q-mb-md"
      :no-caps="true"
      type="a"
      href="tel:015236374804"
      icon="fa-solid fa-phone"
      label="015236374804"
    ></q-btn
    ><br />
    <q-btn
      flat
      dense
      unelevated
      class="q-mb-md"
      :no-caps="true"
      type="a"
      href="mailto:jessica.mans@gmx.de"
      icon="fa-solid fa-envelope"
      label="jessica.mans@gmx.de"
    ></q-btn>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<template>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <h3>Impressum</h3>

    <div class="q-mb-xs">Verein e.V.</div>
    <div class="q-mb-xs">Vorname Nachname</div>
    <div class="q-mb-xs">Titel? Bachelor Arts</div>
    <div class="q-mb-xs">strase 85</div>
    <div class="q-mb-md">54290 Trier</div>

    <q-btn
      flat
      dense
      unelevated
      class="q-mb-md"
      :no-caps="true"
      type="a"
      href="tel:123456"
      icon="fa-solid fa-phone"
      label="123456"
    ></q-btn
    ><br />
    <q-btn
      flat
      dense
      unelevated
      class="q-mb-md"
      :no-caps="true"
      type="a"
      href="mailto:something@else.com"
      icon="fa-solid fa-envelope"
      label="Something@else.com"
    ></q-btn>

    <br /><br /><span>Eintragung im RegisterXY / Registernumer...</span>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

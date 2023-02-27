<template>
  <q-img width="100%" loading="lazy" src="src/assets/team/team.jpg"></q-img>
  <q-page padding class="q-mx-md">
    <!-- content -->
    <!-- <q-img
      rounded
      width="100%"
      height="300px"
      fit="cover"
      src="https://picsum.photos/1200/800"
    ></q-img> -->

    <h4 class="q-my-lg">{{ $t('concept_headline') }}</h4>

    <p>
      {{ $t('concept_p_first') }}
    </p>
    <p>
      {{ $t('concept_p_second') }}
    </p>
    <p>{{ $t('concept_p_third') }}</p>

    <q-img width="100%" loading="lazy" src="src/assets/logo.png"></q-img>
    <q-btn
      href="http://www.cornify.com"
      icon="?0"
      flat
      dense
      size="xs"
      @click="dothecorni"
    ></q-btn>
  </q-page>
</template>

<script>
export default {
  setup() {
    function dothecorni(e) {
      e.preventDefault();
      cornify_add();
      return false;
    }

    return { dothecorni };
  },
};
</script>

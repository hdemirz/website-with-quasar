<!--
Forked from:
https://quasar.dev/vue-components/carousel#example--fullscreen
-->
<template>
 <q-btn
 style="margin-left: 750px;"
    class="custom-button"
    v-bind="$attrs"
    @click="handleClick"
  >
   Outdoor Trail Ve Ayakkabi
  </q-btn>
  </template>

<script>
export default {
  name: 'MyButton',
  props: {
    // Gerekli diğer props'ları buraya ekleyin, eğer varsa
  },
  methods: {
    handleClick() {
      // Tıklama işlemleri
    }
  }
}
</script>

<style scoped>
.custom-button {
  color: red; /* Yazı rengini siyah yap */
  background-color: transparent;
  border: 2px solid #f00;
  padding: 20px 40px; /* İstediğiniz boyutları ayarlayabilirsiniz */
  font-size: 18px; /* İstediğiniz boyutları ayarlayabilirsiniz */
}

.custom-button:hover {
  border-width: 4px; /* Hover durumunda kenar kalınlığını artırın */
  padding: 20px 40px; /* İstediğiniz boyutları ayarlayabilirsiniz */
  font-size: 18px; /* İstediğiniz boyutları ayarlayabilirsiniz */
}
</style>

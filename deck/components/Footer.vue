<script setup lang="ts">
import Bluesky from './Bluesky.vue';
import LinkedIn from './LinkedIn.vue';
import Twitter from './Twitter.vue';

</script>

<template>
  <div>
    <p>Linda Thompson</p>
    <p><Twitter /> @lindakatcodes</p>
    <p><Bluesky /> @lindakat.com</p>
    <p><LinkedIn /> in/lindakatcodes</p>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  justify-items: center;
  inline-size: calc(100% / var(--slidev-slide-zoom-scale));
  position: absolute;
  bottom: -6px;
  left: 0;
  font-size: 0.875rem;
  text-align: center;
}

p {
  display: flex;
  gap: 0.5rem;
}
</style>

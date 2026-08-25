<template>
  <div>
    <p>Linda Thompson</p>
    <p>@lindakatcodes</p>
    <p>@lindakat.com</p>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  inline-size: calc(100% / var(--slidev-slide-zoom-scale));
  position: absolute;
  bottom: -6px;
  left: 0;
  font-size: 0.875rem;
  text-align: center;
}
</style>

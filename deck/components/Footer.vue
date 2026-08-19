<template>
  <div>
    <p>Linda Thompson</p>
    <p>♮</p>
    <p>@lindakatcodes</p>
    <p>♮</p>
    <p>@lindakat.com</p>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 0.25fr 1fr 0.25fr 1fr;
  grid-template-rows: 1fr;
  inline-size: calc(100% / var(--slidev-slide-zoom-scale));
  position: absolute;
  bottom: -6px;
  left: 0;
  font-size: 0.875rem;
  text-align: center;
}
</style>

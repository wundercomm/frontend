<template>
  <div>
    <the-navbar />
    <slot></slot>
  </div>
</template>

<script>
    import TheNavbar from "@/components/TheNavbar.vue";
    export default {
        components: {
            TheNavbar,
        }
    }
</script>

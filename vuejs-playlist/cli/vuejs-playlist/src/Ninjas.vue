<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {

  data () {
    return {
     ninjas: ['Naruto', 'Rock Lee', 'John Cena']
    }
  }
}
</script>

<style>

</style>

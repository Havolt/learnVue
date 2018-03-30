<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
    <div>{{ myMessage }}</div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      title: 'My First Vue File',
      myMessage: 'My own bit of work'
    }
  },
  methods: {
    greeting: function(){
      return 'Finally gettin to grips with some cli';
    }
  }
}
</script>

<style>

</style>

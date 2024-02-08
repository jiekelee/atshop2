<template>
  <div>
    <h1>{{ str }}</h1>

  </div>
</template>

<script setup lang="ts" name="App">

let str="this is test str";
console.log(str);

</script>

<style lang="scss" scoped>
h1{
  background: skyblue;
}

</style>
<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <Draggable/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Draggable from "./components/Draggable";

export default {
  name: "App",
  components: {
    HelloWorld,
    Draggable
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

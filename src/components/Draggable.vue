<template>
  <div id="draggable">
    <div id="container" draggable="true" @drop="dropHandler" @dragover="dragoverHandler">
      <div id="draggable-content" draggable="true" @dragstart="dragstartHandler"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Draggable",
    data: function () {
      return {
      };
    },
    methods: {
      dragstartHandler: function (ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      },

      dropHandler: function (ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("text");

        console.log(data)
      },

      dragoverHandler: function (ev) {
        ev.preventDefault();
      }
    }
  };
</script>

<style lang="less" scoped>
  #container {
    margin-left: 100px;
    margin-top: 100px;
    width: 200px;
    height: 200px;
    border: 1px solid #f00;
    overflow: scroll;
  }

  #draggable-content {
    /* width: 100px; */
    /* height: 100px; */
    width: 300px;
    height: 300px;
    background: rgba(0, 0, 0, .1);
  }
</style>
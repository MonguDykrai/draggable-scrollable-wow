<template>
  <div id="draggable">
    <div id="container" @drop="dropHandler" @dragover="dragoverHandler">
      <div id="draggable-content" draggable="true" @dragstart="dragstartHandler"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Draggable",
  methods: {
    dragstartHandler: function(ev) {
      console.log(ev);
      console.log(
        "dragStart: dropEffect = " +
          ev.dataTransfer.dropEffect +
          " ; effectAllowed = " +
          ev.dataTransfer.effectAllowed
      );

      // Add this element's id to the drag payload so the drop handler will
      // know which element to add to its tree
      ev.dataTransfer.setData("text", ev.target.id);
      console.log(ev);
      ev.dataTransfer.effectAllowed = "move";
    },

    dropHandler: function(ev) {
      console.log(ev);
      console.log(
        "drop: dropEffect = " +
          ev.dataTransfer.dropEffect +
          " ; effectAllowed = " +
          ev.dataTransfer.effectAllowed
      );
      ev.preventDefault();

      // Get the id of the target and add the moved element to the target's DOM
      var data = ev.dataTransfer.getData("text");
      console.log(this.$util.toString(data));
      console.log(this.$util.getEleById(data));
      const childNode = this.$util.getEleById(data);
      console.error(ev.target);
      // ev.target.appendChild(document.getElementById(data));
      ev.target.appendChild(childNode);
    },

    dragoverHandler: function(ev) {
      console.log(ev);
      console.log(
        "dragOver: dropEffect = " +
          ev.dataTransfer.dropEffect +
          " ; effectAllowed = " +
          ev.dataTransfer.effectAllowed
      );
      ev.preventDefault();
      // Set the dropEffect to move
      ev.dataTransfer.dropEffect = "move";
    }
  }
};
</script>

<style lang="less" scoped>
#container {
  width: 200px;
  height: 200px;
  border: 1px solid #f00;
}

#draggable-content {
  width: 100px;
  height: 100px;
  background: #000;
}
</style>



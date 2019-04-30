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
    data: function () {
      return {
        offsetX: 0,
        offsetY: 0
      };
    },
    methods: {
      dragstartHandler: function (ev) {
        // console.log(ev);
        this.offsetX = ev.offsetX; // 鼠标指针相对于被点击的元素的 x 轴偏移值
        this.offsetY = ev.offsetY;
        // console.log(`this.offsetX: ${this.offsetX}`)
        // console.log(`this.offsetY: ${this.offsetY}`)
        ev.dataTransfer.setData("text", ev.target.id);
      },

      dropHandler: function (ev) {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("text");
        // console.log(ev);
        // console.log(ev.offsetX - this.offsetX);
        // console.log(ev.offsetY - this.offsetY);
        let offsetX = ev.offsetX - this.offsetX;
        let offsetY = ev.offsetY - this.offsetY;
        console.log(`offsetX: ${offsetX}`)
        console.log(`offsetY: ${offsetY}`)
        console.log(`data: ${data}`)

        if (offsetX <= -100) {
          offsetX = -100;
        }

        if (offsetX >= 0) {
          offsetX = 0;
        }

        if (offsetY <= -100) {
          offsetY = -100;
        }

        if (offsetY >= 0) {
          offsetY = 0;
        }

        ev.target.scrollTop = -offsetY;
        ev.target.scrollLeft = -offsetX;

        const nodeDraggableContent = this.$util.getEleById(data)
        // console.log(nodeDraggableContent)
        nodeDraggableContent.style.transform = `translate(${offsetX}px, ${offsetY}px)`
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
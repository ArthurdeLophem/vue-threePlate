<script>
import threeModel from "../scripts/three.js";

const generateCanvas = () => {
    const threeViewport = document.querySelector(".threeViewport")
    const three = new threeModel(threeViewport);
    three.createScene();
}

export default {
    mounted() {
        generateCanvas()
    }
}
</script>

<template>
    <div class="threeViewport"></div>
</template>
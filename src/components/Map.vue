<template>
  <div class="mapView">
    <div id="viewDiv"></div>
  </div>
</template>

<script>
import { provide, onMounted } from 'vue'
import Map from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'
export default {
  name: 'MapView',
  props: {
    msg: String
  },
  setup () {
    const map = new Map({
      basemap: 'topo-vector'
      // ground: 'world-elevation'
    })

    const view = new SceneView({
      map: map,
      //   spatialReference: {
      //     wkid: 4490
      //   },
      camera: {
        heading: 58.62, // face due east
        tilt: 72.94, // looking from a bird's eye view
        fov: 55,
        position: {
          latitude: 31.119977982,
          longitude: 120.564301822,
          z: 875.5
        }
      },
      center: [120, 30],
      zoom: 8,
      extent: {
        xmin: 120.0,
        ymin: 30.0,
        xmax: 121.64307457631968,
        ymax: 32,
        spatialReference: {
          wkid: 4490
        }
      },
      viewingMode: 'global' // local
    })
    provide('view', view) // 此处是为了让view能够跨组件通信，
    // 后代组件只需要通过 const view = inject('view')来获取到view，然后进行操作
    onMounted(() => {
      view.container = 'viewDiv' // 初始化页面完成后，再把viewDiv给到view.container，
      // 这里运用的很巧妙，如果把view声明也放到这里面，则跨组件通信会有延迟，很难解决
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.MapView {
  width: 100%;
  height: 100%;
}
#viewDiv {
  width: 100%;
  height: 100vh;
}
</style>

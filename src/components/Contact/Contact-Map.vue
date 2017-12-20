<template>
  <div id="map">
      </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Contact-Map",
  mounted: function() {
    this.initMap();
  },
  methods: {
    initMap: function() {
      this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 41.50652, lng:  -81.672363},
            scrollwheel: false,
            zoom: 4
            })
    }
  }
};
</script>

<style>

</style>

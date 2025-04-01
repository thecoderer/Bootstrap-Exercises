var map = tt.map({
  key: "aaPCLRYtBzfDIGcXpGylZHLbbTfCXOx2",
  container: "map",
  center: [28.999999, 40.999],
  zoom: 10
})
map.on('load', () => {
  new tt.Maker().setLngLat(center).addTo(map)
})

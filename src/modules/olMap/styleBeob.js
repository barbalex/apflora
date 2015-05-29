// steuert den style von Beob
// selected: mit der Maus oder drag_box markierte

'use strict'

var ol = require('ol')

module.exports = function (feature, resolution, selected) {
  var icon = selected ? 'img/flora_icon_blau.png' : 'img/flora_icon_violett.png',
    imageStyle,
    style

  imageStyle = new ol.style.Icon( /** @type {olx.style.IconOptions} */ ({
    anchor: [0.5, 35],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    opacity: 0.8,
    src: icon
  }))

  style = new ol.style.Style({
    image: imageStyle
  })

  return [style]
}

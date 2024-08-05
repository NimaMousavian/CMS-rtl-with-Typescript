import L from "leaflet";

const icon3D = new L.Icon({
  iconUrl: require("../icons/3d-pin-map-marker.png"),
  iconRetinaUrl: require("../icons/3d-pin-map-marker.png"),
  iconAnchor: [20, 45],
  popupAnchor: [20, -0],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [40, 40],
  shadowAnchor: [15, 40],
  iconSize: new L.Point(40, 45),
});

export { iconPerson, icon3D };

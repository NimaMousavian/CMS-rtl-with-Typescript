import * as turf from "@turf/turf";

// const isMarkerInPolygon = (markerPosition, polygonCoords) => {
//   const polygon = L.polygon(polygonCoords);
//   console.log(polygon);

//   return polygon.getBounds().contains(L.latLng(markerPosition));
// };

const isMarkerInPolygon = (markerPosition, polygonCoords) => {
  //   console.log(markerPosition);
  //   console.log([polygonCoords]);
  const p = [];
  p.push(polygonCoords);
  p[0].push(polygonCoords[0]);
  const point = turf.point(markerPosition);
  const polygon = turf.polygon(p);
  return turf.booleanPointInPolygon(point, polygon);
};

export default isMarkerInPolygon;

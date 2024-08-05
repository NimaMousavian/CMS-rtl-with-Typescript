import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { icon3D } from "../utils/personIcon";
import { Popup } from "react-leaflet";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@mui/material";

// L.Marker.prototype.options.icon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
// });

export default function Routing() {
  const map = useMap();
  var customOptions = {
    maxWidth: "400",
    width: "300",
  };

  useEffect(() => {
    if (map === null) return;
    else {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(51.74, -0.34),
          L.latLng(51.6792, -0.35),
          L.latLng(51.681, -0.31288),
          L.latLng(51.671, -0.234),
          L.latLng(51.671, -0.2123),
          L.latLng(51.675, -0.19654),
          L.latLng(51.668, -0.1732),
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: "green", opacity: 1, weight: 5 }],
        },
        createMarker: function (i, waypoint, n) {
          // console.log("m ;", m, N);
          const marker = L.marker(waypoint.latLng, {
            draggable: false,
            bounceOnAdd: false,
            bounceOnAddOptions: {
              duration: 1000,
              height: 800,
            },
          }).bindPopup(
            ReactDOMServer.renderToString(
              <div
                className="text-primary-main text-lg flex flex-col min-w-24"
                style={{ fontFamily: "Yekan-Bakh" }}
              >
                <div className="flex flex-row justify-start items-center">
                  <input
                    className="accent-primary-main w-5 h-5"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="mr-4" for="vehicle1">
                    آیتم ۱
                  </label>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <input
                    className="accent-primary-main w-5 h-5"
                    type="checkbox"
                    id="vehicle2"
                    name="vehicle2"
                    value="Car"
                  />
                  <label className="mr-4" for="vehicle2">
                    آیتم ۲
                  </label>
                </div>
                <hr className="my-2" />
                <div className="flex flex-row justify-start items-center">
                  <input
                    className="accent-primary-main w-5 h-5"
                    type="radio"
                    id="html"
                    name="fav_language"
                    value="HTML"
                  />
                  <label className="mr-4" for="html">
                    مورد ۱
                  </label>
                </div>
                <div className="flex flex-row justify-start items-center text-lg">
                  <input
                    className="accent-primary-main w-5 h-5"
                    type="radio"
                    id="css"
                    name="fav_language"
                    value="CSS"
                  />
                  <label className="mr-4" for="css">
                    مورد ۲
                  </label>
                </div>
              </div>
            ),
            customOptions
          );
          if (i === 1 || i === 3 || i === 5) return null;
          return marker;

          // if (m === 0) {
          //   console.log("m === 0", m);
          //   return null;
          // }
        },
      }).addTo(map);

      return () => map?.removeControl(routingControl);
    }
  }, [map]);

  return null;
}

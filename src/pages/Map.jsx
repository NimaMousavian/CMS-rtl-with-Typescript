import { useState } from "react";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Divider,
  Radio,
  RadioGroup,
} from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import { icon3D } from "../utils/personIcon";
import RoutingMachine from "../Leaflet/leafletRoutingMachhine";
import DraggableMarker from "../Leaflet/DraggableMarker";
import { Circle, Polyline, Polygon, Rectangle } from "react-leaflet";
import isMarkerInPolygon from "../Leaflet/isMarkerInPolygon";
import tileLayers from "../Leaflet/tileLayers";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { blue } from "@mui/material/colors";

const Map = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  const [currentTile, setCurrentTile] = useState({
    id: 1,
    name: "Carto DB Positron",
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  });

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  const center = { lat: 51.505, lng: -0.09 };
  const marker = [51.52, -0.171];
  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [51.515, -0.09],
    [51.49, -0.117],
    [51.5, -0.18],
    [51.52, -0.2],
    [51.54, -0.15],
  ];

  const multiPolygon = [
    [
      [51.537, -0.1],
      [51.537, -0.13],
      [51.557, -0.13],
    ],
    [
      [51.52, -0.05],
      [51.52, -0.07],
      [51.54, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.1],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };

  const handleChange = (event) => {
    setCurrentTile(event.target.value);
  };

  return (
    <Box>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px" }}
      >
        <TileLayer attribution="" url={currentTile.url} />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="آیتم ۱"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="آیتم ۲"
              />
              <Divider />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="مورد ۱"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="مورد ۲"
                />
              </RadioGroup>
            </FormGroup>
          </Popup>
        </Marker>
        {/* <Marker position={[51.515, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {/* <Marker position={[51.5, -0.12]}></Marker> */}
        {/* <Marker position={[51.52, -0.12]}></Marker> */}
        {/* <Marker position={marker}></Marker> */}
        <Marker position={marker} icon={icon3D}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* <Marker position={[32.6539, 51.666]}>
          <Popup>Esfahan</Popup>
        </Marker> */}
        <RoutingMachine />
        <DraggableMarker />
        {/* <Circle center={center} pathOptions={fillBlueOptions} radius={500} /> */}
        {/* <Polyline pathOptions={blackOptions} positions={polyline} /> */}
        {/* <Polyline pathOptions={limeOptions} positions={multiPolyline} /> */}
        {/* <Polygon pathOptions={purpleOptions} positions={polygon} /> */}
        {/* <Polygon pathOptions={purpleOptions} positions={multiPolygon} /> */}
        {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
        {/* <Marker position={[51.49, -0.1]}></Marker> */}
        {/* <Marker position={[51.5, -0.06]}></Marker> */}
        {console.log(
          "the marker is in polygon? ",
          isMarkerInPolygon(marker, polygon)
        )}
      </MapContainer>
      <FormControl
        sx={{ m: 1, minWidth: 250 }}
        size="small"
        variant="filled"
        className="relative"
      >
        <InputLabel id="demo-select-small-label">پوسته ی نقشه</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={currentTile}
          label="Age"
          onChange={(e) => handleChange(e)}
        >
          {/* <MenuItem value={""}>
            <em>None</em>
          </MenuItem> */}
          {tileLayers.map((tl) => (
            <MenuItem key={tl.id} value={tl}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: "50px",
                    height: "50px",
                    my: "5px",
                  }}
                >
                  <img
                    src={tl.preview}
                    alt={tl.name}
                    className="rounded-md border border-zinc-300"
                  />
                </Box>
                <Box sx={{ ml: "20px" }}>{tl.name}</Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Map;

interface Layer {
    id: Number;
    name: string;
    url: string;
    preview: string;
}

const tileLayers: Layer[] = [
    {id: 1,name: "Carto DB Positron", url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", preview: "/images/tilePreviews/carto-db-positron.png"},
    {id: 2,name: "Esri World Gray Canvas", url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", preview: "/images/tilePreviews/esri-world-gray-canvas.png"},
    {id: 3,name: "Carto DB Voyager", url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", preview: "/images/tilePreviews/carto-db-voyager.png"},
]


export default tileLayers;
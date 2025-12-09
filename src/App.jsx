import s from "./App.module.css";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import mapa from '/mapa.gif'

function App() {
  const position = [-25.591935, -49.4794082];

  return (
    <div className={s.wrapAll}>
      <img width={300} src="mapa.gif" alt="mapa" />
      <div className={s.wrapMap}>
        <MapContainer style={{borderRadius: "20px", width: '100%', height: '100%'}} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
           <a href="https://www.google.com/maps/place/Instituto+FORJA/@-25.591935,-49.4794082,11z/data=!4m10!1m2!2m1!1sforja!3m6!1s0x94dcfe7bd2686f37:0x3f0cfdd684d6f712!8m2!3d-25.5934726!4d-49.3322439!15sCgVmb3JqYVoHIgVmb3JqYZIBF2VkdWNhdGlvbmFsX2luc3RpdHV0aW9u4AEA!16s%2Fg%2F11btm0twp7?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D">Ir para o maps</a>
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    </div>
  );
}

export default App;

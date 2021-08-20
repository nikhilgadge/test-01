import { useEffect, useState } from "react";
import SelectComponent from "./components/SelectComponent";
import Map from "./components/Map";
import routeData from "./route";

const routeIds = routeData.map((item) => {
  return item.route_id;
});

function App() {
  const [route, setRoute] = useState("BOS2_3@AM");
  const [geoLocations, setGeoLocations] = useState([]);
  const [center, setCenter] = useState({});

  useEffect(() => {
    const g = getGeoLocations(route);
    setGeoLocations(g[0]);
  }, [route]);
  useEffect(() => {
    if (geoLocations.length > 0) {
      const { latitude, longitude } = geoLocations[0].geo_location;

      setCenter({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
    }
  }, [geoLocations]);
  const getGeoLocations = (route) => {
    const a = routeData.filter((item) => route === item.route_id);
    return a.map((item) => {
      return item.route_graph;
    });
  };

  return (
    <div className="App">
      <header>
        <h3>Admin Dashboard</h3>
        <div className="line"></div>
      </header>
      <main className="main_container">
        <SelectComponent
          route={route}
          setRoute={setRoute}
          routeIds={routeIds}
        />
        <Map geoLocations={geoLocations} center={center} />
      </main>
    </div>
  );
}

export default App;

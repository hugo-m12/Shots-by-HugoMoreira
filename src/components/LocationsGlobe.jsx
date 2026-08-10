import Globe from "react-globe.gl";

function LocationsGlobe() {

  const pointsData = [
    {
      lat: 41.15,
      lng: -8.62,
      color: "black",
      label: "Porto",
    },
    {
      lat: 41.38,
      lng: 2.13,
      color: "orange",
      label: "Barcelona",
    },
    {
      lat: 42.43,
      lng: -8.70,
      color: "blue",
      label: "Combarro",
    },
    {
      lat: 52.37,
      lng: 4.89,
      color: "red",
      label: "Amsterdam",
    },
    {
      lat: 38.79,
      lng: -9.38,
      color: "yellow",
      label: "Sintra",
    },
    {
      lat: 52.50,
      lng: 13.33,
      color: "white",
      label: "Berlin",
    },
    {
      lat: 40.41,
      lng: -3.70,
      color: "purple",
      label: "Madrid",
    },
    {
      lat: 53.35,
      lng: -6.26,
      color: "green",
      label: "Dublin",
    },
  ];
  
  return (
    <div className="cursor-pointer">
      <Globe
        backgroundColor="rgba(255,255,255,255)"
        labelText={"label"}
        labelSize={1.6}
        width={400}
        height={600}
        hexPolygonResolution={3}
        pointsData={pointsData}
        pointLabel="label"
        pointColor="color"
        markerRadius={0.5}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        autoRotate={true}
        autoRotateSpeed={3}
        enablePointerInteraction={true}
        onPointClick={(point) => {
    console.log(point.label);
  }}
      />
    </div>
  );
}

export default LocationsGlobe;

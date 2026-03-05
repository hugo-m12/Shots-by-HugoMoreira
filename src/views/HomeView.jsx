import { useState } from "react";
import { useEffect } from "react";
import locationsService from "../services/locationsService";
import { Link } from "wouter";
import LocationCard from "../components/LocationCard";
import LocationsGlobe from "../components/LocationsGlobe";
import LoadingAnim from "../components/LoadingAnim";

function HomeView() {
  const [locations, setLocations] = useState([]);

  useEffect(function () {
    (async function () {
      const result = await locationsService.loadLocationsData();
      setLocations(result);
    })();
  }, []);

  return (
    <>
      <article>
        <div className="flex justify-center items-center md: mt-5 p-7">
          <img src="Images/banner/Banner.jpg" alt="main-banner" />
        </div>
      </article>
      <h2 className="text-5xl text-center underline font-black mt-10 mb-[-30px] ">
        Recent Work
      </h2>
      <section className="flex justify-center mb-0 mt-0">
  {locations && locations.length > 0 ? (
    <div className="flex flex-col gap-6 m-12 sm:m-8 md:m-12 lg:m-16 xl:m-24">
      <div className="flex flex-wrap justify-center gap-12">
        {locations.map((value) => (
          <Link
            className="no-underline text-inherit"
            key={value.id}
            href={`/${value.slug}`}
          >
            <LocationCard locations={value} />
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center p-20">
      <LoadingAnim />
    </div>
  )}
</section>

      <h2 className="text-5xl text-center underline font-black mt-10 mb-[-20]">
        Visited Locations
      </h2>
      <section className="flex justify-center mb-[-20]">
        <div className="mb-[-20]">
          <LocationsGlobe />
        </div>
      </section>
    </>
  );
}

export default HomeView;

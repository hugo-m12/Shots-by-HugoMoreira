import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function AddLocationView() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [description, setdescription] = useState("");
  const [thumbnail, setthumbnail] = useState("");

  function addLocationHandler() {
    const newLocation = {
      country,
      city,
      arrivalDate,
      departureDate,
      description,
      thumbnail,
    };
    console.log(newLocation);
    console.table(newLocation);
  }

  return (
    <>
      <h1 className="text-5xl text-center mt-10 mb-3">
        Suggest me a new location to Visit!
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="grid p-16 items-center text-center justify-center gap-5">
          <input
            required={true}
            className="border border-gray-400/60 rounded-sm w-[352px] h-10 pl-2"
            defaultValue={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          ></input>
          <input
            required={true}
            className="border border-gray-400/60 rounded-sm w-[352px] h-10 pl-2"
            defaultValue={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          ></input>
          <div className="grid grid-cols-2 gap-4">
            <p>Arrival Date</p>
            <p>Departure Date</p>
            <input
              className="border border-gray-400/60 rounded-sm w-[168px] h-10 pl-2"
              required={true}
              defaultValue={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              type="date"
            ></input>
            <input
              className="border border-gray-400/60 rounded-sm w-[168px] h-10 pl-2"
              required={true}
              defaultValue={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              type="date"
            ></input>
          </div>
          <textarea
            defaultValue={description}
            className="border border-gray-400/60 rounded-sm w-[352px] pl-2"
            onChange={(e) => setdescription(e.target.value)}
            rows={5}
            placeholder="Location description"
          ></textarea>

          <label className="custom-file-upload" htmlFor="file">
            <div className="icon">
              <FontAwesomeIcon className="fa-l" icon={faFileImage} />
            </div>
            <div className="text">
              <span>Click to upload image</span>
            </div>
            <input
              defaultValue={thumbnail}
              onChange={(e) => setthumbnail(e.target.value)}
              type="file"
              id="file"
            />
          </label>

          <button onClick={addLocationHandler} className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">Save</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </div>
      </form>
    </>
  );
}

export default AddLocationView;

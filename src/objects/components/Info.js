import React from "react";
import { NavLink } from "react-router-dom";
import { useObjectsState } from "../objects-context";

export default function Info({ noradNumber }) {
  const { objectInfo } = useObjectsState();

  return (
    <React.Fragment>
      <section style={{ margin: "1em" }}>
        <h1>{objectInfo.object_name}</h1>
        <div>
          <p>{objectInfo.object_origin}</p>
          <p>{objectInfo.object_primary_purpose}</p>
          <p>{objectInfo.object_secondary_purpose}</p>
          <p>{objectInfo.year_launched}</p>
        </div>
        <div>
          <p>NORAD# = {noradNumber}</p>
          <p>
            TRACKED BY {objectInfo.number_users_tracked} via{" "}
            {objectInfo.oservation_count} OBSERVATIONS
          </p>
          <p>
            LAST SEEN {objectInfo.time_last_tracked} BY{" "}
            {objectInfo.username_last_tracked}
          </p>
          <p>QUALITY {objectInfo.observation_quality}</p>
          <p />
        </div>
      </section>

      <section style={{ margin: "1em" }}>
        <h1>BACKGROUND</h1>
        <p>background = {objectInfo.object_background}</p>
        HOW TO SEE THIS SAT
        <NavLink className="app__nav-link" to="/how">
          Follow this tutorial
        </NavLink>
        <a href={`${objectInfo.heavens_above_url}`}>
          Deep link to Heavens Above
        </a>
      </section>
    </React.Fragment>
  );
}

// POST REQUEST
// /objectInfo
// receives Norad Number and returns an object.
const object_info = {
  object_name: "Name of Sat",
  object_origin: "russia",
  object_type: "satelitte",
  object_primary_purpose: "military",
  object_secondary_purpose: "communications",
  year_launched: "1987",
  number_users_tracked: "77", // number of users that have successfully tracked this object
  oservation_count: "12000", // total number of observations that were submitted to create a TLE for this object from the beginning of collection records
  time_last_tracked: "1550398277", // timestamp
  address_last_tracked: "0x1863a72A0244D603Dcd00CeD99b94d517207716a",
  username_last_tracked: "Leo Barhorst",
  observation_quality: 77, // This is our object confidence "rating", may utilize user rank and individual observation_quality for example
  object_background:
    "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
  heavens_above_url: "https://filler.com"
};

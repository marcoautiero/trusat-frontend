import React from "react";
// import CircleCheck from "../../assets/CircleCheck.svg";
import { toolTip } from "../../app/helpers";

export default function PrivacySettings({
  showEditPrivacyInputs,
  setShowEditPrivacyInputs,
  newPublicUsername,
  setNewPublicUsername,
  newPublicLocation,
  setNewPublicLocation,
  newPublicObservations,
  setNewPublicObservations
}) {
  return (
    <section className="privacy-settings__wrapper">
      <h2 className="privacy-settings__heading">
        <p>PRIVACY</p>
        {/* <p
          className="privacy-settings__edit-button-text"
          onClick={() => setShowEditPrivacyInputs(true)}
        >
          edit
        </p> */}
      </h2>

      {/* Make user name public/private */}
      {/* <div className="privacy-settings__setting-wrapper">
        {showEditPrivacyInputs ? (
          <input
            type="checkbox"
            className="privacy-settings__checkbox"
            checked={!newPublicUsername}
            onChange={() => setNewPublicUsername(!newPublicUsername)}
          ></input>
        ) : newPublicUsername ? (
          <span
            style={{
              border: "1px solid red",
              borderRadius: "50%",
              color: "red",
              marginRight: "0.25em",
              padding: "0.3em"
            }}
          >
            x
          </span>
        ) : (
          <img
            className="privacy-settings__image"
            src={CircleCheck}
            alt="check"
          ></img>
        )}
        <label className="privacy-settings__checkbox-label">
          Hide my username and show ETH address instead
        </label>
      </div>

      {/* Make location public/private */}
      {/* <div className="privacy-settings__setting-wrapper">
        {showEditPrivacyInputs ? (
          <input
            type="checkbox"
            className="privacy-settings__checkbox"
            checked={!newPublicLocation}
            onChange={() => setNewPublicLocation(!newPublicLocation)}
          ></input>
        ) : newPublicLocation ? (
          <span
            style={{
              border: "1px solid red",
              borderRadius: "50%",
              color: "red",
              marginRight: "0.25em",
              padding: "0.3em"
            }}
          >
            x
          </span>
        ) : (
          <img
            className="privacy-settings__image"
            src={CircleCheck}
            alt="check"
          ></img>
        )}
        <label className="privacy-settings__checkbox--label">
          Display my location as "undisclosed"
        </label>
      </div> */}

      {/* Make observations (IODs or other formats) public/private */}
      {/* <div className="privacy-settings__setting-wrapper">
        {showEditPrivacyInputs ? (
          <input
            type="checkbox"
            className="privacy-settings__checkbox"
            checked={!newPublicObservations}
            onChange={() => setNewPublicObservations(!newPublicObservations)}
          ></input>
        ) : newPublicObservations ? (
          <span
            style={{
              border: "1px solid red",
              borderRadius: "50%",
              color: "red",
              marginRight: "0.25em",
              padding: "0.3em"
            }}
          >
            x
          </span>
        ) : (
          <img
            className="privacy-settings__image"
            src={CircleCheck}
            alt="check"
          ></img>
        )}
        <label className="privacy-settings__checkbox--label">
          Hide my observations
        </label>
      </div> */}
      <a
        className="privacy-settings__remove-text"
        href="mailto:remove@trusat.org"
      >
        {toolTip(
          `Remove my current and historical data from the system`,
          `Click to email us at remove@trusat.org and we will take care of your request within two weeks`
        )}
      </a>
    </section>
  );
}

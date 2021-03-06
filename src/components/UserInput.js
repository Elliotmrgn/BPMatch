import React from "react";
import BPMatchLogo from "./../BPMatchLogo.png";

const UserInput = (props) => {
  return (
    <div className='horizontal-box'>
      <form className="input-field" onSubmit={props.handleSubmit}>
      </form>
      <img src={BPMatchLogo} className='bpmlogo bpm-logo-height' />
      <input
        value={props.results}
        id="userSearch"
        type="text"
        className="input-search search-bar-height"
        onChange={props.handleChange}
      />
      <input type="submit" value="Submit" className='search-bar-height' />
    </div>
  );
};

export default UserInput;

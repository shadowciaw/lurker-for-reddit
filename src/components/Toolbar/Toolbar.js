import React from "react";

import { useState } from 'react';

import classes from './Toolbar.module.css';

const Toolbar = props => {
  console.log("[Toolbar.js] rendering...");

  const [toggleNSFW, setToggleNSFW] = useState('false');

  console.log(toggleNSFW);
  return (
    <div className={classes.Tool}>
      <div className={classes.SwitchContainer}>
        <label className={classes.Switch}>
          <input type="checkbox" 
            checked={toggleNSFW}
            onChange={event => setToggleNSFW(!toggleNSFW)}
          />
          <span className={classes.Slider}></span>
        </label>
        <div className={classes.SwitchText}>Toggle NSFW</div>
      </div>
      <div className={classes.SwitchContainer}>
        <label className={classes.Switch}>
          <input type="checkbox" />
          <span className={classes.Slider}></span>
        </label>
        <div className={classes.SwitchText}>Other Toggle</div>
      </div>
    </div>
  );
};

export default Toolbar;

import React from "react";

interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default Pre;
//on hold

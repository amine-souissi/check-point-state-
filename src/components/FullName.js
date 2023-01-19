import React from "react";
import PropTypes from "prop-types";
const NameComponent = (props) => {
  return (
    <>
      <h1
        style={{
          color: "blue",
          boxShadow: "0 5px 8px #000",
          textAlign: "center"
        }}
      >
        {props.name}
      </h1>
    </>
  );
};
NameComponent.propTypes = {
  name: PropTypes.string
};

export default NameComponent;

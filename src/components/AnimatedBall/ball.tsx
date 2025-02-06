import React from "react";

const AnimatedBall: React.FC = () => {
  return (
    <div className="elementor-icon-wrapper">
      <div className="elementor-icon">
        <svg
          aria-hidden="true"
          className="e-font-icon-svg e-fas-circle"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>{" "}
      </div>
    </div>
  );
};

export default AnimatedBall;

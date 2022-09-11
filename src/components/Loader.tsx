import React from "react";
import ReactLoading from "react-loading";

type Props = {
  type: "full" | "transparent";
};

const Loader = (props: Props) => {
  return (
    <div className="position-fixed vh-100 w-100 loader d-flex align-items-center justify-content-center">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#00d9ff"}
        height={"100px"}
        width={"100px"}
      />
    </div>
  );
};

export default Loader;

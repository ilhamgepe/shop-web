import React from "react";
import Navbar from "./Navbar";

const Layouts = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layouts;

import React from "react";

const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <div className="max-w-screen-2xl mx-auto p-2">{children}</div>;
};

export default Wrapper;

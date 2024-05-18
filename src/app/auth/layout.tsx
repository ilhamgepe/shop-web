import React from "react";

const layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="h-screen flex items-center justify-center">{children}</div>
  );
};

export default layout;

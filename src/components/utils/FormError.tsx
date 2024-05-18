import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";

const FormError = ({ msg }: { msg?: string }) => {
  if (!msg) return null;

  return (
    <div className="bg-destructive/15 p-3 text-destructive rounded-md flex items-center gap-x-2 text-sm">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <p>{msg}</p>
    </div>
  );
};

export default FormError;

import { CheckCircledIcon } from "@radix-ui/react-icons";

const FormSuccess = ({ msg }: { msg?: string }) => {
  if (!msg) return null;

  return (
    <div className="bg-emerald-500/15 p-3 text-emerald-500 rounded-md flex items-center gap-x-2 text-sm">
      <CheckCircledIcon className="h-5 w-5" />
      <p>{msg}</p>
    </div>
  );
};

export default FormSuccess;

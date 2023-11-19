import Loader from "@components/loader";

export default function Loading() {
  return (
    <div className="grid w-full place-items-center">
      <div className="bg-black/40 p-5 flex flex-col items-center gap-5 rounded-lg">
        <Loader></Loader>
        <p className="text-heading">
          Hey buddy, Please wait! We are cooking...
        </p>
      </div>
    </div>
  );
}

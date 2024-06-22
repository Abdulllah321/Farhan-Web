import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center" id="error-page">
      <h1 className="text-5xl font-semibold">Oops!</h1>
      <p className="py-2 mt-2">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
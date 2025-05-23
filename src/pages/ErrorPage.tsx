import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let message: string

  if(isRouteErrorResponse(error)) {
    message = error.statusText || String(error.status)
  } else if (error instanceof Error) {
    message = error.message
  } else {
    message = String(error)
  }

  return (
    <div id="error-page" className="p-4 flex flex-col">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="bg-slate-50 px-1 py-4 rounded-sm"> Error message:
        <i className="text-red-500"> {message}</i>
      </p>
      <Link className="text-xl text-cyan-500 hover:underline" to="/">
        Back to home
      </Link>
    </div>
  );
}

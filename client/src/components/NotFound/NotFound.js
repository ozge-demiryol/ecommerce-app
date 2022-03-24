import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <img
        className="h-8 w-auto mb-16 scale-150"
        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
        alt=""
      />
      <div className="flex flex-col items-center justify-center">
        <p className="font-semibold tracking-wide text-indigo-600 text-sm">
          404 ERROR
        </p>
        <h1 className="text-5xl mb-3 font-bold tracking-tight text-gray-900">
          Page not found.
        </h1>
        <p className="text-gray-500 font-normal">
          Sorry, we couldn't find the page you're looking for.
        </p>
      </div>
      <Link to="/" className="flex mt-5 cursor-pointer">
          <p className="font-medium hover:underline text-indigo-600">
            Go back home
          </p>
          <ArrowRightIcon className="w-5 ml-2 text-xs text-indigo-600" />
      </Link>
    </main>
  );
};

export default NotFound;

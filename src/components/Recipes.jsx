import React from "react";
import { Link } from "react-router-dom";

function Recipes({ recipies }) {
  console.log(recipies);
  return (
    <ul className="mt-10 grid md:grid-cols-3 gap-5">
      {recipies &&
        recipies.map((recipe) => {
          const { id, title, cookingTime, time, images, ingredients, method } =
            recipe;

          return (
            <li key={id}>
              <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <a href="#">
                  <img className="rounded-t-lg" src={images[0]} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {title}
                    </h5>
                  </a>
                  <p className="mb-3 line-clamp-4 font-normal text-gray-700 dark:text-gray-400">
                    {method}
                  </p>
                  <p className="mb-3 line-clamp-4 font-normal  text-gray-700 dark:text-gray-400">
                    CookingTime:
                    <span>{cookingTime}</span>
                  </p>
                  <Link
                    to={`recipe/${id}`}
                    href="#"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
}

export default Recipes;

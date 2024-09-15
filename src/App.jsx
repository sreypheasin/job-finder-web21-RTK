import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchJobByCategory, fetchJobs } from "./features/job/jobSlice";
import JobCard from "./components/cards/JobCard";
import { initFlowbite } from "flowbite";
import { BsChevronDown } from "react-icons/bs";
import { fetchCategories } from "./features/category/categorySlice";

function App() {
  const { jobs, status } = useSelector((state) => state.jobR);
  const { categories } = useSelector((state) => state.categoryR);
  const { jobEachCategory } = useSelector((state) => state.jobR);
  const [filter, setFilter] = useState(false);
  const state = useSelector((state) => state);
  console.log("state", state);
  console.log("categories", categories);
  const dispatch = useDispatch();

  console.log("jobs in app", jobs);
  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCategories());
    console.log("fetch category");
    initFlowbite();
  }, []);

  // handle job by category
  const handleFetchJobByCategory = (category) => {
    setFilter(true);
    dispatch(fetchJobByCategory(category));
  };
  console.log("jobEachCategory", jobEachCategory);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section>
        <form className="max-w-screen-2xl mx-auto my-5">
          <div className="flex">
            <label
              for="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            ></label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              All categories
              <BsChevronDown className="ml-2" />
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                {categories &&
                  categories.map((category, index) => {
                    return (
                      <li key={index}>
                        <button
                          onClick={() =>
                            handleFetchJobByCategory(category?.category_name)
                          }
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {category.category_name}
                        </button>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 py-4 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {status === "loading" && <p className="text-center">Loading...</p>}
          {filter == true &&
            jobEachCategory.length > 0 &&
            jobEachCategory.map((job, index) => {
              return (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  job_type={job.job_type}
                  salary={job.salary}
                  thumbnail={job.thumbnail}
                  id={job.id}
                />
              );
            })}
          {filter == true && jobEachCategory.length == 0 && (
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/007/104/553/small_2x/search-no-result-not-found-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
              alt=""
            />
          )}
          {filter == false &&
            jobs &&
            jobEachCategory == 0 &&
            jobs.map((job, index) => {
              return (
                <JobCard
                  key={index}
                  title={job.title}
                  description={job.description}
                  job_type={job.job_type}
                  salary={job.salary}
                  thumbnail={job.thumbnail}
                  id={job.id}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default App;

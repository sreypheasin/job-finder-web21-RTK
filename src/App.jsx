import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "./features/job/jobSlice";
import JobCard from "./components/cards/JobCard";

function App() {
  // const { jobs } = useSelector(selectJobs);
  const { jobs, status } = useSelector((state) => state.jobR);
  const dispatch = useDispatch();

  console.log("jobs in app", jobs);
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section>
        <h1 className="mb-8 text-3xl font-bold text-center text-cyan-800">
          Job Listing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {status === "loading" && <p className="text-center">Loading...</p>}
          {status === "succeeded" &&
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

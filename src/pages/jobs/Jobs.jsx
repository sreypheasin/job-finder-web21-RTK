import { useSelector } from "react-redux";
import JobCard from "../../components/cards/JobCard";

export default function Jobs() {
  const { jobs } = useSelector((state) => state.jobR);
  return (
    <main className="max-w-screen-2xl mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center text-cyan-800">
        Job page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {jobs.map((job, index) => {
          return (
            <JobCard
              key={index}
              title={job.title}
              description={job.description}
              job_type={job.job_type}
              salary={job.salary}
              thumbnail={job.thumbnail}
            />
          );
        })}
      </div>
    </main>
  );
}

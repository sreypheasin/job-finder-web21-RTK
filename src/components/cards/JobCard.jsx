import { Link } from "react-router-dom";

export default function JobCard({
  title,
  description,
  job_type,
  salary,
  thumbnail,
  id
}) {
  return (
    <>
      <Link
        to={`/jobs/${id}`}
        className="relative block rounded-tr-3xl border border-gray-100"
      >
        <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
          {job_type}
        </span>

        <img
          src={
            thumbnail ||
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          alt={title}
          className="h-80 w-full rounded-tr-3xl object-cover"
        />

        <div className="p-4">
          <strong className="text-xl font-medium text-gray-900">
            {title || "No Job Title"}
          </strong>

          <p className="mt-2 text-pretty text-gray-700">
            {description || "No Job Description"}
          </p>

          <p className="mt-2 text-pretty text-rose-700 font-bold">
            {salary || "No Job Description"} $
          </p>
          <span className="text-center mt-4 block rounded-md border border-indigo-900 bg-indigo-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
            Apply
          </span>
        </div>
      </Link>
    </>
  );
}

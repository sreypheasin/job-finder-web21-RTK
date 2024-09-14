import { useParams } from "react-router-dom";
import { JobDetailCard } from "../../components/cards/JobDetailCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobById } from "../../features/job/jobSlice";
import { useEffect } from "react";

export default function JobDetails() {
  const { jobDetail } = useSelector((state) => state.jobR);
  const param = useParams();
  const dispatch = useDispatch();
  const id = param?.id;
  console.log("id", id);
  console.log("jobDetail", jobDetail);

  // dispatch(fetchJobById(id));
  useEffect(() => {
    dispatch(fetchJobById(id));
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <JobDetailCard
        thumbnail={jobDetail?.thumbnail}
        title={jobDetail?.title}
        description={jobDetail?.description}
      />
    </main>
  );
}

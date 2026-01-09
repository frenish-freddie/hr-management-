import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import "./Jobs.css";

export default function Jobs() {
  return (
    <div className="jobs-container page">
      <h1>Open Positions</h1>

      <div className="job-grid">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

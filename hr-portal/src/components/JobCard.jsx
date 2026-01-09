import "./JobCard.css";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.location} • {job.type}</p>
      <Link to={`/apply/${job.id}`}>Apply →</Link>
    </div>
  );
}

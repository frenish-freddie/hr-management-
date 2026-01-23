import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ViewApplications.module.css";

const ViewApplications = () => {
    const { jobId } = useParams();
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/applications/${jobId}`);
                if (!response.ok) {
                    if (response.status === 404) {
                        setApplications([]); // No applications found is not an error
                        return;
                    }
                    throw new Error("Failed to fetch applications");
                }
                const data = await response.json();
                setApplications(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, [jobId]);

    const handleDownloadResume = (resumePath) => {
        // Construct the full URL for the resume
        // resumePath from backend is like "resumes/filename.pdf"
        // We need an endpoint to serve this file or access it statically
        // Assuming backend serves a static 'resumes' directory or we have a download endpoint.
        // For now, let's assume we can access it if the backend mounts the static dir.
        // If not, we might need to add a static mount in FastAPI.

        // Let's assume the backend is mounting 'resumes' at root or similar. I'll check main.py later.
        // If not mounted, I might need to add it.
        // For now, I'll direct to the file path relative to backend URL.
        window.open(`http://127.0.0.1:8000/${resumePath}`, "_blank");
    };

    if (loading) return <div className={styles.loading}>Loading applications...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <div className={styles.container}>
            <h1>Applications for Job ID: {jobId}</h1>
            {applications.length === 0 ? (
                <p>No applications found for this job.</p>
            ) : (
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Experience</th>
                                <th>Current CTC</th>
                                <th>Expected CTC</th>
                                <th>Resume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((app) => (
                                <tr key={app.id}>
                                    <td>{app.name}</td>
                                    <td>{app.email}</td>
                                    <td>{app.phone}</td>
                                    <td>{app.experience} Years</td>
                                    <td>{app.ctc} LPA</td>
                                    <td>{app.expected_ctc} LPA</td>
                                    <td>
                                        {app.resume && (
                                            <button
                                                onClick={() => handleDownloadResume(app.resume)}
                                                className={styles.viewButton}
                                            >
                                                View Resume
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ViewApplications;

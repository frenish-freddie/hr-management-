import "./Home.css";
import homeBg from "../assets/911.png"; 

export default function Home() {
  return (
    <section
      className="hero page"
      style={{
        backgroundImage: `linear-gradient(
          rgba(0,0,0,0.5),
          rgba(0,0,0,0.5)
        ), url(${homeBg})`
      }}
    >
      <h1>Build Your Career With Us</h1>
      <p>
        Explore opportunities, grow professionally, and be part of a
        future-driven organization.
      </p>

      <a href="/jobs" className="cta-btn">
        View Open Positions
      </a>
    </section>
  );
}

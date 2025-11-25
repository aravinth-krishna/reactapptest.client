import styles from "./Course.module.css";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useState } from "react";

function Course() {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.course}>
      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>
          <FaFilter /> Filters
        </h2>

        <FilterSection title="Priority" options={["Low", "Medium", "High"]} />

        <FilterSection
          title="Difficulty"
          options={["Beginner", "Intermediate", "Advanced"]}
        />

        <FilterSection
          title="Duration"
          options={["Less than 1 hour", "1 to 3 hours", "More than 3 hours"]}
        />
      </aside>

      <div className={styles.mainContent}>
        <h1>Your Courses</h1>

        <div className={styles.searchBox}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.courseGrid}>
          <CourseCard
            title="React Basics"
            description="Learn the fundamentals of React."
            hoursRemaining={12}
            imageSrc="/src/assets/course1.png"
          />

          <CourseCard
            title="Advanced JavaScript"
            description="Deep dive into JavaScript concepts."
            hoursRemaining={8}
            imageSrc="/src/assets/course2.png"
          />

          <CourseCard
            title="Web Development"
            description="Full-stack web development course."
            hoursRemaining={15}
            imageSrc="/src/assets/course3.png"
          />
        </div>
      </div>
    </div>
  );
}

function FilterSection({ title, options }) {
  return (
    <div className={styles.filterSection}>
      <h4>{title}</h4>
      {options.map((opt) => (
        <label key={opt}>
          <input type="checkbox" />
          {opt}
        </label>
      ))}
    </div>
  );
}

function CourseCard({ title, description, hoursRemaining, imageSrc }) {
  return (
    <div className={styles.courseCard}>
      <img src={imageSrc} alt={`Image for ${title}`} />
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.hours}>{hoursRemaining} hours remaining</span>
      </div>
    </div>
  );
}

export default Course;

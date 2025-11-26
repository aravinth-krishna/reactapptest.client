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

        <button popovertarget="add-course-pop" className={styles.addBtn}>
          Add New Course
        </button>

        <div id="add-course-pop" popover="manual" className={styles.popover}>
          <h3>Add New Course</h3>

          <form>
            <label>
              Title
              <input type="text" placeholder="Course title" />
            </label>

            <label>
              Description
              <textarea placeholder="Course description"></textarea>
            </label>

            <label>
              Duration (hours)
              <input type="number" placeholder="e.g. 15" />
            </label>

            <label>
              Sections
              <input type="number" placeholder="e.g. 5" />
            </label>

            {/* ⭐ NEW: Priority Dropdown */}
            <label>
              Priority
              <select>
                <option value="">Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>

            {/* ⭐ NEW: Difficulty Dropdown */}
            <label>
              Difficulty
              <select>
                <option value="">Select difficulty</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </label>

            <button type="submit" className={styles.submitBtn}>
              Save
            </button>
          </form>

          <button
            popovertarget="add-course-pop"
            popovertargetaction="hide"
            className={styles.closeBtn}
          >
            ✖
          </button>
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Courses */}
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
          <input type="checkbox" /> {opt}
        </label>
      ))}
    </div>
  );
}

function CourseCard({ title, description, hoursRemaining, imageSrc }) {
  return (
    <div className={styles.courseCard}>
      <img src={imageSrc} alt="" />
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.hours}>{hoursRemaining} hours remaining</span>
      </div>
    </div>
  );
}

export default Course;

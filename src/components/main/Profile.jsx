import { useState } from "react";
import styles from "./Profile.module.css";

function Profile() {
  const [name, setName] = useState("Aravinth Krishna");
  const [email, setEmail] = useState("aravinth@example.com");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [studySpeed, setStudySpeed] = useState("normal");
  const [maxSession, setMaxSession] = useState("60");
  const [weeklyLimit, setWeeklyLimit] = useState(10);

  const [darkMode, setDarkMode] = useState(false);

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>Your Profile</h1>

      <div className={styles.grid}>
        {/* USER INFORMATION */}
        <section className={styles.card}>
          <h2>User Information</h2>

          <label>
            Full Name
            <input
              type="text"
              value={name}
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Email Address
            <input
              type="email"
              value={email}
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </section>

        {/* PASSWORD CHANGE */}
        <section className={styles.card}>
          <h2>Change Password</h2>

          <label>
            Current Password
            <input
              type="password"
              value={oldPass}
              placeholder="••••••••"
              onChange={(e) => setOldPass(e.target.value)}
            />
          </label>

          <label>
            New Password
            <input
              type="password"
              value={newPass}
              placeholder="••••••••"
              onChange={(e) => setNewPass(e.target.value)}
            />
          </label>

          <label>
            Confirm New Password
            <input
              type="password"
              value={confirmPass}
              placeholder="••••••••"
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </label>

          <button className={styles.changePasswordButton}>
            Change Password
          </button>
        </section>

        {/* STUDY PREFERENCES */}
        <section className={styles.card}>
          <h2>Study Preferences</h2>

          <label>
            Preferred Study Speed
            <select
              value={studySpeed}
              onChange={(e) => setStudySpeed(e.target.value)}
            >
              <option value="slow">Slow & Deep</option>
              <option value="normal">Balanced</option>
              <option value="fast">Fast Paced</option>
            </select>
          </label>

          <label>
            Max Session Time (minutes)
            <input
              value={maxSession}
              onChange={(e) => setMaxSession(e.target.value)}
              type="number"
              placeholder="e.g. 3"
            ></input>
          </label>

          <label>
            Weekly Study Limit: <strong>{weeklyLimit} hrs</strong>
            <input
              type="range"
              min="1"
              max="40"
              value={weeklyLimit}
              onChange={(e) => setWeeklyLimit(e.target.value)}
            />
          </label>
        </section>

        {/* DISPLAY SETTINGS */}
        <section className={styles.card}>
          <h2>Display Settings</h2>

          <div className={styles.toggleRow}>
            <span>Dark Mode</span>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
        </section>
      </div>

      <button className={styles.saveBtn} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

export default Profile;

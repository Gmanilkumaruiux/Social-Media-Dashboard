import { useState } from "react";
import styles from "./Profile.module.css";

function Profile() {
  const [user] = useState({
    name: "Manil Kumar",
    email: "manil@example.com",
    bio: "React developer learning to build dashboards.",
    avatar: "https://via.placeholder.com/100"
  });

  return (
    <div className={styles.profile}>
      <img
        src={user.avatar}
        alt="User"
        className={styles.avatar}
      />

      <h2>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
      <p className={styles.bio}>{user.bio}</p>
    </div>
  );
}

export default Profile;

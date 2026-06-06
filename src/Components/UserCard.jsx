// UserCard.jsx

import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../Context/UserContext";

// PROFILE
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import profile5 from "../assets/profile5.jpg";
import profile6 from "../assets/profile6.jpg";
import profile7 from "../assets/profile7.jpg";
import profile8 from "../assets/profile8.jpg";
import profile9 from "../assets/profile9.jpg";
import profile10 from "../assets/profile10.jpg";

// BACKGROUND
import background1 from "../assets/background1.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import background5 from "../assets/background5.jpg";
import background6 from "../assets/background6.jpg";
import background7 from "../assets/background7.jpg";
import background8 from "../assets/background8.jpg";
import background9 from "../assets/background9.jpg";
import background10 from "../assets/background10.jpg";

function UserCard({ user }) {
  // STATE LIKE
  const [liked, setLiked] = useState(false);

  // TOTAL LIKE
  const [totalLike, setTotalLike] = useState(0);

  // STATE FOLLOW
  const [follow, setFollow] = useState(false);

  // CONTEXT APP
  const appName = useContext(UserContext);

  // REFS
  const cardRef = useRef(null);
  const likeButtonRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.opacity = "1";
      cardRef.current.style.transform = "translateY(0)";
    }
  }, []);

  useEffect(() => {
    if (!likeButtonRef.current) return;

    if (liked) {
      likeButtonRef.current.style.transform = "scale(1.05)";
      const timeout = setTimeout(() => {
        if (likeButtonRef.current) {
          likeButtonRef.current.style.transform = "scale(1)";
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [liked]);

  // ARRAY PROFILE
  const profiles = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    profile9,
    profile10,
  ];

  // ARRAY BACKGROUND
  const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
    background6,
    background7,
    background8,
    background9,
    background10,
  ];

  // INDEX
  const index = user.id % profiles.length;

  // FUNCTION LIKE
  const handleLike = () => {
    if (liked) {
      setTotalLike(totalLike - 1);
    } else {
      setTotalLike(totalLike + 1);
    }

    setLiked(!liked);
  };

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        backgroundImage: `url(${backgrounds[index]})`,
      }}
    >
      {/* OVERLAY */}
      <div className="overlay"></div>

      {/* CONTENT */}
      <div className="content">
        {/* FOTO PROFILE */}
        <div className="profile-bg">
          <img src={profiles[index]} alt="Profile" className="profile-image" />
        </div>

        {/* DATA USER */}
        <h2>{user.name}</h2>

        <p className="app-name">{appName}</p>

        <p>
          <b>Username:</b> {user.username}
        </p>

        <p>
          <b>Email:</b> {user.email}
        </p>

        {/* BUTTON */}
        <div className="button-group">
          {/* LIKE */}
          <button onClick={handleLike} ref={likeButtonRef}>
            {liked ? "❤️" : "🤍"} {totalLike}
          </button>

          {/* FOLLOW */}
          <button onClick={() => setFollow(!follow)}>
            {follow ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

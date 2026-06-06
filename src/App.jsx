// App.jsx

import { useEffect, useRef, useState } from "react";
import { UserContext } from "./Context/UserContext";

import Navbar from "./Components/Navbar";
import UserCard from "./Components/UserCard";
import Footer from "./Components/Footer";

import "./index.css";

function App() {
  // STATE USER
  const [users, setUsers] = useState([]);

  // STATE SEARCH
  const [search, setSearch] = useState("");

  // USEREF
  const inputRef = useRef();

  // FETCH API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  // AUTO FOCUS INPUT
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // FILTER SEARCH
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <UserContext.Provider value={"React Social Media"}>
      <div className="container">
        <Navbar />

        {/* SEARCH */}
        <div className="search-box">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search user..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CARD USER */}
        <div className="card-container">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;

import { signOut } from "firebase/auth";
import React from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import './Adminpage.css'
const Adminpage = () => {
  const navigate = useNavigate();
  const logoutpage = () => {
    signOut(auth).then(() => {
      if (confirm("Are you sure to logout?")) {
        navigate("/");
      }
    });
  };
  return (
    <div>
      <h1>Admin Page</h1>
      <button className="absolute right-4 bg-red-400 p-2 px-6 rounded" onClick={logoutpage}>
        Logout
      </button>
      <table className="mt-12">
        <thead>
          <tr>
            <th>Date</th>
            <th>Employee Name</th>
            <th>Attendance Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-04-01</td>
            <td>John Doe</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>2024-04-01</td>
            <td>Jane Smith</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adminpage;

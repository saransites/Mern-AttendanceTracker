import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Adminpage.css'
const Adminpage = () => {
  const navigate = useNavigate();
  const logoutpage = () => {
    signOut(auth).then(() => {
      if (confirm("Are you sure to logout?")) {
        navigate("/login");
      }
    });
  }
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
            <th>Loggedin</th>
            <th>Loggedout</th>
            <th>Work</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2024-04-01</td>
            <td>John Doe</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>2024-04-01</td>
            <td>Jane Smith</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Adminpage;

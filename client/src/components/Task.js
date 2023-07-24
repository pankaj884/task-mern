import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch data from an API endpoint
    axios
      .get("http://localhost:3000/tasks")
      .then((response) => {
        console.log("response : ", response);
        setData(response.data); // Set the fetched data in the component's state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Desciption</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

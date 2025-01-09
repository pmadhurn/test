import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  const [data, setdata] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((res) => setdata(res))
//       .catch((err) => console.log(err));
//   });
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  },[]);

  console.log(data);

  return (
    <>
      <div className="content">
        <h1>API's Data</h1>
        <table className="api1table">
          <thead>
            <tr>
              <th rowSpan="2">Id</th>
              <th rowSpan="2">Name</th>
              <th colSpan="3">Address</th>
            </tr>
            <tr>
              <th>Suite</th>
              <th>Street</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.address.suite}</td>
                <td>{d.address.street}</td>
                <td>{d.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Api;

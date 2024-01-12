import { useEffect , useState} from "react";



function Display() {

  const [employees, setEmployees]=useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getEmployees")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setEmployees(result)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="App">
      <table   id="customers">
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>Phone Number</th>
        </tr>
        {employees.map(data=>(
            <tr>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.email}</td>
            <td>{data.phoneNumber}</td>

          </tr>
            ))}
      </table>
    </div>
  );
}
export default Display;

import { useEffect , useState} from "react";



function Display() {

  const [employees, setEmployees]=useState([]);
  const [editMode, setEditMode] = useState(null); // Tracks the row in edit mode
  const [editedData, setEditedData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    jobPosition: "",
  });

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

  const handleEdit = (index, data) => {
    setEditMode(index);
    setEditedData(data);
  };

  const handleSave = (index) => {
    // Send a request to update the data on the server
    // ...

    // Update the local state with the edited data
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees];
      updatedEmployees[index] = editedData;
      return updatedEmployees;
    });

    // Reset edit mode
    setEditMode(null);
    setEditedData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      jobPosition: "",
    });
  };

  return (
    <div className="App">
      <table   id="customers">
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Job Position</th>
        </tr>
   {employees.map((data, index) => (
          <tr key={index}>
            <td>{editMode === index ? <input type="text" value={editedData.firstName} onChange={(e) => setEditedData({ ...editedData, firstName: e.target.value })} /> : data.firstName}</td>
            <td>{editMode === index ? <input type="text" value={editedData.lastName} onChange={(e) => setEditedData({ ...editedData, lastName: e.target.value })} /> : data.lastName}</td>
            <td>{editMode === index ? <input type="text" value={editedData.email} onChange={(e) => setEditedData({ ...editedData, email: e.target.value })} /> : data.email}</td>
            <td>{editMode === index ? <input type="text" value={editedData.phoneNumber} onChange={(e) => setEditedData({ ...editedData, phoneNumber: e.target.value })} /> : data.phoneNumber}</td>
            <td>{editMode === index ? <input type="text" value={editedData.address} onChange={(e) => setEditedData({ ...editedData, address: e.target.value })} /> : data.address}</td>
            <td>{editMode === index ? <input type="text" value={editedData.jobPosition} onChange={(e) => setEditedData({ ...editedData, jobPosition: e.target.value })} /> : data.jobPosition}</td>
            <td>
              {editMode === index ? (
                <button type="button" onClick={() => handleSave(index)}>
                  Save
                </button>
              ) : (
                <button type="button" onClick={() => handleEdit(index, data)}>
                  Edit
                </button>
              )}
              <button type="button">Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Display;

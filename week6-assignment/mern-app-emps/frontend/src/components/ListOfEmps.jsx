import { useState, useEffect } from "react";
import {useNavigate} from 'react-router'
import axios from "axios";


function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  // Navigate to view page
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  //  Navigate to edit page
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-employee", { state: empObj });
  };

  //  Delete employee
  const deleteEmployeeById = async (id) => {
    try {
      let res = await axios.delete(
        `http://localhost:4000/emp-api/employees/${id}`
      );

      if (res.status === 200) {
        getEmps(); 
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  //  Get all employees
  async function getEmps() {
    try {
      let res = await axios.get(
        "http://localhost:4000/emp-api/employees"
      );

      if (res.status === 200) {
        setEmps(res.data.payload);
      }
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

  // Load data on mount
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-10">
        {(
          emps.map((empObj) => (
            <div
              key={empObj._id}
              className="border-2 gap-10 p-5 border-gray-400 rounded-2xl text-center"
            >
              <p>{empObj.email}</p>
              <p className="mb-4">{empObj.name}</p>

              {/* Buttons */}
              <div className="flex justify-around">
                <button
                  onClick={() => gotoEmployee(empObj)}
                  className="bg-green-500 text-white p-2 rounded-2xl"
                >
                  View
                </button>

                <button
                  onClick={() => gotoEditEmployee(empObj)}
                  className="bg-blue-500 text-white p-2 rounded-2xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteEmployeeById(empObj._id)}
                  className="bg-red-500 text-white p-2 rounded-2xl"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default ListOfEmps;
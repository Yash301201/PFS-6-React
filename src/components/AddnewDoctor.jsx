import { useState } from "react";
import Home from "./Home";
function AddnewDoctor() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [newdoctor, setNewdoctor] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const formdata = {
      id: Date.now(),
      name,
      age,
      salary,
      gender,
      specialization,
    };

    setNewdoctor(formdata);

    setName("");
    setAge("");
    setSalary("");
    setGender("");
    setSpecialization("");
  }

  return (
    <div>
      <h1 className="form-title">Add New Doctor</h1>

      <form className="doctorform" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Name"
          required
        />

        <input
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          type="text"
          placeholder="Enter Specialization"
          required
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          min="18"
          placeholder="Enter Age"
          required
        />

        <input
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          type="number"
          min="0"
          placeholder="Enter Salary"
          required
        />

        <button type="submit">Add Doctor</button>
      </form>

      <Home newdoctor={newdoctor} />
    </div>
  );
}
export default AddnewDoctor;
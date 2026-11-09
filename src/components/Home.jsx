import { useState, useEffect } from "react";
import Doctorcard from "./Doctorcard";
function Home({ newdoctor }) {
  let [doctors, setDoctors] = useState([]);
  let [search,setSearch] = useState('')
  let [specialization,setSpecialization] = useState('')
  useEffect(() => {
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },
      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },
      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];

    setDoctors(data);
  }, []);

  useEffect(() => {
    if (newdoctor) {
      setDoctors((prev) => [...prev, newdoctor]);
    }
  }, [newdoctor]);
  let filtereddoctor = doctors.filter((val)=>{
    return (val.name.toLowerCase().includes(search.toLowerCase())
    &&
    specialization== '' || val.specialization.toLowerCase()==specialization
  )
  })

  return (
    <div className="home">
      <input value = {search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="search your doctor" />
      <select value = {specialization} onChange={(e)=>setSearch(e.target.value)}  name="" id="">
        <option value="">All</option>
        <option value="">bones</option>
        <option value="">heart</option>
        <option value="">muscles</option>
      </select>
      <h1>Available Doctors</h1>
      {filtereddoctor.length > 0 ? (
        <div className="doctorparent">
          {filtereddoctor.map((doctor) => (
            <Doctorcard
              key={doctor.id}
              name={doctor.name}
              age={doctor.age}
              gender={doctor.gender}
              specialization={doctor.specialization}
              salary={doctor.salary}
            />
          ))}
        </div>
      ) : (
        <h2>No Doctors Found</h2>
      )}
    </div>
  );
}
export default Home;
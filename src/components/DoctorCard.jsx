
function Doctorcard({ name, age, specialization, gender, salary }) {
  return (
    <div className="doctorcard">
      <img
        src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
        alt="Doctor"
        width="100"
        height="100"
      />

      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Specialization: {specialization}</p>
      <p>Gender: {gender}</p>
      <p>Salary: ₹{salary}</p>

      <button onClick={() => alert(`Doctor: ${name}`)}>
        View Details
      </button>
    </div>
  );
}

export default Doctorcard;

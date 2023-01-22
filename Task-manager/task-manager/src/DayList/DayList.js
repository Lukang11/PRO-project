import "./DayList.css";

function DayList() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday "];

  return (
    <>
      <ul>
        {days.map((day, index) => (
          <li key={index}>{day}</li>
        ))}
      </ul>
    </>
  );
}
export default DayList;

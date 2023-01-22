import "./DayList.css";

function DayList(props) {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday "];

  return (
    <>
      <ul>
        {days.map((day, index) => (
          <li
            key={index}
            onClick={(day) => {
              props.day(day);
            }}
          >
            {day}
          </li>
        ))}
      </ul>
    </>
  );
}
export default DayList;

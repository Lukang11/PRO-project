import "./DayList.css"

function DayList(){
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday ']

    return <>
        <ul>
            {days.map((day)=><li>{day}</li>)}
        </ul>
    </>
}
export default DayList;
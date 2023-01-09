import Content from "./Content/Content";
import Header from "./Header/Header";
import "./App.css"
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Register from "./Register/Register";
import DayList from "./DayList/DayList"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <DayList></DayList>
      <Content/>
      <Footer></Footer>
    </div>
  );
}

export default App;

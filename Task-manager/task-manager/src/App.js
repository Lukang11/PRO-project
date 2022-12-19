import Content from "./Content/Content";
import Header from "./Header/Header";
import "./App.css"
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content/>
      <Footer></Footer>
    </div>
  );
}

export default App;

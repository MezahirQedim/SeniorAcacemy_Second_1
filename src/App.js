import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Service from "./components/Service";
import Users from "./components/Users";
import Form from "./components/Form";
import { ThemeContex, LangContext } from "./context";
import Icons from "./components/Icons";

function App() {
  return (
    <div className="App">
      <LangContext>
        <ThemeContex>
          <Navbar />


          <Routes>
            <Route path="/home"    element={<Home />} />
            <Route path="/service" element={<Service test={"test"} />} />
            <Route path="/users"   element={<Users />} />
            <Route path="/form"    element={<Form />} />
            <Route path="/icons"    element={<Icons/>} />
            
          </Routes>


        </ThemeContex>
      </LangContext>
    </div>
  );
}

export default App;

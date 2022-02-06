import { Route, Routes } from "react-router";
import "./App.css";
// import EventCard from "./components/EventCard";
import EventDetail from "./pages/EventDetail";
import Login from "./pages/Login";
import EventUpdation from "./pages/EventUpdation";
import PrivateRoute from "./PrivateRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home/home";
import Events from "./pages/Events/events"
import Alcher from "./pages/Events/Alcher/Alcher"
import Robotics from "./pages/Events/Robotics/Robotics"
import Swc from "./pages/Events/Swc/Swc"
import Clubs from "./pages/Clubs/clubs"
import Others from "./pages/Others/others"
function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path="/login" exact element={<Login/>}></Route>

        <Route path="/" exact element={<PrivateRoute><Home/></PrivateRoute>}></Route>

        <Route path='/events' exact element={<PrivateRoute><Events/></PrivateRoute>} >
                <Route path='/events/Alcher' exact element={<PrivateRoute><Alcher /></PrivateRoute>} />
                <Route path='/events/Robotics' exact element={<PrivateRoute><Robotics /></PrivateRoute>} />
                <Route path='/events/Swc' exact element={<PrivateRoute><Swc /></PrivateRoute>} />
        </Route>

        <Route path='/clubs' exact element={<PrivateRoute><Clubs /></PrivateRoute>} />

        <Route path='/others' exact element={<PrivateRoute><Others /></PrivateRoute>} />

        <Route path="/eventdetail" exact element={<PrivateRoute><EventDetail/></PrivateRoute>}></Route>

        <Route path="/eventupdate" exact element={<PrivateRoute><EventUpdation/></PrivateRoute>}></Route>


        <Route path="*" element={<center>Page Not Found</center>}></Route>
      </Routes>
      </Layout>
    </>
  );
}

export default App;

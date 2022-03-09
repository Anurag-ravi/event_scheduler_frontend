import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import EventUpdation from "./pages/EventUpdation";
import PrivateRoute from "./PrivateRoute";
import Layout from "./components/Layout";
import Home from "./pages/Home/home";
import Events from "./pages/Events/events"
import Clubs from "./pages/Clubs/clubs"
import Others from "./pages/Others/others"
import EventDetail from "./pages/EventDetail";
function App() {
  return (
    <>
      <Layout>
      <Routes>

        <Route path="/login" exact element={<Login/>}></Route>

        <Route path="/" exact element={<PrivateRoute><Home /></PrivateRoute>}></Route>

        <Route path='/events' exact element={<PrivateRoute><Events/></PrivateRoute>} />
                <Route path='/events/alcher' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/robotics' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/swc' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/coding' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/aero' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/astro' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/ca' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/ee' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/prakriti' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/fnc' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/ed' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/ug' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/techniche' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/sail' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/ai' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/ccd' exact element={<PrivateRoute><Events /></PrivateRoute>} />
                <Route path='/events/other' exact element={<PrivateRoute><Events /></PrivateRoute>} />

        <Route path='/clubs' exact element={<PrivateRoute><Clubs /></PrivateRoute>} />

        <Route path='/others' exact element={<PrivateRoute><Others /></PrivateRoute>} />

        <Route path="/eventdetail/:event_id" element={<PrivateRoute><EventDetail/></PrivateRoute>}></Route>

        <Route path="/eventupdate" exact element={<PrivateRoute><EventUpdation/></PrivateRoute>}></Route>


        <Route path="*" element={<center>Page Not Found</center>}></Route>
      </Routes>
      </Layout>
    </>
  );
}

export default App;

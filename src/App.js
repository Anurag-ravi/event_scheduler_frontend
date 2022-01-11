import "./App.css";
import EventCard from "./components/EventCard";
// import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <Login /> */}
      <div className="flex flex-row justify-center pt-20">
        <EventCard />
      </div>
    </>
  );
}

export default App;

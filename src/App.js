import logo from "./logo.svg";
import "./App.css";
import JobInputForm from "./components/JobInputForm";
import MapDisplay from "./components/MapDisplay";

function App() {
  return (
    <div className="App">
      <JobInputForm />
      {/* <JobFilter /> */}
      <MapDisplay />
    </div>
  );
}

export default App;

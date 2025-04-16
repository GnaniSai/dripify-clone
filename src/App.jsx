import "./App.css";
import Hero from "./hero";
import Sales from "./sales";
import USP from "./usp";
import Leads from "./leads";
import Outreach from "./outreach";
import ABTest from "./abtest";
import Work from "./work";
function App() {
  return (
    <div className="p-6 max-sm:p-1">
      <Hero />
      <Sales />
      <USP />
      <Leads />
      <Outreach />
      <ABTest />
      <Work />
    </div>
  );
}

export default App;

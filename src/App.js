import ReactDOM from "react-dom";
import SearchParams from "./searchParams.js";

const App = () => {
  return (
    <div>
      <h1 id="my-brand">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

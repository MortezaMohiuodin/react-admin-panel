import ReactDom from "react-dom";
import Button from "@/src/components/Button/Index";
import Test from "@/src/components/Test/Index";

const App = () => (
  <div>
    <Button />
    <Test />
  </div>
);

ReactDom.render(<App />, document.getElementById("app"));

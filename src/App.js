import "./App.css";
import { SignUp } from "./Pages/Authentication/SignUp";
import { Login } from "./Pages/Authentication/Login";
// import Cart from "./Pages/Cart/Cart";
// import DateSelector from "./Pages/DateSelector/DateSelector";

import AllRoutes from "./Components/AllRoutes";

// import { Plans } from "./Pages/Plans/plans";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <DateSelector /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Register from "./scene/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/patient-register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

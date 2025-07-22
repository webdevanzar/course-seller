import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOut from "./layouts/Layout";
import Users from "./pages/Users";
import Tutorials from "./pages/Tutorials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Users />} />
            <Route path="/tutorials" element={<Tutorials />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

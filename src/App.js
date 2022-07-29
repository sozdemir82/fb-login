import Login from "./pages/Login";
import { ProductList } from "./pages/ProductList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/ProductList" element={<ProductList />} />
    </Routes>
  );
}

export default App;

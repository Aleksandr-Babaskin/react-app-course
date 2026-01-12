import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./assets/components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/home" element={<div>Home</div>} />
        <Route path="/forbidden" element={<div>Forbidden</div>} />
        <Route path="/addquestion" element={<div>Add Question</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

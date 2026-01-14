import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./assets/components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="forbidden" element={<div>Forbidden</div>} />
          <Route path="addquestion" element={<div>Add Question</div>} />
          <Route path="question/:id" element={<div>Question page</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Create from "./routes/Create";
import Edit from "./routes/Edit";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <div>
      <main className="px-6 py-6 sm:py-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

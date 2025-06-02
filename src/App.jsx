import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Attori from "./pages/Attori";

import DefaultLayout from "./Layout/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Attori" element={<Attori />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

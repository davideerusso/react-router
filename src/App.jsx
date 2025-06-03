import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Ricette from "./pages/Ricette";
import Dettaglio from "./pages/Dettaglio";

import DefaultLayout from "./Layout/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Ricette">
            <Route index element={<Ricette />} />
            <Route path=":id" element={<Dettaglio />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

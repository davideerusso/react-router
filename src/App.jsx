import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import PostCard from "./pages/PostCard";
import RicettePage from "./pages/RicettePage";
import DefaultLayout from "./Layout/DefaultLayout";

import { PostProvider } from "./componens/PostContext";

export default function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/ChiSiamo" element={<ChiSiamo />} />
            <Route path="/Ricette">
              <Route index element={<RicettePage />} />
              <Route path=":id" element={<PostCard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

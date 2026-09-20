import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { Header } from "./components/Header";
import { NotFound } from "./pages/Not-found";
import { Favorites } from "./pages/Favorites";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
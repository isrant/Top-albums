import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TopAlbums from "./pages/TopAlbums";
import AlbumDetails from "./pages/AlbumDetails";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<TopAlbums />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

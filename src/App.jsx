import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Amzclone from "./pages/AmzClone";
import DigitalX from "./pages/DigitalX";
import Lenux from "./pages/Lenux";
import Netflix from "./pages/Netflix";
import CkOdonto from "./components/CkOdonto";
import { LanguageContext } from "./components/LanguageContext";
import MyBlog from "./pages/MyBlog";



function App() {
  return (
    <>
      <LanguageContext >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/amzclone" element={<Amzclone />} />
        <Route path="/lenux" element={<Lenux />} />
        <Route path="/netflix" element={<Netflix />} />
        <Route path="/digitalx" element={<DigitalX />} />
        <Route path="/ckodonto" element={<CkOdonto />} />
        <Route path="/MyBlog" element={<MyBlog />} />
      </Routes>
      </LanguageContext>
    </>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SoftBackdrop from "./components/SoftBackdrop";
import Footer from "./components/Footer";
import LenisScroll from "./components/lenis";
import { Route, Routes } from "react-router-dom";
import Community from "./pages/Community";
import Generator from "./pages/Generator";
import Loading from "./pages/Loading";
import MyGenerations from "./pages/MyGenerations";
import Plans from "./pages/Plans";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <SoftBackdrop />
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/result/:projectId" element={<Result />} />
        <Route path="/my-generations" element={<MyGenerations />} />
        <Route path="/community" element={<Community />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <Home />
      <Footer />
    </>
  );
}
export default App;

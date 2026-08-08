import Home from "./components/Home";
import About from "./components/About";
import CursorDust from "./components/CursorDust";
import ShatterPreloader from "./components/ShatterPreloader";
function App() {
  return (
    <>
      <ShatterPreloader />
      <CursorDust />
      <Home />
      <About />
    </>
  );
}

export default App;
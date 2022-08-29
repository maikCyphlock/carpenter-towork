import { tw } from "twind";
import Navbar from "./components/navbar";
import ToWork from "./components/ToWork";

function App() {
  return (
    <>
      <div className={tw(" min-h-screen")}>
        <Navbar />
        <ToWork />
      </div>
      <div className="flex justify-center p-8 bg-blue-900 flex-col items-center">
        <img
          src="carpenter.svg"
          className="object-scale-down h-48 w-96"
          alt=""
        />
        <h2 className="text-6xl text-blue-100" style={{fontFamily: 'Bebas Neue'}}>Carpinteria joel</h2>
      </div>
    </>
  );
}

export default App;

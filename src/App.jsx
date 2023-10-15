import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="bg-white mx-4 px-5 flex gap-2 flex-wrap p-4 rounded-full top-10 fixed">
          <button onClick={()=>setColor("red")} className="bg-red-600 text-white px-4 py-2 rounded-full">
            Red
          </button>
          <button onClick={()=>setColor("green")} className="bg-green-600 text-white px-4 py-2 rounded-full">
            Green
          </button>
          <button onClick={()=>setColor("blue")} className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

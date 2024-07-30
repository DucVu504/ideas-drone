import {IoMdCodeWorking,} from "react-icons/io";
import { GoHome } from "react-icons/go";
import { PiNotePencilLight,PiPolygon,PiVectorTwoLight } from "react-icons/pi";
import { VscOpenPreview } from "react-icons/vsc";



const Toolbar = ({ setMode, mode }) => {
    return (
      <div className="fixed z-1 top-0 left-0 my-32 mx-3 flex flex-col bg-white bg-opacity-60 hover:bg-opacity-100  rounded-md shadow-lg p-1 space-y-3">
        <button className={`p-1 rounded ${mode === "distance" ? "bg-green-200" : "hover:bg-green-200"}`} onClick={() => setMode("distance")}>
          <IoMdCodeWorking size={24} />
        </button>
        <button className={`p-1 rounded ${mode === "area" ? "bg-green-200" : "hover:bg-green-200"}`} onClick={() => setMode("area")}>
          <PiPolygon size={24} />
        </button>
        <button className={`p-1 rounded ${mode === "annotation" ? "bg-green-200" : "hover:bg-green-200"}`} onClick={() => setMode("annotation")}>
          <PiNotePencilLight size={24} />
        </button>
        <button className="p-1 hover:bg-green-200 rounded">
          <PiVectorTwoLight size={24} />
        </button>
        <button className="p-1 hover:bg-green-200 rounded">
          <VscOpenPreview size={24} />
        </button>
        <button className="p-1 hover:bg-green-200 rounded">
          <GoHome size={24} />
        </button>
      </div>
    );
  };

  export default Toolbar;
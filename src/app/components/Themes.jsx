import { University, HeartPulse, CircleDollarSign } from "lucide-react";

function Themes() {
  return (
    <div id="themes" className=" " >
    <h1 className="text-4xl m-10 text-white  text-center ">THEMES</h1>
    <div className=  " text-white min-h-screen  grid grid-cols-2  md:grid-cols-3  gap-6 justify-items-center p-4">
      

      <University size={100} />
      
      <HeartPulse size={100} />
      <CircleDollarSign size={100} />
      <University size={100} />
      <HeartPulse size={100} />
      <CircleDollarSign size={100} />
    </div>
    </div>
  );
}

export default Themes;

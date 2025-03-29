import Image from "next/image"
import sp1 from "./images/sp1.png"
import sp2 from "./images/sp2.png"
export default function Sponsor (){
    return (
        <div className="mx-auto  place-content-center place-items-center m-20   text-center " >
           <h1 className="text-white text-6xl m-10  "  >Meet Our Sponsors</h1>
         
            <div className="mx-auto flex flex-col  justify-center items-center   " >
                <Image src={sp1} alt="Sponsor 1"  width={500} height={500} />
                <Image src={sp2} alt="Sponsor 2" width={500} height={500} />
            </div>
        </div>
    )
}
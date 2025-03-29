import Image, { StaticImageData } from "next/image"

interface TeamMember  {
  name:  string  ,
  image: string | StaticImageData,
  designation:string,
  linkedin: string,

  // add other properties as needed
};

function TeamCard({ image, name, designation, linkedin }: TeamMember) {
  return (
    <div className=" text-white p-4  rounded-lg shadow-lg   flex flex-col items-center">
      <Image src={image} alt="image" className="rounded-full mb-4 w-40 h-40 "  />
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-2xl mb-4">{designation}</p>
      <div className="flex space-x-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 text-xl"
        >
          LinkedIn
        </a>
       
      </div>
    </div>
  );
} 

export default TeamCard;

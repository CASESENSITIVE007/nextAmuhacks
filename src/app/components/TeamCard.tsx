import Image, { StaticImageData } from "next/image"

interface TeamMember  {
  name:  string  ,
  image: string | StaticImageData,
  designation:string,
  linkedin: string,
  github: string
  // add other properties as needed
};

function TeamCard({ image, name, designation, linkedin,github }: TeamMember) {
  return (
    <div className=" text-white p-4  rounded-lg shadow-lg   flex flex-col items-center">
      <Image src={image} alt="image" className="rounded-full mb-4" width={160} height={160} />
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
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700  text-xl"
        >
          GitHub
        </a>
      </div>
    </div>
  );
} 

export default TeamCard;

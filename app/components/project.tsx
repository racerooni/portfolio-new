import { projektjeim } from "@/lib/data";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projektjeim)[number];

const Project: React.FC<ProjectProps> = ({
  nev,
  leiras,
  tags,
  imageUrl,
  repo,
}) => {
  return (
    <section className="bg-gray-100 max-w-[40rem] border-blue-600/10">
      <div className="flex flex-col md:flex-row justify-between md:min-h-[15rem] py-2 px-3 border border-black/10 overflow-hidden rounded-md">
        <div className="md:w-1/2 relative">
          <h3 className="text-2xl font-bold mb-4">
            {nev}
            <a href={repo} target="_blank">
              <BsGithub className="w-6 h-6 inline-block ms-2 transition duration-200 hover:rotate-[360deg] hover:scale-110" />
            </a>
          </h3>
          <p className="text-gray-600">{leiras}</p>
          <ul className="flex flex-wrap gap-2 mt-6 mb-3 ">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-gray-700 text-white rounded-xl py-1 px-2 text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex md:flex-col">
          <div className="w-full h-full">
            <Image src={imageUrl} alt="projekt" className="rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;

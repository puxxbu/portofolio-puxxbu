import Icon from "@mdi/react";

import { mdiGithub } from "@mdi/js";
import Porto2 from "../assets/porto-admin.png";
import PortoPatuli from "../assets/porto-patuli.png";

interface Work {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const Works: Work[] = [
  {
    title: "Patuli (Pahlawan Tuli)",
    description:
      "Patuli (Pahlawan Tuli) is an Android-based application to learn and communicate sign language using Bisindo gestures with integrated machine-learning.",
    image: PortoPatuli,
    link: "https://github.com/Patuli-Pahlawan-Tuli",
  },

  {
    title: "Hotel Admin Dashboard",
    description:
      "This admin dashboard project is built using React and Typescript. The functionalities of this admin dashboard include CRUD, booking transactions, check-in, check-out and reports for hotel owners.",
    image: Porto2,
    link: "https://github.com/puxxbu",
  },
];

export const MyWorks = () => {
  return (
    <div
      className="
            grid 
            grid-cols-2
            gap-3.5
            mobile:flex
            mobile:snap-x
            mobile:snap-mandatory
            mobile:overflow-auto
        "
    >
      {Works.map((work, i) => (
        <div
          className="
                    snap-center
                    min-w-[200px]
                    flex
                    p-0.5
                    flex-col
                    gap-3.5
                    rounded-md
                    bg-[var(--secondary)]
                    text-[var(--secondary-text)]
                "
          key={i}
        >
          {/* img */}
          <img
            className="min-h-[200px] max-h-[200px] object-contain"
            alt={work.image}
            src={work.image}
          ></img>

          {/* title, desc & action */}
          <div className="flex-1 flex flex-col gap-3.5 p-3">
            <p className="font-semibold">{work.title}</p>

            <div className="flex items-start mobile:flex-col gap-3.5">
              <p className="text-sm line-clamp-5">{work.description}</p>
            </div>
            <button
              className="
              mt-auto
              rounded-md
              px-3
              py-1.5
              text-sm
              border
              border-[var(--primary)]
              text-[var(--primary)]
              hover:bg-[var(--primary)]
              hover:text-[var(--primary-text)]
              flex
              items-center
              justify-center
                "
              onClick={() => window.open(work.link, "_blank")}
            >
              <div className="flex items-center">
                <Icon path={mdiGithub} size={1} className="mr-1"></Icon>
                <span>View Code</span>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

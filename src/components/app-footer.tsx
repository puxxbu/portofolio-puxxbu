// import { UilFacebook, UilInstagram, UilTwitter } from '@iconscout/react-unicons'

import { mdiFacebook, mdiInstagram, mdiTwitter } from "@mdi/js";
import Icon from "@mdi/react";

export const AppFooter = () => {
  return (
    <div
      className="
        px-6
        py-3.5
        bg-[var(--primary)]
        text-[var(--primary-text)]
        mt-[90px]
    "
    >
      <div className="text-center">
        <p className="text-xl font-signature mb-1.5">Mononymperson</p>
        <p className="mb-3.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi
          delectus eum at blanditiis repudiandae perspiciatis explicabo tenetur
          iusto velit voluptate pariatur, ab ex dolor libero voluptatem
          cupiditate laboriosam? Ipsa?
        </p>
      </div>

      <div className="flex justify-center items-center gap-3.5">
        <a href="#">
          <Icon path={mdiTwitter} size={1}></Icon>
        </a>
        <a href="#">
          <Icon path={mdiInstagram} size={1}></Icon>
        </a>
        <a href="#">
          <Icon path={mdiFacebook} size={1}></Icon>
        </a>
      </div>

      <p className="text-center text-sm text-light/70 dark:text-dark/70 mt-12">
        &#169; Mononymperson. Allright Reserved
      </p>
    </div>
  );
};

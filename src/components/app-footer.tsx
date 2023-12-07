// import { UilFacebook, UilInstagram, UilTwitter } from '@iconscout/react-unicons'

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
      {/* <div className="text-center">
        <p className="text-xl font-signature mb-1.5">Mononymperson</p>
        <p className="mb-3.5"></p>
      </div> */}

      {/* <div className="flex justify-center items-center gap-3.5">
        <a href="#">
          <Icon path={mdiTwitter} size={1}></Icon>
        </a>
        <a href="#">
          <Icon path={mdiInstagram} size={1}></Icon>
        </a>
        <a href="#">
          <Icon path={mdiFacebook} size={1}></Icon>
        </a>
      </div> */}

      <p className="mt-12 text-sm text-center text-light/70 dark:text-dark/70">
        &#169; puxxbu. Allright Reserved
      </p>
    </div>
  );
};

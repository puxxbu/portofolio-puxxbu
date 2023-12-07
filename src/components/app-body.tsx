// import {
//     UilDownloadAlt,
//     UilEnvelope,
//     UilGithub,
//     UilLinkedin,
//     UilMapMarker,
//     UilMessage,
//     UilWhatsapp,
// } from '@iconscout/react-unicons'

import {
  mdiDownload,
  mdiGithub,
  mdiLinkedin,
  mdiMail,
  mdiMap,
  mdiMessage,
  mdiWhatsapp,
} from "@mdi/js";
import Icon from "@mdi/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProfilePicture from "../assets/profile-vano.jpg";
import ResumePDF from "../assets/resume-ats-vano.pdf";
import { Container } from "./container";
import { MyWorks } from "./my-works";
import { Section } from "./section";
import { SectionDescription } from "./section-description";
import { SectionLink } from "./section-link";
import { SectionSubtitle } from "./section-subtitle";
import { SectionTitle } from "./section-title";
import { Skills } from "./skills";
export const AppBody = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1200,
      easing: "ease-out-sine",
    });
  });
  return (
    <Container>
      {/* me */}
      <Section
        id="home"
        data-aos="fade-up"
        className="flex items-center gap-6 mobile:flex-col mobile:items-center"
      >
        <div className="flex flex-col items-start flex-1 mobile:items-center mobile:text-center">
          <SectionTitle>Benidiktus Valerino Gozen</SectionTitle>
          <SectionSubtitle>Full stack Developer</SectionSubtitle>
          <SectionDescription>
            Hello 👋, My name is{" "}
            <span className="text-[var(--primary)]">
              Benidiktus Valerino Gozen (Vano)
            </span>{" "}
            , and I am a Junior Developer actively involved in creating Web and
            Android applications. I am driven by a strong passion for technology
            and seek to make a positive impact through my work. In addition to
            my current focus, I am eager to expand my skills by delving into
            cloud computing and enhancing my understanding of back-end and
            front-end development.
          </SectionDescription>

          <SectionLink href="https://wa.me/+6289516966720">
            <span>Contact me</span>
            <Icon path={mdiMessage} size={1}></Icon>
          </SectionLink>
        </div>

        <img
          className="w-[300px] h-[500px] object-cover"
          src={ProfilePicture}
          alt="profile picture"
        />

        <div className="flex flex-col items-center mobile:flex-row gap-3.5 text-[var(--primary)]">
          <a href="https://github.com/puxxbu">
            <Icon path={mdiGithub} size={1}></Icon>
          </a>

          <a href="https://www.linkedin.com/in/valerino-gozen-995473148/">
            <Icon path={mdiLinkedin} size={1}></Icon>
          </a>
        </div>
      </Section>

      {/* about */}
      <Section data-aos="fade-up" id="about">
        <div className="text-center">
          <SectionTitle>About</SectionTitle>
          <SectionSubtitle>My Introduction</SectionSubtitle>
        </div>

        <div className="flex items-center mobile:flex-col gap-x-6 gap-y-12">
          {/* image and text */}
          <div className="flex items-center gap-3.5">
            {/* <img
              className="w-[200px] rounded-md"
              src={AboutMePic}
              alt="about me picture"
            /> */}

            <div className="line-clamp-8">
              I have recently completed my largest project to date, which
              involved creating a sign language translator application using
              Kotlin and Tensorflow Lite as part of the Bangkit Academy 2023
              capstone. This experience has improved my programming skills and
              allowed me to develop an application that bridges communication
              barriers between sign language users and non-users. Now, I am
              eagerly looking forward to taking on new projects and further
              advancing my abilities as a programmer.
            </div>
          </div>

          {/* experience & button */}
          <div className="flex flex-col items-center gap-3.5">
            <div className="flex items-center gap-3.5">
              <div className="text-center mx-1.5">
                <p className="text-xl font-semibold">1+</p>
                <p>Years Experience</p>
              </div>

              <div className="text-center mx-1.5">
                <p className="text-xl font-semibold">3+</p>
                <p>Software Projects</p>
              </div>

              <div className="text-center mx-1.5">
                <p className="text-xl font-semibold">5+</p>
                <p>Course Certificates</p>
              </div>
            </div>

            <SectionLink href={ResumePDF} download="resume-vano.pdf">
              <span>Download CV</span>
              <Icon path={mdiDownload} size={1}></Icon>
            </SectionLink>
          </div>
        </div>
      </Section>

      {/* skills */}
      <Section data-aos="fade-up" id="skills">
        <div className="text-center">
          <SectionTitle>Skills</SectionTitle>
          <SectionSubtitle>My technical skills</SectionSubtitle>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <Skills
              title="Backend Developer"
              items={["PHP", "Nodejs", "Laravel", "Express.js"]}
            ></Skills>
            <Skills
              title="Frontend Developer"
              items={["HTML", "CSS", "Javascript/Typescript", "Reactjs"]}
            ></Skills>
            <Skills title="Database" items={["MySQL", "PostgreSQL"]}></Skills>
          </div>
        </div>
      </Section>

      {/* portofolio */}
      <Section data-aos="fade-up" id="portofolio">
        <div className="text-center">
          <SectionTitle>Portofolio</SectionTitle>
          <SectionSubtitle>My works</SectionSubtitle>
        </div>

        <MyWorks></MyWorks>
      </Section>

      {/* contact */}
      <Section data-aos="fade-up" id="contactme">
        <div className="text-center">
          <SectionTitle>Contact</SectionTitle>
          <SectionSubtitle>Get in touch</SectionSubtitle>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {/* left */}
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-1.5 text-[var(--primary)]">
              <Icon path={mdiMail} size={1}></Icon>
              <div className="p-1">
                <p className="text-xl">Email</p>
                <p className="text-[var(--text)]">bvgozen@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[var(--primary)]">
              <Icon path={mdiWhatsapp} size={1}></Icon>
              <div className="p-1">
                <p className="text-xl">Whatsapp</p>
                <p className="text-[var(--text)]">+6289516966720</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[var(--primary)]">
              <Icon path={mdiMap} size={1}></Icon>
              <div className="p-1">
                <p className="text-xl">Location</p>
                <p className="text-[var(--text)]">Sleman, Yogyakarta</p>
              </div>
            </div>
          </div>

          {/* right */}
          {/* <div className="flex items-start flex-col gap-3.5 min-w-[300px]">
            <Field type="text" label="Name"></Field>
            <Field type="email" label="Email"></Field>
            <Field type="textarea" label="Message"></Field>
            <SectionLink className="ml-auto">
              <span>Send</span>
              <Icon path={mdiMessage} size={1}></Icon>
            </SectionLink>
          </div> */}
        </div>
      </Section>
    </Container>
  );
};

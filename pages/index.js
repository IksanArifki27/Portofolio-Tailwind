import Head from "next/head";
import Image from "next/image";
import iksan from "../public/iksan.png";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import design from "../public/design.png";
import code from "../public/code.png";
import sistemPegawai from "../public/sistem pegawai.png";
import parkir from "../public/e parkir.png";
import webDestinasi from "../public/web destinasi.png";
import sioktig from "../public/sioktig.png";
import idplay from "../public/idplay.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold font-poppins dark:text-white">
              iksanarifki
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer dark:text-yellow-300"
                />
              </li>
              <li>
                <a
                  href="CV.pdf"
                  download="CV Iksan Arifki.pdf"
                  // alt="alt text"
                  className="bg-gradient-to-tr from-cyan-500 to-teal-500 text-white px-4 ml-4 py-2 rounded-lg cursor-pointer font-poppins text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-5">
            <h2 className="text-5xl text-teal-500 font-bold  py-1  ">
              Mohammad Iksan arifki
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Developers and Designer
            </h3>
          </div>
          <div className="flex text-5xl justify-center text-teal-500  gap-7">
            {/* <AiFillLinkedin className="cursor-pointer" /> */}
            <a
              href="https://www.linkedin.com/in/iksan-arifki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/iksanarifki27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://github.com/IksanArifki27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="relative bg-gradient-to-tr from-teal-400 border-solid border- to-cyan-700 w-60 h-60 my-10 rounded-full overflow-hidden mx-auto ">
            <Image src={iksan} className="mt-5" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-bold text-teal-500">About Me</h3>
            <p className="text-sm text-gray-400 dark:text-white">
              My name is Mohammad Iksan Arifki, and I am an Informatics
              Engineering student. I have a strong background in web development
              skills and am passionate about using my skills to create
              innovative and easy-to-use websites.
            </p>
            <p className="text-sm text-gray-400 dark:text-white">
              In my free time, I like to keep up with the latest web development
              trends and technologies. I am also an active member of the Student
              Activity Unit and regularly attend meetings and conferences to
              stay connected to the community.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-xl rounded-md p-10 my-10  mx-auto dark:border-solid dark:border-4 dark:border-teal-400">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold pt-2 pb-4 dark:text-teal-400">
                Designs
              </h3>

              <h4 className="py-2 font-medium text-teal-400">
                Design Tools Can use
              </h4>
              <p className="py-1 text-gray-800 dark:text-white">
                Adobe Photoshop
              </p>
              <p className="py-1 text-gray-800 dark:text-white">
                Adobe Ilustrator
              </p>
              <p className="py-1 text-gray-800 dark:text-white">Figma</p>
            </div>
            <div className="text-center shadow-xl rounded-md p-10 my-10  mx-auto dark:border-solid dark:border-4 dark:border-teal-400 ">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-xl font-bold pt-2 pb-4 dark:text-teal-400">
                Development
              </h3>

              <h4 className="py-2 font-medium text-teal-400">
                Technology that I use
              </h4>

              <p className="py-1 text-gray-800 dark:text-white">
                HTML,CSS & javascript
              </p>
              <p className="py-1 text-gray-800 dark:text-white">
                ReactJs & Express js
              </p>
              <p className="py-1 text-gray-800 dark:text-white">
                PHP & Laravel
              </p>
              <p className="py-1 text-gray-800 dark:text-white">
                Bootstrap & TailwindCSS
              </p>
              <p className="py-1 text-gray-800 dark:text-white">
                Mysql & MongoDB
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 font-bold text-teal-500">
              Portofolio
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-100">
              Welcome to my web development portfolio. On this page, you will
              find a selection of my recent projects. Each project includes a
              brief description of the portfolio I completed and a link to the
              github site.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-100">
              I am always looking for new opportunities to grow and learn as a
              web developer, and I welcome the opportunity to work on
              challenging and interesting projects. If you are interested in
              discussing a potential project or collaboration, please feel free
              to contact me. Thanks for visiting my portfolio!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex lg:flex-row lg:flex-wrap ">
            <div className="flex-1 basis-1/3">
              <div className="p-2 bg-gray-100 rounded-xl shadow-md dark:bg-slate-700">
                <Image
                  src={sistemPegawai}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
                {/* caption gambar */}
                <p className="font-semibold text-lg text-center font-poppins my-2 dark:text-white ">
                  Sistem Manajemen Pegawai
                </p>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              <div className="p-2 bg-gray-100 rounded-xl shadow-md dark:bg-slate-700">
                <Image
                  src={idplay}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
                {/* caption gambar */}
                <p className="font-semibold text-lg text-center font-poppins my-2 dark:text-white ">
                  IDPLAY Provider
                </p>
              </div>
            </div>

            <div className="flex-1 basis-1/3">
              <div className="p-2 bg-gray-100 rounded-xl shadow-md dark:bg-slate-700">
                <Image
                  src={webDestinasi}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
                {/* caption gambar */}
                <p className="font-semibold text-lg text-center font-poppins my-2 dark:text-white ">
                  Sistem Destinasi Wisata
                </p>
              </div>
            </div>
            <div className="flex-1 basis-1/3">
              <div className="p-2 bg-gray-100 rounded-xl shadow-md dark:bg-slate-700">
                <Image
                  src={sioktig}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                />
                {/* caption gambar */}
                <p className="font-semibold text-lg text-center font-poppins my-2 dark:text-white ">
                  Sistem Informasi K3
                </p>
              </div>
            </div>
          </div>
          <div className="my-30"></div>
        </section>
      </main>
      <footer>
        <div className="bg-gradient-to-tr from-teal-500 to-cyan-500 lg:w-full">
          <h2 className="text-white text-center p-3">Create By Iksan arifki</h2>
        </div>
      </footer>
    </div>
  );
}

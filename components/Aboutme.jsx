import React from "react";
import design from "../public/design.png";
import code from "../public/code.png";
import Image from "next/image";
export default function Aboutme() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 font-bold text-teal-500">About Me</h3>
        <p className="text-sm text-gray-400 dark:text-white">
          My name is Mohammad Iksan Arifki, and I am an Informatics Engineering
          student. I have a strong background in web development skills and am
          passionate about using my skills to create innovative and easy-to-use
          websites.
        </p>
        <p className="text-sm text-gray-400 dark:text-white">
          In my free time, I like to keep up with the latest web development
          trends and technologies. I am also an active member of the Student
          Activity Unit and regularly attend meetings and conferences to stay
          connected to the community.
        </p>
      </div>
      <div className="lg:flex gap-10 ">
        <div className="text-center shadow-xl rounded-md p-10 my-10  mx-auto dark:border-solid dark:border-4 dark:border-teal-400">
          <Image src={design} width={100} height={100} className="mx-auto" />
          <h3 className="text-xl font-bold pt-2 pb-4 dark:text-teal-400">
            Designs
          </h3>

          <h4 className="py-2 font-medium text-teal-400">
            Design Tools Can use
          </h4>
          <p className="py-1 text-gray-800 dark:text-white">Adobe Photoshop</p>
          <p className="py-1 text-gray-800 dark:text-white">Adobe Ilustrator</p>
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
          <p className="py-1 text-gray-800 dark:text-white">PHP & Laravel</p>
          <p className="py-1 text-gray-800 dark:text-white">
            Bootstrap & TailwindCSS
          </p>
          <p className="py-1 text-gray-800 dark:text-white">Mysql & MongoDB</p>
        </div>
      </div>
    </section>
  );
}

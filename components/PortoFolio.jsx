import React from "react";
import sistemPegawai from "../public/sistem pegawai.png";
import webDestinasi from "../public/web destinasi.png";
import sioktig from "../public/sioktig.png";
import idplay from "../public/idplay.png";
import Image from "next/image";
export default function PortoFolio() {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 font-bold text-teal-500">Portofolio</h3>
        <p className="text-sm text-gray-400 dark:text-gray-100">
          Welcome to my web development portfolio. On this page, you will find a
          selection of my recent projects. Each project includes a brief
          description of the portfolio I completed and a link to the github
          site.
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-100">
          I am always looking for new opportunities to grow and learn as a web
          developer, and I welcome the opportunity to work on challenging and
          interesting projects. If you are interested in discussing a potential
          project or collaboration, please feel free to contact me. Thanks for
          visiting my portfolio!
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
  );
}

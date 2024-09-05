"use client";

import React, { useState } from "react";
import Modal from "./../ui/Modal";
import Image from "next/image";

function UnderConstructionModal() {
  const [open, setOpen] = useState(true);
  return (
    <Modal isOpen={open}>
      <div className="bg-gradient-to-br from-slate-800 to-slate-800/[0.2] p-10 flex flex-col justify-center items-center g-slate-800/[0.8]">
        <Image
          width={400}
          height={400}
          src="/under-construction.png"
          alt="Under construction"
          className="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">
          Site is under maintenance
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          We have a lot of work ahead of us, and are aware of site not being
          responsive as well. We are working hard to improve the user
          experience. Stay tuned!
        </p>
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
          Our developers are a little too occupied with some important work 👀
          🤑
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => setOpen(false)}
            className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default UnderConstructionModal;

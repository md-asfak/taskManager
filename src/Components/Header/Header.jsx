import {
  ChevronDown,
  NotificationsOutline,
  PersonCircle,
  AddOutline,
  SettingsOutline,
  ShareSocialOutline,
} from "react-ionicons";

import Modal from "../Modal/Modal";
import { useState } from "react";

const Navbar = () => {
  const [modal, SetModal] = useState(false);

  return (
    <>
      <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
        <div className="flex  items-center gap- cursor-pointer">
          <PersonCircle color="#fb923c" width={"28px"} height={"28px"} />
          <span className="text-orange-400 font-semibold md:text-lg text-sm whitespace-nowrap">
            Board Name
          </span>
          <ChevronDown color="#fb923c" width={"16px"} height={"16px"} />
        </div>
        <button
          onClick={() => SetModal(!modal)}
          className="md:w-[700px] w-[130px] h-[40px] bg-gray-100 rounded-lg hover:bg-orange-300 text-[#555] m-7 py-[10px] px-3 flex flex-row items-center justify-center gap-2"
        >
          <AddOutline color={"#555"} />
          Add Task
        </button>
        <div className="md:flex hidden items-center gap-4">
          <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
            <ShareSocialOutline color={"#444"} />
          </div>
          <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
            <SettingsOutline color={"#444"} />
          </div>
          <div className="grid place-items-center bg-gray-100 rounded-full p-2 cursor-pointer">
            <NotificationsOutline color={"#444"} />
          </div>
        </div>
      </div>
      {modal && (
        <div>
          <Modal onClose={() => SetModal(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;

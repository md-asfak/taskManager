import React, { useState } from "react";
import { X } from "lucide-react";

function Modal({ onClose }) {
  const [input, setInput] = useState({
    title: "",
    description: "",
    date: "",
  });

  const hundleSubmit = () => {
    localStorage.setItem("User", JSON.stringify(input));
  };
  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <div className=" flex flex-col mt-10 gap-5 ">
        <button onClick={onClose} className="place-self-end text-white ">
          <X />
        </button>
        <form>
          <div className=" flex flex-col gap-5 bg-white w-[450px] justify-center items-center py-10 rounded-md">
            <input
              type="text"
              required
              placeholder="Title"
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              className="w-[350px] h-[45px] p-5 font-semibold bg-[#f1f5f9] border-[1px] outline-none border-gray-400 rounded-md "
            />
            <input
              type="text"
              value={input.description}
              onChange={(e) =>
                setInput({ ...input, description: e.target.value })
              }
              required
              placeholder="Description"
              className="w-[350px] h-[45px] p-5 font-semibold bg-[#f1f5f9] border-[1px] outline-none border-gray-400 rounded-md "
            />

            <input
              type="date"
              value={input.date}
              onChange={(e) => setInput({ ...input, date: e.target.value })}
              required
              className="w-[350px] h-[45px] px-5 font-semibold bg-[#f1f5f9] border-[1px] outline-none border-gray-400 rounded-md "
            />

            <button
              type="submit"
              onClick={hundleSubmit}
              className="w-[350px] h-[45px]  font-semibold bg-orange-400 border-[1px] rounded-md text-white"
            >
              Submit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;

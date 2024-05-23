import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Update() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    date: "",
  });

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(" http://localhost:3000/User" + id)
      .then((res) => {
        console.log(res);
        setInput({
          ...input,
          title: res.data.title,
          description: res.data.description,
          date: res.data.date,
        });
      })
      .catch((error) => {
        console.log("This Is Error", error);
      });
  }, []);

  const UpdateHundler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/User" + id);
  };
  return (
    <>
      <div className="md:pl-[250px] mt-[-400px] pl-[60px] pr-[20px] w-full h-full overflow-y-auto flex justify-center items-center">
        <form onSubmit={UpdateHundler}>
          <div className=" flex flex-col gap-5 bg-white w-[450px] justify-center items-center py-10 rounded-md">
            <input
              type="text"
              required
              value={input.title}
              onChange={(e) => setInput({ ...input, title: e.target.value })}
              placeholder="Title"
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
              className="w-[350px] h-[45px]  font-semibold bg-orange-400 border-[1px] rounded-md text-white"
            >
              Update Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;

import React, { useEffect, useState } from "react";
import { items } from "../Data/DataBes";
import { AddOutline } from "react-ionicons";
import Modal from "../Modal/Modal";

const TaskManager = () => {
  const [modal, SetModal] = useState(false);
  const [data, setData] = useState([]);
  const [radio, setRadio] = useState(false);

  const radioHundler = () => {
    setRadio(!radio);
  };

  ///////////// localStorage  Get //////////////////
  useEffect(() => {
    const userLoger = JSON.parse(localStorage.getItem("User"));
    console.log(userLoger);
    setData([...data, userLoger]);
  }, []);

  ////////// Deleted Function //////////////////
  function hundleDel(index) {
    const del = [...data];
    del.splice(index, 1);
    setData(del);
    // localStorage.removeItem("Usera");
  }
  return (
    <div className="p-5">
      {data.length == 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h1>Data Not Available</h1>
          <button
            onClick={() => SetModal(!modal)}
            className="md:w-[400px] w-[130px] h-[40px] bg-gray-100 rounded-lg hover:bg-orange-300 text-[#555] m-7 py-[10px] px-3 flex flex-row items-center justify-center gap-2"
          >
            <AddOutline color={"#555"} />
            Add Task
          </button>
          {modal && (
            <div>
              <Modal onClose={() => SetModal(false)} />
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-5">
            {items.map((el) => {
              return (
                <div className="border-[1px] px-5 py-5">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-semibold">{el.title}</h1>
                    <p>{el.description}</p>
                    <p>{el.date}</p>
                  </div>
                  <div className="flex gap-5 items-center pt-5 ">
                    <>
                      <button
                        onClick={radioHundler}
                        className=" bg-[#d7f9ee] text-[#5b8476] px-1 py-1 font-semibold rounded-md "
                      >
                        {radio ? "Active" : "Inactive"}
                      </button>
                    </>
                  </div>
                  <div className="flex justify-start gap-5 items-center py-5">
                    <button className="bg-green-600 text-white px-2 py-1 rounded-md ">
                      Edit
                    </button>
                    <button
                      className="bg-red text-white px-2 py-1 rounded-md "
                      onClick={() => hundleDel(el)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskManager;

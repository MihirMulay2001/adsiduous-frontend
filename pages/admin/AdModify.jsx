import React, { useState } from "react";
import data from "../../data/addata.json";

export default function AdModify() {
  return (
    <div>
      <div className="w-11/12 m-auto my-20 md:w-8/12">
        <div>
          <button className="inline-block bg-orange-500 rounded-md p-3 font-bold">
            Add new Advertisement
          </button>
        </div>
        <div>
          {data.map((_d) => (
            <AdStatus key={_d.id} data={_d} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdStatus({ data }) {
  const [editStatus, setEditStatus] = useState();

  const handleEditStatus = (e) => {
    e.preventDefault();
    setEditStatus((prev) => !prev);
  };
  return (
    <div className="shadow-md bg-white my-10 p-5 rounded-sm">
      <div className="text-lg font-bold">{data.title}</div>
      <div className="border-2 border-gray w-1/3 p-2 my-3">{data.tag}</div>
      <div className="border-2 border-gray w-1/4 p-2 my-3">
        {data.location[1]}
      </div>
      <div className="border-2 border-gray w-1/6 p-2 my-3">{data.size}</div>
      {!editStatus ? (
        <button
          className="bg-blue-300 py-1 px-4 rounded-sm"
          onClick={handleEditStatus}
        >
          Edit
        </button>
      ) : (
        <div>
          <button
            className="bg-blue-400 py-1 px-4 rounded-sm mr-4"
            onClick={handleEditStatus}
          >
            Cancel
          </button>
          <button
            className="bg-green-400 py-1 px-4 rounded-sm"
            onClick={handleEditStatus}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}

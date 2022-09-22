import React, { useState, useReducer } from "react";
import useFetcher from "../../hooks/useFetcher";

export default function AdModify() {
  const { loading, error, data } = useFetcher("http://localhost:3004/ads");
  const [addingItem, setAddingItem] = useState(false);

  if (loading) return <div>Loading....</div>;
  if (error && !loading) return <div>Error....</div>;
  console.log(data);
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

function AdStatus({ data: _Data }) {
  const [editStatus, setEditStatus] = useState(false);
  const [data, setData] = useState(_Data);
  const forceUpdate = useReducer((x) => x + 1, 0)[1];

  const handleEditStatus = (e) => {
    setEditStatus((prev) => !prev);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (!editStatus) return;
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancelBtn = (e) => {
    e.preventDefault();
    setData(_Data);
    handleEditStatus();
  };
  return (
    <div className="shadow-md bg-white my-10 p-5 rounded-sm">
      <div className="text-lg font-bold">{data.title}</div>
      <input
        type="text"
        className="border-2 border-gray w-1/3 p-2 my-3 outline-none block"
        value={data.tag}
        name="tag"
        onChange={handleEdit}
      />
      <input
        type="text"
        value={data.location[1]}
        name="location"
        className="border-2 border-gray w-1/4 p-2 my-3 block"
      />
      <input
        type="text"
        value={data.size}
        name="size"
        className="border-2 border-gray w-1/6 p-2 my-3 block"
      />
      {!editStatus ? (
        <button
          className="bg-blue-300 py-1 px-4 rounded-sm "
          onClick={handleEditStatus}
        >
          Edit
        </button>
      ) : (
        <div>
          <button
            className="bg-blue-400 py-1 px-4 rounded-sm mr-4"
            onClick={handleCancelBtn}
          >
            Cancel
          </button>
          <button className="bg-green-400 py-1 px-4 rounded-sm" onClick="">
            Save
          </button>
        </div>
      )}
    </div>
  );
}

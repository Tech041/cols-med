import React, { useState } from "react";
import apiRequest from "../utils/apiRequest";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const EditListing = ({ exit, desc, id, name }) => {
  const [newDesc, setNewDesc] = useState(desc);
  const [newName, setNewName] = useState(name);

  const { token } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.post(
        "/api/edit-listing",
        {
          id,
          newDesc,
          newName,
        },
        { headers: { token } }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setNewDesc("");
        exit();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log("Error editing list", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 border border-gray-300  bg-white rounded-lg shadow-md absolute top-20 left-0 z-20"
    >
      <div className="flex justify-end">
        <button
          onClick={exit}
          className="px-3 py-1 bg-red-500 text-white rounded-lg"
        >
          Exit
        </button>
      </div>
      <label className="block text-gray-700 font-bold mb-2">Edit Name:</label>
      <input
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter name..."
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <label className="block text-gray-700 font-bold mb-2">
        Edit Description:
      </label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter description..."
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
        rows="4"
      ></textarea>

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default EditListing;

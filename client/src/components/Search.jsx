import { useContext,  } from "react";
import { AppContext } from "../context/AppContext";

const Search = () => {
  const { setSearch, search } = useContext(AppContext);
 

  return (
    <div className="flex items-center gap-2  border p-2 rounded-lg ">
      <input
        type="text"
        placeholder="Search by name"
        className="w-full p-2 outline-none rounded-md "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     
    </div>
  );
};

export default Search;

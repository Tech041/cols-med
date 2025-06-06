import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import apiRequest from "../../utils/apiRequest";

const Post = () => {
  //   const { isAuth } = useContext(AppContext);
  // STATE FOR STORING IMAGE FOR UPLOAD
  const [image, setImage] = useState(null);

  // state for the products
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(formRef.current);

      image && formData.append("image", image);

      const res = await apiRequest.post("/api/list-product", formData);

      console.log("Data", res.data);

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setDescription("");
        setImage(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <section className="w-full h-full mb-10  pt-20 ">
      <div className="container">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-sm py-4 font-semibold  text-red-700">
            In the input below, you are required to provide Product Name and
            price before upload.
          </h1>
          <div className=" flex gap-2">
            <div className="">
              <label htmlFor="image" className="">
                <img
                  src={!image ? assets.upload : URL.createObjectURL(image)}
                  alt=""
                  className=" w-20"
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  className=""
                  hidden
                />
              </label>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={onSubmitHandler}
          className="flex flex-col w-full full items-center mt-5"
        >
          <div className="w-full h-full">
            <div className="w-full ">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                value={name}
                required
                id="name"
                placeholder="Name of product"
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div className="w-full py-2">
              <textarea
                id="description"
                name="description"
                value={description}
                className="w-full p-3 border rounded-md"
                placeholder="Describe the product ..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8"></div>
            <div className="flex w-full justify-center  items-center">
              <button
                type="submit"
                className="w-28 py-3 mt-4 bg-black text-white rounded-lg"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Post;

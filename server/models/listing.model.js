import mongoose from "mongoose";
const listingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
    default: true, // Products are in stock by default
  },
});
const Listing = mongoose.model("Listing", listingSchema);
export default Listing;

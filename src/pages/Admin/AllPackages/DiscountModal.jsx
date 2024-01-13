import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const DiscountModal = ({ open, setOpen, id }) => {
    const axiosSecure = useAxiosSecure();

  const handleDiscount = (e) => {
    e.preventDefault()
    setOpen(false);
    const discountRate = parseInt(e.target.discount.value);

    axiosSecure.patch(`/packages/${id}`, {discountRate})
    .then(res => {
        if(res.data.modifiedCount > 0){
            toast("Discount Added successfully")
        }
    })
  };

  const handleDiscountDelete = () => {
    setOpen(false);
    axiosSecure.patch(`/packages/${id}`, {discountRate: 0})
    .then(res => {
        if(res.data.modifiedCount > 0){
            toast("Discount deleted successfully")
        }
    })
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div
          className="text-2xl font-semibold text-center mt-4 mx-20"
          id="alert-dialog-title"
        >
          {"Add or Delete Discount"}
        </div>
        <div className="px-10">
          <div id="alert-dialog-description">
            <form onSubmit={handleDiscount}>
              <div className=" py-1 rounded-md flex items-center gap-5 mt-2 relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="discount"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Discount
                </label>
              </div>
              <div className="flex justify-center">
              <button
                className="btn bg-green-600 text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-green-700"
              >
                Add Discount
              </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto mb-3">
          <button className="btn bg-red-600 text-white rounded-none h-9 text-base py-1 min-h-fit hover:bg-red-700 mt-1" onClick={handleDiscountDelete} autoFocus>
            Delete Discount
          </button>
        </div>
      </Dialog>
    </div>
  );
};

DiscountModal.propTypes = {
    open: PropTypes.string,
    setOpen: PropTypes.func,
    id: PropTypes.string,
};

export default DiscountModal;

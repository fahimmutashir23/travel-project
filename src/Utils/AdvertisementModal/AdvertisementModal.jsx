/* eslint-disable react/prop-types */
import Modal from "react-responsive-modal";

const AdvertisementModal = ({ open, setOpen, advertisement }) => {
  const onCloseModal = () => setOpen(false);


  return (
    <div className="h-[70vh] overflow-hidden">
      <Modal open={open} onClose={onCloseModal} center>
        <div className="h-[70vh] w-full overflow-hidden">
          {
            advertisement?.url? <img src={advertisement?.url} alt="" className="w-full h-full object-cover" /> : null
          }
        </div>
      </Modal>
    </div>
  );
};

export default AdvertisementModal;

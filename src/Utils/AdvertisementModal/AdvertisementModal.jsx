/* eslint-disable react/prop-types */
import Modal from "react-responsive-modal";


const AdvertisementModal = ({ open, setOpen, advertisement }) => {
  const onCloseModal = () => setOpen(false);
 


  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div>
          {
            advertisement?.url? <img src={advertisement?.url} alt="" className="w-[70vh]" /> : null
          }
        </div>
      </Modal>
    </div>
  );
};

export default AdvertisementModal;

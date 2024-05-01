/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoCloseSharp } from "react-icons/io5";

const AdvertisementModal = ({ open, setOpen, advertisement }) => {

  return (
      <>
        <Transition appear show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/30" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                    <div className="relative">
                    <IoCloseSharp onClick={() => setOpen(false)} className="absolute cursor-pointer hover:bg-blue-500 hover:text-white border-none duration-300 text-2xl bg-white right-0 shadow-md" />
                      {advertisement?.url ? (
                        <img
                          src={advertisement?.url}
                          alt=""
                          className="w-full"
                        />
                      ) : null}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
  );
};

export default AdvertisementModal;

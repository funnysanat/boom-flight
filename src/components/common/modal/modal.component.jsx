import React from "react";

const Modal = ({ open, setOpen, title, content, closable }) => {
  return (
    open &
    (
      <div className="fixed inset-0 bg-black opacity-50 flex align-center justify-center">
        <div className="bg-white border-black border-shadow-light p-8">
          <div className="flex justify-space-between">
            <span className="">{title}</span>
            {closable && (
              <span className="cursor-pointer" onClick={() => setOpen(false)}>
                x
              </span>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;

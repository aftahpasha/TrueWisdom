import React from 'react';
import Button from '../ui/Button';


const ModalBase = ({ children, modal_id = 'modal_id' }) => {
    return (
        <dialog id={modal_id} className="modal">
            <div className="modal-box bg-white">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* body content */}
                <div className='mt-9 overflow-y-auto max-h-[calc(100vh-180px)]'>
                    {children}
                </div>
            </div>
        </dialog>
    );
};

export default ModalBase;

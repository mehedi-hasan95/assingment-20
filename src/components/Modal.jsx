function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 z-10 rounded-lg">
                {children}
                <button
                    className="bg-red-500 text-white p-2 mt-4 rounded-md"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;

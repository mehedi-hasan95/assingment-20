"use client";
import { useRouter } from "next/navigation";

const Modal = ({ isOpen, onClose, children, selectedBlog }) => {
    const router = useRouter();
    if (!isOpen) return null;
    // API Call
    const handleDelete = async (e) => {
        try {
            const response = await fetch(
                `/api/user/author?id=${selectedBlog.id}`,
                {
                    method: "DELETE", // or 'PUT'
                }
            );

            const result = await response.json();
            if (result.msg === "success") {
                router.push("/dashboard");
                router.refresh;
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-4 z-10 rounded-lg">
                <h2>Hi Mehedi {selectedBlog.id}</h2>
                {children}
                <div className="flex gap-3">
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white p-2 mt-4 rounded-md"
                    >
                        Delete
                    </button>
                    <button
                        className="bg-red-500 text-white p-2 mt-4 rounded-md"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

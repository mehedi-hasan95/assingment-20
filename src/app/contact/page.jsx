"use client";
import MainMenu from "@/components/menu/MainMenu";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ContactPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const submitMessage = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const data = { name, email, subject, message };
        try {
            setLoading(true);
            const response = await fetch("/api/mail", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if (result.status === "Success") {
                router.push("/dashboard");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <MainMenu />
            <div className="container mx-auto p-4">
                <form onSubmit={submitMessage}>
                    <input
                        type="text"
                        name="name"
                        id=""
                        className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        id=""
                        className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                        placeholder="Your Email"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        id=""
                        className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                        placeholder="Sbuject"
                        required
                    />
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                        placeholder="Message..."
                        required
                    ></textarea>
                    {loading ? (
                        <button
                            disabled
                            className="text-xl font-semibold max-w-max bg-slate-600 px-5 py-2 rounded-lg text-white cursor-pointer disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            Sending...{" "}
                            <span className="animate-spin">
                                <Loader2 size={24} />
                            </span>
                        </button>
                    ) : (
                        <input
                            type="submit"
                            value="Send"
                            className="bg-slate-700 text-white px-4 py-2 rounded-lg max-w-max font-bold cursor-pointer"
                        />
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactPage;

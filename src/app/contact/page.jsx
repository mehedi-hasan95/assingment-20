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
                <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-max font-semibold pb-6 mx-auto titleBg pt-10">
                    Contact with Us:
                </h2>
                <form onSubmit={submitMessage}>
                    <div className="flex gap-y-2 flex-col">
                        <label className="text-xl font-semibold" htmlFor="name">
                            Your Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="flex gap-y-2 flex-col">
                        <label
                            className="text-xl font-semibold"
                            htmlFor="email"
                        >
                            Your Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    <div className="flex gap-y-2 flex-col">
                        <label
                            className="text-xl font-semibold"
                            htmlFor="subject"
                        >
                            Sbuject:
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                            placeholder="Sbuject"
                            required
                        />
                    </div>

                    <div className="flex gap-y-2 flex-col">
                        <label
                            className="text-xl font-semibold"
                            htmlFor="message"
                        >
                            Your Message:
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            className="border-2 border-black rounded-lg px-3 py-2 w-full mb-3"
                            placeholder="Message..."
                            required
                        ></textarea>
                    </div>

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

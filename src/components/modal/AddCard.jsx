// Hooks
import { useState } from "react";

const AddCard = ({ setShowAddCard, setStorage }) => {
    const [inputValue, setInputValue] = useState({});

    // Close Add Card Modal
    const handleShowAddCard = (e) => {
        if (e.target.id === "background" || e.target.id === "btn-close") {
            setShowAddCard(false);
        }
    };

    // Handle Form Submit
    const handleSubmit = () => {
        const previousData = JSON.parse(localStorage.getItem("entries")) || [];
        localStorage.setItem("entries", JSON.stringify([inputValue, ...previousData]));
        setStorage(JSON.parse(localStorage.getItem("entries")) || []);
        setShowAddCard(false);
    };

    // Handle Data Input
    const handleChange = (e) => {
        setInputValue((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    };

    return (
        <div onClick={handleShowAddCard} className="bg-black/65 bg-opacity-15 fixed top-0 right-0 left-0 bottom-0 z-50 w-full" id="background">
            <div className="absolute top-[25%] left-0 right-0 bg-white border border-neutral-200 max-w-3xl mx-auto p-8 rounded-xl shadow-lg shadow-neutral-900">
                {/* Form */}
                <form className="flex gap-2 flex-col" action="" onSubmit={handleSubmit}>
                    {/* Title */}
                    <label htmlFor="title" className="font-bold text-xl w-12">
                        Title
                    </label>
                    <input onChange={handleChange} className="border border-neutral-400 mb-4 bg-white rounded-xl h-10 text-lg px-2" type="text" name="title" id="title" required />

                    {/* Date */}
                    <label htmlFor="date" className="font-bold text-xl w-12">
                        Date
                    </label>
                    <input onChange={handleChange} className="border border-neutral-400 mb-4 bg-white rounded-xl h-10 text-lg px-2" type="date" name="date" id="date" required />

                    {/* Image */}
                    <label htmlFor="image" className="font-bold text-xl w-28">
                        Image-URL
                    </label>
                    <input onChange={handleChange} className="border border-neutral-400 mb-4 bg-white rounded-xl h-10 text-lg px-2" type="text" name="image" id="image" required />

                    <hr className="border border-neutral-200 my-5" />

                    {/* Content */}
                    <label htmlFor="content" className="font-bold text-xl w-12">
                        Content
                    </label>
                    <textarea onChange={handleChange} className="border border-neutral-400 mb-4 bg-white rounded-xl h-45 text-lg px-2" name="content" id="content" required></textarea>

                    {/* Buttons */}
                    <div className="flex justify-end gap-5">
                        <button className="bg-red-400 rounded-xl p-2 w-36 text-white font-bold text-lg" type="submit" id="btn-close">
                            Close
                        </button>
                        <button className="bg-blue-500 rounded-xl p-2 w-36 text-white font-bold text-lg" type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCard;

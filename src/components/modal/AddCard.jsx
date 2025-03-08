// Hooks

import { useState, useEffect } from "react";

const AddCard = ({ setShowAddCard, setStorage, currentEntry = null, editIndex = null }) => {
    const [inputValue, setInputValue] = useState(currentEntry || { title: "", date: "", image: "", content: "" });

    // Close Add Card Modal
    const handleShowAddCard = (e) => {
        if (e.target.id === "background" || e.target.id === "btn-close") {
            setShowAddCard(false);
        }
    };

    // Handle Data Input 
    const handleChange = (e) => {
        setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // Handle Form Submit (Add or Edit)
    const handleSubmit = (e) => {
        e.preventDefault();
        let entries = JSON.parse(localStorage.getItem("entries")) || [];

        if (editIndex !== null) {
            // Update existing entry
            entries[editIndex] = inputValue;
        } else {
            // Add new entry
            entries = [inputValue, ...entries];
        }

        localStorage.setItem("entries", JSON.stringify(entries));
        setStorage(entries);
        setShowAddCard(false);
    };

    return (
        <div onClick={handleShowAddCard} className="bg-black/65 fixed top-0 right-0 left-0 bottom-0 z-50 w-full" id="background">
            <div className="absolute top-[25%] left-0 right-0 bg-white border border-neutral-200 max-w-3xl mx-auto p-8 rounded-xl shadow-lg shadow-neutral-900">
                {/* Form */}
                <form className="flex gap-2 flex-col" onSubmit={handleSubmit}>
                    <label htmlFor="title" className="font-bold text-xl">Title</label>
                    <input onChange={handleChange} value={inputValue.title} className="border border-neutral-400 rounded-xl h-10 text-lg px-2" type="text" name="title" id="title" required />

                    <label htmlFor="date" className="font-bold text-xl">Date</label>
                    <input onChange={handleChange} value={inputValue.date} className="border border-neutral-400 rounded-xl h-10 text-lg px-2" type="date" name="date" id="date" required />

                    <label htmlFor="image" className="font-bold text-xl">Image-URL</label>
                    <input onChange={handleChange} value={inputValue.image} className="border border-neutral-400 rounded-xl h-10 text-lg px-2" type="text" name="image" id="image" required />

                    <label htmlFor="content" className="font-bold text-xl">Content</label>
                    <textarea onChange={handleChange} value={inputValue.content} className="border border-neutral-400 rounded-xl h-45 text-lg px-2" name="content" id="content" required></textarea>

                    <div className="flex justify-end gap-5">
                        <button onClick={handleShowAddCard} className="bg-red-400 rounded-xl p-2 w-36 text-white font-bold text-lg" type="button" id="btn-close">Close</button>
                        <button className="bg-blue-500 rounded-xl p-2 w-36 text-white font-bold text-lg" type="submit">
                            {editIndex !== null ? "Update" : "Add"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCard;
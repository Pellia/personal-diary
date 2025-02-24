import { useState } from "react";

const AddCard = ({ setShowAddCard, setStorage }) => {
    const [inputValue, setInputValue] = useState({});

    // Close Add Card Modal
    const handleShowAddCard = (e) => {
        if (e.target.id === "background" || e.target.id === "btn-close") {
            setShowAddCard(false);
        }
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        const previousData = JSON.parse(localStorage.getItem("entries")) || [];
        localStorage.setItem("entries", JSON.stringify([inputValue, ...previousData]));
        // console.log(JSON.stringify(newData));
        setShowAddCard(false);
        setStorage(JSON.parse(localStorage.getItem("entries")) || []);

        // console.log(inputValue);
        // console.log(previousData);
    };

    const handleChange = (e) => {
        setInputValue((pre) => ({ ...pre, [e.target.name]: e.target.value }));
        // console.log(inputValue);
    };

    return (
        <div onClick={handleShowAddCard} className="bg-black/90 bg-opacity-15 fixed top-0 right-0 left-0 bottom-0 z-50 w-full" id="background">
            <div className="absolute top-[20%] left-0 right-0 bg-neutral-300 border border-neutral-400 max-w-2xl mx-auto p-2 rounded">
                <form className="flex gap-2 flex-col " action="" onSubmit={handleSubmit}>
                    {/* Title */}
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} className="border border-neutral-400 bg-white" type="text" name="title" id="title" />
                    {/* Date */}
                    <label htmlFor="date">Date</label>
                    <input onChange={handleChange} className="border border-neutral-400 bg-white" type="date" name="date" id="date" />
                    {/* Image */}
                    <label htmlFor="image">Image</label>
                    <input onChange={handleChange} className="border border-neutral-400 bg-white" type="text" name="image" id="image" />
                    {/* Content */}
                    <label htmlFor="content">Content</label>
                    <textarea onChange={handleChange} className="border border-neutral-400 bg-white" name="content" id="content"></textarea>
                    {/* Submit */}
                    <button className="bg-blue-500 rounded p-2 text-white font-bold text-md" type="submit">
                        Add
                    </button>
                    <button className="bg-red-400 rounded p-2 text-white font-bold text-md" type="submit" id="btn-close">
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCard;

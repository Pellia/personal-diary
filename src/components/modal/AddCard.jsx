const AddCard = ({ setShowAddCard }) => {
    // Close Add Card Modal
    const handleShowAddCard = () => {
        setShowAddCard(false);
    };

    return (
        <div onClick={handleShowAddCard} className="bg-black/90 bg-opacity-15 fixed top-0 right-0 left-0 bottom-0 z-50 w-full">
            <div className="absolute top-[20%] left-0 right-0 bg-neutral-300 border border-neutral-400 max-w-2xl mx-auto p-2 rounded">
                <form className="flex gap-2 flex-col " action="">
                    {/* Title */}
                    <label htmlFor="title">Title</label>
                    <input className="border border-neutral-400 bg-white" type="text" name="title" id="title" />
                    {/* Date */}
                    <label htmlFor="date">Date</label>
                    <input className="border border-neutral-400 bg-white" type="date" name="date" id="date" />
                    {/* Image */}
                    <label htmlFor="image">Image</label>
                    <input className="border border-neutral-400 bg-white" type="text" name="image" id="image" />
                    {/* Content */}
                    <label htmlFor="content">Content</label>
                    <textarea className="border border-neutral-400 bg-white" name="content" id="content"></textarea>
                    {/* Submit */}
                    <button className="bg-blue-500 rounded p-2 text-white font-bold text-md" type="submit">
                        Add
                    </button>
                    <button onClick={handleShowAddCard} className="bg-red-400 rounded p-2 text-white font-bold text-md" type="submit">
                        Close
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCard;

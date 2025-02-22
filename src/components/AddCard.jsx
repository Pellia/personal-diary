const AddCard = () => {
    return (
        <div className="bg-neutral-300 border border-neutral-400 max-w-2xl mx-auto mt-5 p-2 rounded">
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
            </form>
        </div>
    );
};

export default AddCard;

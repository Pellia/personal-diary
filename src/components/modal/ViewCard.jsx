const ViewCard = ({ setShowViewCard, data }) => {
    // Close Add Card Modal
    const handleShowViewCard = (e) => {
        if (e.target.id === "background" || e.target.id === "btn-close") {
            setShowViewCard(false);
        }
    };
    return (
        <div onClick={handleShowViewCard} className="bg-black/65 fixed top-0 right-0 left-0 bottom-0 z-50 w-full" id="background">
            <div className="fixed top-[5%] bottom-[5%] bg-white border border-neutral-200 max-w-3xl inset-y-0 inset-x-0 mx-auto p-8 rounded-xl shadow-lg  shadow-neutral-900 overflow-y-scroll">
                <img className="w-full rounded-bl-lg rounded-xl" src={data.image} alt="random-image" />
                <div>
                    <div className="flex justify-between flex-wrap items-center mr-5 mt-5">
                        <p className="font-bold text-2xl">{data.title}</p>
                        <p className="text-md text-gray-600">{data.date}</p>
                    </div>
                    <p className="mt-3 mr-5 text-md">{data.content}</p>
                    <div className="flex justify-end mt-12 mr-5 mb-5">
                        <button onClick={handleShowViewCard} className="bg-blue-500 rounded-xl p-2 w-36 text-white font-bold text-lg" id="btn-close">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCard;
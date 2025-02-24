// Hooks
import { useState } from "react";

// Components
import ViewCard from "./modal/ViewCard";

const Entry = ({ data }) => {
    const [showViewCard, setShowViewCard] = useState(false);

    // Show View Card Modal
    const handleShowViewCard = () => {
        setShowViewCard(!showViewCard);
    };

    // Slice Content for preview
    const lessContent = data.content.slice(0, 350);

    return (
        <div className="max-w-3xl my-8 flex justify-center mx-auto">
            <div className="flex w-full bg-white mx-5 rounded-xl shadow-lg shadow-blue-100 gap-6">
                <img className="w-50 object-cover aspect-2/3 rounded-bl-lg rounded-tl-xl" src={data.image} alt="random-image" />
                <div>
                    <div className="flex justify-between flex-wrap items-center mr-5 mt-5">
                        <p className="font-bold text-2xl">{data.title}</p>
                        <p className="text-md text-gray-600">{data.date}</p>
                    </div>
                    <p className="mt-3 mr-5 text-md">{lessContent} ...</p>
                    <div className="flex justify-end mt-12 mr-5 mb-5">
                        <button className="text-blue-400 text-md underline hover:text-blue-500" onClick={handleShowViewCard}>
                            Show more...
                        </button>
                    </div>
                </div>
                {showViewCard && <ViewCard setShowViewCard={setShowViewCard} data={data} />}
            </div>
        </div>
    );
};

export default Entry;

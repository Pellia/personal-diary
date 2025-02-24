import { useState } from "react";
import ViewCard from "./modal/ViewCard";

const Entry = ({ data }) => {
    const [showViewCard, setShowViewCard] = useState(false);

    // Show View Card Modal
    const handleShowViewCard = () => {
        setShowViewCard(!showViewCard);
    };

    return (
        <div>
            <div className="flex bg-neutral-300 max-w-2xl mx-auto mt-5 p-2 rounded border border-neutral-400 gap-4">
                <img className="border border-neutral-400 rounded-lg" src="https://picsum.photos/id/237/200/200" alt="random-image" />
                <div>
                    <p className="font-bold">{data.title}</p>
                    <p className="font-bold">{data.date}</p>
                    <button className="bg-blue-500 rounded p-2 text-white font-bold text-md" onClick={handleShowViewCard}>
                        Show more...
                    </button>
                </div>
            </div>
            {showViewCard && <ViewCard setShowViewCard={setShowViewCard} data={data} />}
        </div>
    );
};

export default Entry;

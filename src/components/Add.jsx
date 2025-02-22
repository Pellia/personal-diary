import { useState } from "react";
import AddCard from "./modal/AddCard";

const Add = () => {
    const [showAddCard, setShowAddCard] = useState(false);

    // Show Add Card Modal
    const handleShowAddCard = () => {
        setShowAddCard(!showAddCard);
    };

    return (
        <>
            <div className="flex bg-neutral-300 max-w-2xl mx-auto mt-5 p-2 rounded border border-neutral-400 justify-end">
                <button className="bg-blue-500 rounded p-2 text-white font-bold text-md" onClick={handleShowAddCard}>
                    New Entry
                </button>
            </div>
            {showAddCard && <AddCard setShowAddCard={setShowAddCard} />}
        </>
    );
};

export default Add;

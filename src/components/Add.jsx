// Hooks
import { useState } from "react";

// Components
import AddCard from "./modal/AddCard";

const Add = ({ setStorage }) => {
    const [showAddCard, setShowAddCard] = useState(false);

    // Show Add Card Modal
    const handleShowAddCard = () => {
        setShowAddCard(!showAddCard);
    };

    return (
        <>
            <div className="max-w-3xl mt-3 flex justify-center mx-auto">
                <button className="mt-5 w-full p-6 mx-5 bg-blue-400 text-white font-bold text-xl rounded-xl shadow-lg shadow-blue-200 cursor-pointer hover:bg-blue-500" onClick={handleShowAddCard}>
                    New Entry
                </button>
            </div>
            {showAddCard && <AddCard setShowAddCard={setShowAddCard} setStorage={setStorage} />}
        </>
    );
};

export default Add;

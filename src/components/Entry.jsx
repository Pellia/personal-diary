// Hooks
import { useState } from "react";
import ViewCard from "./modal/ViewCard";
import AddCard from "./modal/AddCard";

const Entry = ({ data, index, setStorage }) => {
    const [showViewCard, setShowViewCard] = useState(false);
    const [showEditCard, setShowEditCard] = useState(false);

    // Delete Entry
    const handleDelete = () => {
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.splice(index, 1); 
        localStorage.setItem("entries", JSON.stringify(entries));
        setStorage(entries); 
    };

    return (
        <div className="max-w-3xl my-8 flex justify-center mx-auto">
            <div className="flex w-full bg-white mx-5 rounded-xl shadow-lg shadow-blue-100 gap-6">
                <img className="w-50 object-cover aspect-2/3 rounded-bl-lg rounded-tl-xl" src={data.image} alt="random-image" />
                <div>
                    <div className="flex justify-between flex-wrap items-center mr-5 mt-5">
                        <p className="font-bold text-2xl">{data.title}</p>
                        <p className="text-md text-gray-600">{data.date}</p>
                    </div>
                    <p className="mt-3 mr-5 text-md">{data.content.slice(0, 350)} ...</p>
                    
                    {/* Buttons */}
                    <div className="flex justify-end mt-4 mr-5 mb-5 gap-3">
                        <button className="text-blue-400 text-md underline hover:text-blue-500" onClick={() => setShowViewCard(true)}>Show more...</button>
                        <button className="bg-purple-500 text-white px-3 py-1 rounded-md" onClick={() => setShowEditCard(true)}>Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                
                {showViewCard && <ViewCard setShowViewCard={setShowViewCard} data={data} />}
                {showEditCard && <AddCard setShowAddCard={setShowEditCard} setStorage={setStorage} currentEntry={data} editIndex={index} />}
            </div>
        </div>
    );
};

export default Entry;
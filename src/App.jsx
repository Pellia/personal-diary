
import { useState } from "react";
import Add from "./components/Add";
import Entry from "./components/Entry";

function App() {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("entries")) || []);
    const [searchPhrase, setSearchPhrase] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Filter entries based on search term and date range
    const filteredEntries = storage.filter((entry) => {
        const entryDate = new Date(entry.date);
        const fromDate = startDate ? new Date(startDate) : null;
        const toDate = endDate ? new Date(endDate) : null;

        const matchesSearch = entry.title.toLowerCase().includes(searchPhrase.toLowerCase()) ||
         entry.content.toLowerCase().includes(searchPhrase.toLowerCase());

        const matchesDate = (!fromDate || entryDate >= fromDate) && (!toDate || entryDate <= toDate);

        return matchesSearch && matchesDate;
    });

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="mb-4 flex flex-col gap-3">
                <input 
                    type="text" 
                    placeholder="Search by title or content..." 
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    value={searchPhrase}
                    onChange={(e) => setSearchPhrase(e.target.value)}
                />
                <div className="flex gap-2">
                    <input 
                        type="date" 
                        className="border border-gray-300 rounded-lg p-2 w-1/2"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <input 
                        type="date" 
                        className="border border-gray-300 rounded-lg p-2 w-1/2"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <Add setStorage={setStorage} />

            {filteredEntries.length > 0 ? (
                filteredEntries.map((item, index) => (
                    <Entry key={index} index={index} data={item} setStorage={setStorage} />
                ))
            ) : (
                <p className="text-center text-gray-500">No entries found</p>
            )}
        </div>
    );
}

export default App;
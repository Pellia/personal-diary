// Hooks
import { useState } from "react";

// Components
import Add from "./components/Add";
import Entry from "./components/Entry";
import Logo from "./components/Logo";
import Search from "./components/Search";

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
        const matchesSearch = entry.title.toLowerCase().includes(searchPhrase.toLowerCase()) || entry.content.toLowerCase().includes(searchPhrase.toLowerCase());
        const matchesDate = (!fromDate || entryDate >= fromDate) && (!toDate || entryDate <= toDate);
        return matchesSearch && matchesDate;
    });

    return (
        <>
            <Logo />
            <Search setSearchPhrase={setSearchPhrase} setStartDate={setStartDate} setEndDate={setEndDate} />
            <Add setStorage={setStorage} />
            {filteredEntries.length > 0 ? (
                filteredEntries.map((item, index) => <Entry key={index} index={index} data={item} setStorage={setStorage} />)
            ) : (
                <p className="text-center text-gray-500">No entries found</p>
            )}
        </>
    );
}

export default App;

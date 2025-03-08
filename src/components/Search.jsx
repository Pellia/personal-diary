const Search = ({ setSearchPhrase, setStartDate, setEndDate }) => {
    return (
        <div className="max-w-3xl mx-auto p-4 mt-8">
            <h2 className="font-bold text-2xl mb-2">Search and Filter</h2>
            <div className="mb-4 flex flex-col gap-3">
                <input type="text" placeholder="Search by title or content..." className="border border-gray-300 rounded-lg p-2 w-full" onChange={(e) => setSearchPhrase(e.target.value)} />
                <div className="flex gap-2">
                    <input type="date" className="border border-gray-300 rounded-lg p-2 w-1/2" onChange={(e) => setStartDate(e.target.value)} />
                    <input type="date" className="border border-gray-300 rounded-lg p-2 w-1/2" onChange={(e) => setEndDate(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Search;

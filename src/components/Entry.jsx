const Entry = () => {
    return (
        <div className="flex bg-neutral-300 max-w-2xl mx-auto mt-5 p-2 rounded border border-neutral-400 gap-4">
            <img className="border border-neutral-400 rounded-lg" src="https://picsum.photos/id/237/200/200" alt="random-image" />
            <div>
                <p className="font-bold">Title</p>
                <p className="font-bold">Date: 01.01.25</p>
            </div>
        </div>
    );
};

export default Entry;

const ViewCard = () => {
    return (
        <div className="flex flex-col bg-neutral-300 max-w-2xl mx-auto mt-5 p-2 rounded border border-neutral-400">
            <div className="flex gap-5 mb-2">
                <h1>Title</h1>
                <p>Date</p>
            </div>
            <div className="flex gap-5 mb-2">
                <img className="border border-neutral-400 rounded-lg w-[200px]" src="https://picsum.photos/id/237/200/200" alt="" />
                <div>
                    <p>Content</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, accusamus illum. Dignissimos, illo quibusdam ullam perspiciatis officia accusantium eaque quidem deserunt, animi
                        facere pariatur odio? Consequuntur eaque aliquid porro quas.
                    </p>
                </div>
            </div>
            <button className="bg-blue-500 rounded p-2 text-white font-bold text-md">Close</button>
        </div>
    );
};

export default ViewCard;

// Hooks
import { useState } from "react";

// Components
import Add from "./components/Add";
import Entry from "./components/Entry";

function App() {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("entries")) || []);

    return (
        <>
            <Add setStorage={setStorage} />
            {storage.map((item, index) => (
                <Entry key={index} data={item} />
            ))}
        </>
    );
}

export default App;

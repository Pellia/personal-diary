// Hooks
import { useState } from "react";

// Components
import Add from "./components/Add";
import Entry from "./components/Entry";
import Logo from "./components/Logo";

function App() {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("entries")) || []);

    return (
        <>
            <Logo />
            <Add setStorage={setStorage} />
            {storage.map((item, index) => (
                <Entry key={index} data={item} />
            ))}
        </>
    );
}

export default App;

import { useEffect, useState } from "react";
import Add from "./components/Add";
import Entry from "./components/Entry";

function App() {
    const [storage, setStorage] = useState(null);

    useEffect(effect, [storage]);

    return (
        <div>
            <Add />
        </div>
    );
}

export default App;

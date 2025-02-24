import { useEffect, useState } from "react";
import Add from "./components/Add";
import Entry from "./components/Entry";

function App() {
    const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("entries")) || []);

    return (
        <div>
            <Add setStorage={setStorage} />
            {/* {console.log(storage)} */}
            {storage.map((item, index) => (
                <Entry key={index} data={item} />
            ))}
        </div>
    );
}

export default App;

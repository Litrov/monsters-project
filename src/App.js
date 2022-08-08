import {useEffect, useState} from "react";
import "./App.css";
import CardList from "./components/Card-list/Card-list";
import SearchBox from "./components/Search-box/Search-box";

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => setMonsters(users));
    }, []);

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
    });

    const onSearchMonsters = (e) => {
        const searchField = e.target.value.toLocaleLowerCase();
        setSearchField(searchField);
    };

    return (
        <div className="App">
            <h1 className='app-title'>Monsters</h1>
            <SearchBox onSearch={onSearchMonsters}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
};

export default App;

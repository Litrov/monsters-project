import {useEffect, useState} from "react";
import "./App.css";
import CardList from "./components/Card-list/Card-list";
import SearchBox from "./components/Search-box/Search-box";

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setMonsters(users));
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilterMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>

            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeholder='search monsters'
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
};

export default App;

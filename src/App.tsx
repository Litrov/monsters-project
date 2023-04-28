import {ChangeEvent, useEffect, useState} from "react";
import "./App.css";
import CardList from "./components/Card-list/Card-list";
import SearchBox from "./components/Search-box/Search-box";
import {getData} from "./utils/data.utils";

export type Monster = {
    id: string;
    name: string;
    email: string;
}

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [monsters, setMonsters] = useState<Monster[]>([]);
    const [filteredMonsters, setFilterMonsters] = useState(monsters);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
            setMonsters(users)
        }
        fetchUsers();
    }, []);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilterMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
            <CardList monsters={filteredMonsters}/>
        </div>
    );
};

export default App;

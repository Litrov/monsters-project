import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';

const App = () => {

    const [monsters, setMonsters] = useState([]);

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(users => setMonsters(users))
        }, [])


    return (
        <div className="App">
            <div>
                <input className='search-box' type='search' placeholder='search monsters'
                       onChange={(e) => console.log(e.target.value)}/>
            </div>
            Monsters :
            {
                monsters.map((monsters) => {
                    return <p key={monsters.id}>{monsters.name}</p>
                })
            }
        </div>

    );
}

export default App;

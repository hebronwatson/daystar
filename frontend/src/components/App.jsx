import "../css/App.css";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from 'axios';

const bible_book = 'John';
const bible_ch = '3';
const bible_verse = '16';

const App = () => {
    const [verse, setVerse] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3002/api/${bible_book}/${bible_ch}/${bible_verse}`)
        .then((result) => {
            setVerse(result.data.content);
        });
    });


    return(
    <div className="App">
        <div className="container">
            <div className="header">
                <h1>{bible_book} {bible_ch}:{bible_verse}</h1>
            </div>
            <div className="main">
                <div className="verse">
                    <p>{verse}</p>
                </div>
            </div>
        </div>
    </div>);
}

export default App;
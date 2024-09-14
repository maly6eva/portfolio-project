import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/Main/Main";
import {Aboutme} from "./layout/sections/Aboutme/Aboutme";


function App() {
    return (
        <div className="App">
           <Header/>
            <Main/>
            <Aboutme/>
        </div>
    );
}

export default App;


import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
const Search = ({setSearchText}) => {
    const [inputValue , setInputValue] = useState('')
    const findUser = (e) => {
        setSearchText(inputValue);
        e.preventDefault();
    }

    const resetButton = (e) => {
        setSearchText('Ivan')
        e.preventDefault();
    }

    const changeValue = (e) => {
        const targetValue = e.currentTarget.value
        setInputValue(targetValue)
        
    }
    return(
        <form>
            <input placeholder='Search' value={inputValue} onChange = {changeValue}></input>
            <button onClick={findUser}>Find</button>
            <button onClick={resetButton}>Reset</button>
        </form>  
    )
}

export default Search
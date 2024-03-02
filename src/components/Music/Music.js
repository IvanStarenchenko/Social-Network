import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './Music.css'
import Search from './input';
import ListUsers from './list';
import Details from './details';
const Music = () =>{
   
    const [searchText ,  setSearchText] = useState('Ivan')
    const [selectedUser , setSelectedUser] = useState(null)
    
    useEffect(() => {
        if (selectedUser){
            document.title = selectedUser.login
        } 
    } , [selectedUser])

   
    return(
       <div>
            <Search  setSearchText = {setSearchText}/>
            <ListUsers searchText = {searchText}  setSelectedUser = {setSelectedUser} selectedUser = {selectedUser}/>   
            <Details selectedUser = {selectedUser}/>
       </div>

    );
}
export default Music;







    // const [countI , setCountI] = useState(0)
    // const [countP , setCountP] = useState(0)

    // const [count , setCount] = useState({
    //     Ivan: 0,
    //     Petr: 0
    // })
    // let plusICount = () => {
    //     const plusIvan = countI + 1
    //     setCountI(plusIvan)
    // }

    // let plusPCount = () => {
    //     const plusPetr = countP + 1
    //     setCountP(plusPetr)
    // }
    
    // let minusCount = () => {
    //     const minusI = countI - 1
    //     const minusP = countP - 1
    //     setCountI(minusI) 
    //     setCountP(minusP) 
    // }

    // let nullValue = () => {
    //     const nullI = countI - countI
    //     setCountI(nullI)
    //     const nullP = countP - countP
    //     setCountP(nullP)
    // }




// <div className='music'>
        //     <div className='ivan-block'>
        //         <span>Ivan Ivanovich</span>
        //         <span>{count.Ivan}</span>
        //         <button onClick={() => setCount((actual) => {
        //             return{
        //                 ...actual,
        //                 Ivan: actual.Ivan + 1
        //             }
        //         })}>Plus point</button>
        //     </div>

        //     <div className='petr-block'>
        //         <span>Petr Petrov</span>
        //         <span>{count.Petr}</span>
        //         <button onClick={() => setCount((actual) => {
        //             return{
        //                 ...actual,
        //                 Petr: actual.Petr + 1

        //             }
        //         })}>Plus point</button>
        //     </div>

        //     <button onClick={() => setCount((actual) => {
        //             return{
        //                 ...actual,
        //                 Ivan: actual.Ivan - 1,
        //                 Petr: actual.Petr - 1

        //             }
        //         })}>Minus 1 </button>

        //     <button onClick={() => setCount((actual) => {
        //                 return{
        //                     ...actual,
        //                     Ivan: 0,
        //                     Petr: 0

        //                 }
        //             })}>Set null</button>
        //     </div>
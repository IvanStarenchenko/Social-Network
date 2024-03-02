import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const ListUsers = ({ setSelectedUser , selectedUser , searchText}) => {
    const [users , setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.github.com/search/users?q=${searchText}`, {
                    headers: {
                        Authorization: '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',
                    },
                });
                setUsers(response.data.items);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
                console.log('Response data:', error.response.data);
            }
            
        };
    
        fetchData();
    }, [searchText])
    return(
        <ul>
         {users.map(u => <li key = {u.id} onClick={() => {
            setSelectedUser(u)
         } } className = {selectedUser === u ? 'item active' : 'item'}>{u.login} </li>)}
       </ul>      
    )
}

export default ListUsers
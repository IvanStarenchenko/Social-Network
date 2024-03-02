import axios from 'axios';
import { useEffect } from 'react';
import Timer from './timer';
import Preloader from '../Common/Preloader/Preloader'
import { useState } from 'react';
const Details = ({selectedUser}) => {
    const [user , setUser] = useState(null)
    const [isLoading , setLoading] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                if(selectedUser){
                setLoading(true)
                const response = await axios.get(`https://api.github.com/users/${selectedUser.login}`, {
                    headers: {
                        Authorization: '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',
                    },
                });
                setUser(response.data);}
                setLoading(false)
            } 
            catch (error) {
                
            }
            
        };
    
        fetchData();
    }, [selectedUser])
    return(
      
        <div className='details'>
       {isLoading && <Preloader />}
        {user && (
            <div className='user--music-info'>
            <h2>User Name : <span>{user.login}</span> </h2>
            <div>Followers:  <span>{user.followers}</span></div>
            <Timer user = {user} setUser = {setUser} />
            
           
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
            </div>
        )}

        </div> 
    )
}

export default Details
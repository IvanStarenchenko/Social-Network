import React from "react"
import Paginator from "../../Common/Paginator"
import User from "./User/User"
import './Users.css'
const Users = ({ usersData , followingInProggres , setUnFollow , setFollow , onPageChanged , currentPage ,totalItemsCount , pageSize , portionSize, profile }) => {
    return (
        <div className='find-user-page'>
           <User usersData = {usersData} followingInProggres = {followingInProggres} setUnFollow = {setUnFollow}  setFollow = {setFollow} profile = {profile}/>
          <div>
            <Paginator onPageChanged = {onPageChanged} currentPage = {currentPage} totalItemsCount = {totalItemsCount} pageSize = {pageSize} portionSize = {portionSize} />
          </div>
        
       </div>
    )
}

export default Users
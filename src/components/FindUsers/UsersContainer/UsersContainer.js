import { connect } from 'react-redux';
import React from 'react';
import { setCurrentPage , setFollowProgress, getUsers , setUnFollow ,setFollow ,setTotalItemsCount} from '../../../redux/users-reducer';
import Users from '../Users/Users';
import Preloader from '../../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { getUsersData , getPageSize, getTotalItemsCount, getCurrentPage, getFollowingInProggres, getFollowed , portionSize , profile } from '../../../redux/users-selectors';
class usersContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers(this.props.currentPage , this.props.pageSize) 
    };
    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage , this.props.pageSize)      
    }
    render(){
        return <div>
        {this.props.isFatching ? <Preloader /> :null }

        <Users 
            totalItemsCount={this.props.totalItemsCount} 
            pageSize={this.props.pageSize} 
            currentPage={this.props.currentPage} 
            onPageChanged={this.onPageChanged} 
            usersData={this.props.usersData} 
            setFollowProgress ={this.props.setFollowProgress}
            followingInProggres = {this.props.followingInProggres}
            followed = {this.props.followed}
            setFollow = {this.props.setFollow}
            setUnFollow = {this.props.setUnFollow} 
            portionSize = {this.props.portionSize}
            profile = {this.props.profile}
        />
            
        </div>
    }

}
 
let mapStateToProps = (state) => {
    return {
       usersData: getUsersData(state),
       pageSize: getPageSize(state),
       totalItemsCount: getTotalItemsCount(state),
       currentPage: getCurrentPage(state),
       followingInProggres: getFollowingInProggres(state),
       followed: getFollowed(state),
       portionSize: portionSize(state),
       profile: profile(state)
    }
}
 


export default compose(
    connect(mapStateToProps , {
        setCurrentPage,
        setFollowProgress,
        getUsers,
        setUnFollow,
        setFollow,     
        setTotalItemsCount,
   }),
    withAuthRedirect,
)(usersContainer)


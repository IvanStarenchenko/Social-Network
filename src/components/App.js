import './General.css';
import Aside from './Aside/Aside';
import HeaderContainer from './Header/HeaderContainer';
// import Messanger from './Messanger/Messanger';
import Music from './Music/Music';
import Friends from './Friends/Friends';
import Preloader from './Common/Preloader/Preloader';
import Login from './Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React , {Suspense} from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../redux/app-reducer';
import { compose } from 'redux';
import { withRouter } from './Profile/ProfileContainer';
import { Navigate } from 'react-router-dom';

const Messanger = React.lazy(() => import('./Messanger/Messanger'))
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'))
const FindUsers = React.lazy(() => import('./FindUsers/FindUsers'))
// import FindUsers from './FindUsers/FindUsers';

class App extends React.Component{
  // catchAllUnhandledErrors = (promiseRejectionEvent) => {
  //   alert('O-oh , some troubles on the way')
  //   //console.error(promiseRejectionEvent)
  // }
  componentDidMount(){   
    this.props.initializeApp()     
    // window.addEventListener("unhandledrejection" ,this.catchAllUnhandledErrors)        // Если есть addEventListener, обязательно должен быть и removeEventListener                             
  }
  // componentWillUnmount(){
  //   window.removeEventListener("unhandledrejection" ,this.catchAllUnhandledErrors)                                        

  // }
  render(){
    if(!this.props.initialized){
      return <Preloader />
    }  
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Aside />
          <main className='main'>
          <Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/profile" />} />
              <Route path="/Profile/:userId?" element={<ProfileContainer/>} />
              <Route path="/Messanger/*" element={<Messanger/>} />
              <Route path="/Friends" element={<Friends />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/FindUser" element={<FindUsers />} />
              <Route path="/Login" element={<Login/>} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
              {/* Добавь другие маршруты здесь */}
            </Routes>
          </Suspense> 
          </main>
        </div>
    );
  }
} 


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  withRouter,
  connect(mapStateToProps , {initializeApp}),
)(App);


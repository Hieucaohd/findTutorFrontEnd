import loadable from '@loadable/component';
import React, { Fragment, useRef } from "react";
import { RiMessage3Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  logout, selectId_of_user, selectIsSignedIn, selectType_parent, selectType_tutor
} from "../auth/authSlice";
import Notification from '../Notification';
import Search from './components/Search/Search';
import SearchBar from './components/Search/SearchBar';
import ToggleMenu from './components/ToggleMenu';
import "./styles.scss";

const MobileNavBar = loadable(() => import('./components/MobileNavBar/MobileNavBar'))
const WebBanner = loadable(() => import('./components/WebBanner'))

function MainNavigation() {
  const dispatch = useDispatch();
  const type_tutor = useSelector(selectType_tutor);
  const type_parent = useSelector(selectType_parent);
  const userId = useSelector(selectId_of_user);
  const history = useHistory();
  const searchRef = useRef(null);
  const location = useLocation();
  const isSigned = useSelector(selectIsSignedIn);
  const navigationRef = useRef(null);

  const handleLogOut = async() => {
    dispatch(logout());  
    history.push("/signin");
  }
  const onShowSearchForm = () => {
    if(searchRef.current)
      searchRef.current.style.display = 'flex';
  }
  const onCloseSearchForm = () => {
    if(searchRef.current)
      searchRef.current.style.display = 'none';
  }
  const handleShowLogin = () => {
    history.push("/signin");
  }
  
  return (
    <Fragment>
      {!isSigned && location.pathname === "/" && <WebBanner />}
      {location.pathname !== "/signin" && location.pathname !== "/signup" &&
      <div className="navigation" ref={navigationRef} 
        style={{
          backgroundColor: isSigned ? "white" : "transparent",
          borderBottom: isSigned ? "0.5px solid #ccc" : "none",
      }}>
        <div className="navigation__item">
          <Link to="/">
            <h3 className="navigation__logo">
              <img src={require("../../assets/image/tutor.webp").default} alt="gia su"/>
            </h3>
          </Link>
          {/* <div className="">
            <button> L???p h???c </button>
            <div className="">
              <Link to="/?province_code=1">L???p h???c t???i H?? N???i</Link>
              <Link to="/?province_code=79">L???p h???c t???i TP.H??? Ch?? Minh</Link>
              <Link to="/?province_code=48">L???p h???c t???i ???? N???ng</Link>
              <Link to="/?province_code=31">L???p h???c t???i H???i Ph??ng</Link>
            </div>
          </div> */}
        </div>
        <div className="navigation__item">
          {isSigned && <SearchBar onShow={onShowSearchForm}/>}
          {isSigned && <Link to="/message" className="navigation__item__mess"> <RiMessage3Fill/></Link>}
          {isSigned && <Notification />}
          {isSigned && <ToggleMenu onLogOut={handleLogOut} />}
          {!isSigned && <button className="navigation__signin" onClick={() => handleShowLogin()}>
            ????ng nh???p
          </button>}
        </div>
        
        <div ref={searchRef} style={{display: 'none'}} className="navigation__search">
          <Search onClose={onCloseSearchForm}/>
        </div>
      </div>}
      {isSigned && <div className="navigation__bottom">
        <MobileNavBar userId={userId} typeTutor={type_tutor} typeParent={type_parent}/>
      </div>}
    </Fragment>
  );
}

export default MainNavigation;

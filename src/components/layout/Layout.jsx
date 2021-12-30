import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Content } from './Layout.element';

import Routes from '../Routes';
import Sidebar from '../sidebar/Sidebar';
import TopNav from "../topnav/TopNav";

import {useSelector,useDispatch} from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";
import {useEffect} from "react";

const Layout = () => {
    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
    <Content>
       <Router>
      <Route render={(props)=>(
        <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
          <Sidebar {...props}/>
          <div className='layout__content'>
              <TopNav/>
            <div className='layout__content-main'>
              <Routes/>
            </div>
          </div>
        </div>
      )}/>
    </Router>
    </Content>
   
  );
}

export default Layout;

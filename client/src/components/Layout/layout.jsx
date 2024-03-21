import React from 'react';
import AppNavBar from './appNavBar.jsx'
import Footer from './footer.jsx';
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
            <AppNavBar></AppNavBar>
            {props.children}
            <Toaster position="bottom-center"></Toaster>
            <Footer></Footer>
        </>
    );
};

export default Layout;
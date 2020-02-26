import React, { Component } from "react";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Header from "../header/Header";
import FooterTwo from "../footer/FooterTwo";


class App extends Component{
    render(){
        return(
            <div>
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {this.props.children}
                <FooterTwo />
                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}
            </div>
        )
    }
}
export default App;

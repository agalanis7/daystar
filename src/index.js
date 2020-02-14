// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

// Common Layout
import Layout from "./component/common/App";


// Home layout
import Demo from './page-demo/Demo';
import MainDemo from './home/MainDemo';
import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency';
import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
import Business from './home/Business';
import StudioAgency from './home/StudioAgency';
import PortfolioLanding from './home/PortfolioLanding';
import CreativeLanding from './home/CreativeLanding';
import HomeParticles from './home/HomeParticles';



// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Portfolio from "./elements/Portfolio";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import Counters from "./elements/Counters";

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

class Root extends Component{
    render(){
        return(
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} component={PortfolioLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles}/>
                    <Layout>
                        {/* Home Layout */}
                        <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax}/>
                        
                        {/* Element Layot */}
                        <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters}/>
                    </Layout>
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();
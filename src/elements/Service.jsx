

import React ,{ Component }from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiDroplet, FiTrello, FiMaximize2, FiPause, FiPackage, FiTrendingUp } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiTrello />,
        title: 'Kitchens',
        description: 'They say the kitchen is the heart of the home; we\'re cardiologists.'
    },
    {
        icon: <FiDroplet />,
        title: 'Bathrooms',
        description: 'Bathrooms fit for a king.  When we\'re finished you\'ll have a throne to sit on.'
    },
    {
        icon: <FiMaximize2 />,
        title: 'Additions',
        description: 'We are equipped to handle the most challenging additions.  Trust us, the addition will be your favorite part of your home.'
    },
    { 
        icon: <FiPause />,
        title: 'Decks',
        description: 'Quality decks that stand the test of time.'
    },
    {
        icon: <FiTrendingUp />,
        title: 'Basements',
        description: 'Increase your home\'s value by turning an unfinished basement into finished living space.'
    },
    { 
        icon: <FiPackage />,
        title: 'General Contracting',
        description: 'Let us manage your project.  We have great subcontractors from every trade.'
    }
]


class Service extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Services' />

                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Services'}   />
                {/* End Breadcrump Area */}
                
                <div className="service-area ptb--120 bg_color--5">
                    <div className="container">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Service;

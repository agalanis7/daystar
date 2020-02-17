import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Kitchens',
        description: 'They say the kitchen is the heart of the home; we\'re cardiologists.'
    },
    {
        icon: <FiLayers />,
        title: 'Bathrooms',
        description: 'Bathrooms fit for a king.  When we\'re finished you\'ll have a throne to sit on.'
    },
    {
        icon: <FiUsers />,
        title: 'Additions',
        description: 'We are equipped to handle the most challenging additions.  Trust us, the addition will be your favorite part of your home.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Decks',
        description: 'Quality decks that stand the test of time.'
    },
    {
        icon: <FiUsers />,
        title: 'Basements',
        description: 'Increase your home\'s value by turning an unfinished basement into finished living space.'
    },
    { 
        icon: <FiMonitor />,
        title: 'General Contracting',
        description: 'Let us manage your project.  We have great subcontractors from every trade.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.title.replace(' ', '')}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className={val.title.replace(' ', '')}>{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;

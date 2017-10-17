import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class PortfolioDetails extends Component {
    constructor(props){
        super(props);
        this.state = {details:''};
    }

        setData(){
            let idTeacher = this.props.match.params.id;
            let idApi = this.props.title;
            let data = this.props.title; 
            const dataTeacher = data.filter(dataTeacher => {
                if(dataTeacher.id === idTeacher)
                {
                    this.setState({ details: dataTeacher }) 
                    return dataTeacher;
                }
                else{
                    //document.getElementById("header").innerHTML = "Not found"; 
                  }
        }); 
}
    componentDidMount() {
        this.setData();
    } 
    
    render() { 
        let name = this.state.details.name;
        let longDesc = this.state.details.longDescription;
        let tech = this.state.details.Technology;
        let url = this.state.details.url;
        let checkType = this.state.details.type;
        let displayPortfolio = null;
        let image = this.state.details.image;

    function DisplayDetailWeb(props){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="page-title-header">{name}</h2>
                    <p><strong className="description">Details about project: </strong>{longDesc}</p>
                    <p><strong className="description">Technologies: </strong>{tech}</p>
                    <a href={url} target="_blank" className="link-sites">Visite Website</a><br/>
                    <Link to="/portfolio"><button>Back to Portfolio</button></Link>
                </div>
            </div>
        )
    }
    function DisplayDetailGraphic(props){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h2 className="page-title-header">{name}</h2>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <p><strong className="description">Details about project: </strong>{longDesc}</p>
                    <p><strong className="description">Technologies: </strong>{tech}</p>
                    <Link to="/portfolio"><button>Back to Portfolio</button></Link>
                </div>  
                <div className="col-md-6 col-sm-12 col-xs-12">  
                    <img className="portfolio-img" src={require(`../images/${image}`)} alt={name} width="600" className="img-portfolio img-responsive"/>
               </div>
            </div>
        )
    }
    if (checkType =='Web Site' || 'Web App') {
        displayPortfolio = <DisplayDetailWeb />;
    } if(checkType == 'Graphic Design'){
        displayPortfolio = <DisplayDetailGraphic />;
    } 
    return (
            <div className="container">
                   {displayPortfolio}
            </div>
    )
}}

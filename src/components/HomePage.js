import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./NavBar";
import BottomPage from "./BottomPage";
import Marc from "../assets/marc.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from 'react-bootstrap'

 class HomePage extends PureComponent{
	constructor(props){
		super(props);
			this.state = {
				isOpen: false, 
				MarcImg: Marc
			}
	}


	toNextPage = () => {
	  		 const { history } = this.props;
	  		 if(history) history.push('/CodingProjects');
	}

	render(){
		return(
			<div className="home-page-containter">
				<NavBar />
				<br/>
				<div className="home-page-card">					
					<Card style={{ width: '29rem', borderRadius: '25px', backgroundColor: "mediumaquamarine" }}>
					  <img src={Marc} className="marc-image" width="178.57px" height="250px" alt="marc" borderRadius='25px' />
						  
					  <Card.Body>
						<br />
					    <h1 className="marc-title-card-name">Marc Krivitzky</h1>
					
						<h5 className="marc-title-card-job">Front-end developer</h5>
					    <p className="marc-title-card-description">
					     	My name is Marc Krivitzky, I am a creative, organized, 
							and hard working individual looking to begin
						    my career in front-end developing.  Before beginning my 
							journey into developing, I worked as an accounting administrator 
							at a company called AKRF, Inc.  This provided a strong 
							foundation in interpersonal, analytical, and collaborative problem 
							solving, as well as more general administrative tasks within a 
							professional setting.  My entire time working in accounting I 
							dreamed of finding a career path that excited me each and everyday.
							It was not until the beginning of 2021 that 
							I began to gain an interest in learning how to code.  I instantly fell 
							in love with everything there is to know and learn about it.    
							It didn't take long for me to enroll myself in an intensive coding 
							bootcamp called Promineo Tech.  Our course was primarily focused on building 
							out frontend skills such as: Javascript, HTML, CSS, Jquery, AJAX, 
							and ReactJS.  
						</p>
					  </Card.Body>
					</Card>
				</div>
				<br/>
				<BottomPage/>
			</div>
		);
	}
}

export default withRouter(HomePage)


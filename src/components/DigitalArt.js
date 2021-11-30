import React, { PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import NavBar from "./NavBar";
import drawing1 from "../assets/drawing1.jpg"
import drawing2 from "../assets/drawing2.jpg"
import drawing3 from "../assets/drawing3.jpg"
import drawing4 from "../assets/drawing4.jpg"
import drawing5 from "../assets/drawing5.jpg"
import drawing6 from "../assets/drawing6.jpg"
import drawing7 from "../assets/drawing7.jpg"
import drawing8 from "../assets/drawing8.jpg"
import drawing9 from "../assets/drawing9.jpg"
import drawing10 from "../assets/drawing10.png"
import drawing11 from "../assets/drawing11.png"
import drawing12 from "../assets/drawing14.png"

import BottomPage from "./BottomPage";


 class DigitalArt extends PureComponent{
	constructor(props){
		super(props);
		
	}

	render(){
		
		return(
			<div className="home-page-containter">
				<NavBar/>
				<br />
				<h2 className="art-title"> Photoshop Art </h2>
				<br />
				<div className="drawings">
					 <Row>
					   <Col xs='4'><img src={drawing1} width="317px" height="317px" id="drawing-1"/> </Col>
					   <Col xs='4'><img src={drawing2} width="317px" height="317px" id="drawing-2"/> </Col>
					   <Col xs='4'><img src={drawing3} width="317px" height="317px" id="drawing-3"/> </Col>
					  </Row>
					<br/>
					 <Row>
					   <Col xs='4'><img src={drawing10} width="317px" height="317px" id="drawing-7"/> </Col>
					   <Col xs='4'><img src={drawing8} width="317px" height="317px" id="drawing-8"/> </Col>
					   <Col xs='4'><img src={drawing6} width="317px" height="317px"id="drawing-6"/> </Col>
					  </Row>
					<br/>
					 <Row>
					   <Col xs='4'><img src={drawing7} width="317px" height="317px" id="drawing-7"/> </Col>
					   <Col xs='4'><img src={drawing9} width="317px" height="317px" id="drawing-9"/> </Col>
					   <Col xs='4'><img src={drawing11} width="317px" height="317px" id="drawing-8"/> </Col>
					   
					  </Row>
			   		<br/>
					  <Row>
					   <Col xs='4'><img src={drawing4} width="317px" height="317px" id="drawing-4"/> </Col>
					   <Col xs='4'><img src={drawing5} width="317px" height="317px"id="drawing-5"/> </Col>
					   <Col xs='4'><img src={drawing12} width="317px" height="317px" id="drawing-9"/> </Col>
					  </Row>
					
				</div>
			
			<br/>
			<BottomPage />
		</div>
		);
	}
}

export default withRouter(DigitalArt)
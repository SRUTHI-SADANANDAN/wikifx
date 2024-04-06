import React from 'react'
import './About.css'
import { Col, Container, Row } from 'react-bootstrap'
import trans from '../../Components/Transparency.png'
import empower from '../../Components/Empowering.png'
import { useNavigate } from 'react-router-dom'


  
    

export default function About() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/contact-us');
        
      }
    return (
        <div>
            <Container >
                <Row >
                    <Col >
                        <div className='about-start'>
                            <h1 className='main-head' >
                                Our mission is to help every Indian <span style={{color:"black"}}>confidently</span> Up their wealth
                            </h1>

                            <p style={{ fontSize: "1.", marginBottom: 0 }}>Welcome to thefxreview.com, the one-stop destination for in-depth, objective reviews of trading platforms, forex brokers, and educational materials. Our mission at thefxreviews.com is to equip traders of all skill levels with the information and resources they need to thrive in the fast-paced world of forex trading.</p>
                            <div style={{marginTop:23}}><button className='btn btn-outline-danger' href="/contact-us" style={{borderRadius:50}} onClick={handleClick}>
                                Contact Us
                            </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="row">
                    <div className="col-md">
                    <div class="our_solution_category">
                    <div class="solution_cards_box">
                        <div class="solution_card">
                            <div class="hover_color_bubble"></div>
                            {/* <div class="so_top_icon">
                                <img src={empower} alt="img-5"/>
                            </div> */}
                            <div class="solu_title">
                                <h3>Empowering Traders</h3>
                            </div>
                            <div class="solu_description">
                                <p>
                                We think that providing traders with precise and clear information would enable them to make wise decisions throughout their trading career. To identify the market scams and broker review

                                </p>
                                <button type="button" class="read_more_btn">Read More</button>
                            </div>
                        </div>

                    </div>

                </div>
                    </div>
                    <div className="col-md">
                    <div class="our_solution_category">
                    <div class="solution_cards_box">
                        <div class="solution_card">
                            <div class="hover_color_bubble"></div>
                            {/* <div class="so_top_icon">
                                <img src={trans} alt="img-5"/>
                            </div> */}
                            <div class="solu_title">
                                <h3>Transparency</h3>
                            </div>
                            <div class="solu_description">
                                <p>
                                We guarantee fairness and transparency in our evaluations of forex brokers and trading platforms through our thorough, unbiased research.

                                </p>
                                <button type="button" class="read_more_btn">Read More</button>
                            </div>
                        </div>

                    </div>

                </div>
                    </div>
                    <div className="col-md">
                    <div class="our_solution_category">
                    <div class="solution_cards_box">
                        <div class="solution_card">
                            <div class="hover_color_bubble"></div>
                            {/* <div class="so_top_icon">
                                <img src="img-5.png" alt="img-5"/>
                            </div> */}
                            <div class="solu_title">
                                <h3>Education</h3>
                            </div>
                            <div class="solu_description">
                                <p>
                                To assist traders in improving their abilities and staying on top of market trends, we're committed to offering insightful educational resources, such as articles, tutorials, guides, and videos.
                                </p>
                                <button type="button" class="read_more_btn">Read More</button>
                            </div>
                        </div>

                    </div>

                </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

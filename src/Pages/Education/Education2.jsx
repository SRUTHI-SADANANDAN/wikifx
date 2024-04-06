import React, { useState } from 'react';
// import { Container, Row, Col, Button, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit'; // Ensure you import from the correct MDBReact package
import {  MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';

import {Container, Button,Col,Row } from 'react-bootstrap';

const itemsPerPage = 1; // Number of items to display per page

const TradingSections = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const tradingSections = [
    {
      title: 'What is Trading ?',
      content: 'Financial trading is no different to any other form of trading: it’s about buying and selling assets with the aim of making a profit...',
      imageSrc: `${process.env.PUBLIC_URL}/TradingEdu/7SHbzOkI_mid.webp`,
      link: 'https://en.wikipedia.org/wiki/Trade',
    },
    // Add other sections here...
  ];

  const totalItems = tradingSections.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      {tradingSections.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((section, index) => (
        <section key={index} className='section1'>
          <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
          <Container>
            <Row>
              <Col md={6}>
                <MDBCard className='h-100'>
                  <MDBCardBody>
                    <MDBCardTitle className='mt-2 mb-3'>
                      <h3>{section.title}</h3>
                    </MDBCardTitle>
                    <MDBCardText>
                      <div style={{ paddingTop: ".5rem", paddingBottom: "-1.5rem" }}></div>
                      <p>{section.content}</p>
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardImage className='img-left' src={section.imageSrc} position='top' alt='...' style={{ marginTop: -87 }} />
                  <MDBCardBody>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
                      <span>Powered by Wiki-fx</span>
                      <span className='text-muted'> Education</span>
                    </div>
                    <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                    <MDBCardText>
                      The process of trading involves the exchange of financial instruments, including stocks, bonds, currencies, commodities, or derivatives, to earn a profit from fluctuations in their prices over the short term...
                    </MDBCardText>
                    <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                      <span className='share-btn'>
                        <i class="fa-solid fa-share-nodes"></i>
                      </span>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col md={6} className='right-border' >
              <h3>About Trading</h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
                Trading is difficult, and it's not something you can become proficient at quickly. You will thus want advanced education if you are serious about mastering the art of profiting from the markets. Here's where our educational concepts are useful.
                <br />
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/investment-stock.jpg`} position='top' alt='...' height={321} style={{marginTop:10}}/>


                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                These offer hundreds of insights compiled by users with a cumulative millennium of expertise. These Ideas address a wide range of subjects, including trading psychology, risk management, recommended practices for using specific instruments, columns about trading, and intricate pattern designs.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The success of Educational Ideas can be attributed to the fact that they are not restricted to expensive gated courses or stuffy academic textbooks. Rather, they are written by knowledgeable traders and hosted here for free usage by anybody.
              </p>
              <Button className='btn btn_get btn_get_three' href='https://en.wikipedia.org/wiki/Trade' target='_blank'>Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section >

            




      ))}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
        <Button onClick={handleClickPrev} disabled={currentPage === 1}>Previous</Button>
        <span style={{ margin: '0 1rem' }}>{currentPage} / {totalPages}</span>
        <Button onClick={handleClickNext} disabled={currentPage === totalPages}>Next</Button>
      </div>
    </>
  );
};

export default TradingSections;



// import React, { useState } from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
// import { Col, Container, Row } from 'react-bootstrap';

// const CardPagination = () => {
//   const [currentPage, setCurrentPage] = useState(0);
  
//   const handleNextPage = () => {
//     setCurrentPage(currentPage + 3);
//   };
  
//   const handlePrevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };



//   return (
//     <div>
//   <Container>
//          <Row>
//              <Col>
//                   <MDBCard className='h-100'>
//                     <MDBCardBody>
//                       <MDBCardTitle className='mt-2 mb-3'>
//                         <h3>What is Trading?</h3>
//                       </MDBCardTitle>
//                       <MDBCardText>
//                         <div style={{ paddingTop: ".5rem", paddingBottom: "-1.5rem" }}></div>
//                         <p>Financial trading is no different to any other form of trading: it’s about buying and selling assets with the aim of making a profit. Discover key concepts, participants and markets involved in financial trading. The success of trading is dependant on the ability of a trader to be profitable over a period of time.</p>
//                       </MDBCardText>
//                     </MDBCardBody>
//                     <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/7SHbzOkI_mid.webp`} position='top' alt='...' style={{marginTop: -87}} />
//                     <MDBCardBody>
//                       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
//                         <span>Powered by Wiki-fx</span>
//                         <span className='text-muted'>Education</span>
//                       </div>
//                       <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
//                       <MDBCardText>
//                         The process of trading involves the exchange of financial instruments, including stocks, bonds, currencies, commodities, or derivatives, to earn a profit from fluctuations in their prices over the short term. Traders who engage in this activity can be individuals, institutions, or automated systems that execute trades based on predefined criteria.
//                       </MDBCardText>
//                       <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
//                         <span className='share-btn'>
//                           <i className="fa-solid fa-share-nodes" ></i>
//                         </span>
//                       </div>
//                     </MDBCardBody>
//                   </MDBCard>
//              </Col>
//          </Row>
//   </Container>
      
//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
//         <span>{currentPage + 1}</span>
//         <button onClick={handleNextPage} disabled={currentPage === 2}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default CardPagination;

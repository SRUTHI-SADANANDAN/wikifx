import { React, useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBPagination,MDBPaginationLink,MDBPaginationItem
} from 'mdb-react-ui-kit';
import './Education.css'
import ReactPlayer from 'react-player';
import './Video.css'
import { Col, Container, Row, Button, Pagination } from 'react-bootstrap'

import Related from './Related';
import TradingSections from './Education2';
import App from './Education2';
import CardPagination from './Education2';
import {motion,AnimatePresence} from 'framer-motion'




const cryptoTrading = 'https://www.youtube.com/watch?v=EYb9eDsxgrs';
const investmentBeginner = 'https://www.youtube.com/watch?v=8Ij7A1VCB7I'
const beginnerGuideTrading = 'https://www.youtube.com/watch?v=teIlt2Vvebs&list=PLoaYyJ1XHGSaIO3FCMxASGIHsRE220Gn7'
const startTrading2024 = 'https://www.youtube.com/watch?v=u_dEHmKFXhE'
const tradingBeginner = 'https://www.youtube.com/watch?v=_YVQN6_nkfs'

export default function Education() {
  const [clickedItemId, setClickedItemId] = useState(null)

  const handleItemClick = (id) => {
    console.log(id);
    setClickedItemId(id)
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      });
      console.log('Successfully shared');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
    const data = [{
      title:"What is Trading ?",
      
    }]


  
  


  return (
    <>
      <div className='education-page'>
        <Container>
          <Row >
            <Col lg={6}>
              <div className="mt-5 no-gutters slider-text align-items-center">
                <div  >
                  <div
                    className="text mt-5 pt-5 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    data-aos-duration={1000}
                  >
                    <span >Welcome to something</span>
                    <h1 className="mt-4">  A Comprehensive Approach to Mastering the  <a href="https://www.google.com/search?q=Trading+market+education" className='text-with-underline' target="_blank">Market</a></h1>
                    <p className="mt-4 desc">
                      Stay informed about market news, economic indicators, and geopolitical events that influence currency prices.
                      Use technical and fundamental analysis to make informed trading decisions.
                    </p>
                    <p>
                      <button className='btn btn_get btn_get_three mt-3 p-lg-4 py-lg-3'> Get Started Now! </button>
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className='section1'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container >
          <Row  >
            <Col md={6}  >
              <MDBCard className='h-100'>
                <MDBCardBody>
                  <MDBCardTitle className='mt-2 mb-3' >
                    <h3>
                    What is Trading ?
                    </h3>
                    
                    </MDBCardTitle>
                  <MDBCardText>
                  <div style={{ paddingTop: ".5rem", paddingBottom: "-1.5rem" }}></div>
                   <p> Financial trading is no different to any other form of trading: it’s about buying and selling assets with the aim of making a profit. Discover key concepts, participants and markets involved in financial trading. The success of trading is dependant on the ability of a trader to be profitable over a period of time.</p>
                                     </MDBCardText>
                </MDBCardBody>
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg1.jpg`} position='top' alt='...' style={{marginTop:-94,width:510}} />
                <MDBCardBody>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                    <span>Powered by Wiki-fx</span>

                    <span className='text-muted'> Education</span>
                  </div>
                  <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                  <MDBCardText>
                    The process of trading involves the exchange of financial instruments, including stocks, bonds, currencies, commodities, or derivatives, to earn a profit from fluctuations in their prices over the short term. Traders who engage in this activity can be individuals, institutions,
                    or automated systems that execute trades based on predefined criteria.
                  </MDBCardText>

                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <span className='share-btn'>
                      <i class="fa-solid fa-share-nodes" onClick={handleShare}></i>
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard >
            </Col>

            <Col md={6} className='right-border' >
              <h3>About Trading</h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
                Trading is difficult, and it's not something you can become proficient at quickly. You will thus want advanced education if you are serious about mastering the art of profiting from the markets. Here's where our educational concepts are useful.
                <br />
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg2.jpg`} position='top' alt='...' style={{marginTop:10}}/>


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

      <section className='section2'>
        <div style={{ paddingTop: "5em", paddingBottom: "5em" }}></div>
        <Container >
          <Row>
            <Col md={6}>
              <h3 style={{ color: '#131722' }}>Platform Provision: </h3>
              <p>
              They offer trading platforms and tools necessary for trading in the forex market. These platforms may include desktop, web-based, or mobile trading applications, providing traders with real-time market data, charts, technical analysis tools, and order management functionalities.
              </p>

              <Button className='btn btn_get btn_get_three' href='https://youtu.be/yS12523JVN8' target='_blank'>Watch Now</Button>
            </Col>
            <Col md={6}>
              <h3 style={{ color: '#131722' }}>Watch Our Educational Videos</h3>
              <ReactPlayer style={{ border: '1px solid #e0e3eb', background: '#131722',boxSizing: 'border-box' }} height={254} width={'100%'} url={'https://youtu.be/yS12523JVN8?si=OcAcLBNHRSkxrd6v'} controls />
            </Col>
          </Row>
        </Container>
      </section>



      <section className='section1'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container >
          <Row  >
            <Col md={6} className='right-border' >
              <h3>Forex Trading!</h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
                Forex trading, or foreign exchange trading (FX), is the process of converting one currency into another. It's one of the most active markets in the world, with around $6.6 trillion worth of forex transactions every day.
                <br />
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg3.jpg`} position='top' alt='...' style={{marginTop:14}} height={306}/>

                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                Foreign exchange trading, which is also known as forex trading or currency trading, is the act of buying and selling currencies on the foreign exchange market to make a profit from fluctuations in exchange rates.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The forex market is the biggest and most liquid financial market in the world, with a daily trading volume that surpasses $6 trillion USD.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                
              </p>
              <Button className='btn btn_get btn_get_three' href='https://en.wikipedia.org/wiki/Foreign_exchange_market' target='_blank'>Learn More</Button>
            </Col>


            <Col md={6} >
              <MDBCard className='h-100'>
                <MDBCardBody>
                  <MDBCardTitle className='card-small-title'>
                    <h3>What is Forex ?</h3>
                  </MDBCardTitle>
                  <MDBCardText>
                 <p style={{marginTop:32}}> Forex trading, or FX trading, involves buying and selling different currencies with the aim of making a profit. At its core, forex trading is about capturing the changing values of pairs of currencies.</p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg4.webp`} position='top' alt='...' style={{marginTop:-32}} />
                {/* <video controls>
                  <source src={`${process.env.PUBLIC_URL}/TradingEdu/chart-big.avc1.5ddfd85030f4ba213936.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <MDBCardBody>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                    <span>Powered by Wiki-fx</span>

                    <span className='text-muted'> Education</span>
                  </div>
                  <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                  <MDBCardText>
                    Forex trading involves trading currency pairs, where one currency is exchanged for another.
                    The most commonly traded currency pairs include EUR/USD (Euro/US Dollar), GBP/USD (British Pound/US Dollar), USD/JPY (US Dollar/Japanese Yen), and USD/CHF (US Dollar/Swiss Franc).
                  </MDBCardText>

                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <span className='share-btn'>
                      <i class="fa-solid fa-share-nodes" onClick={handleShare}></i>
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </section >


      <section className='section1'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container >
          <Row  >
            <Col md={6} >
              <MDBCard className='h-100'>
                <MDBCardBody>
                  <MDBCardTitle className='card-small-title'>
                    <h3>What is Trade Execution ?</h3>
                  </MDBCardTitle>
                  <MDBCardText>
                  <p style={{marginTop:29}}>Forex brokers execute buy and sell orders on behalf of their clients in the forex market. They provide access to various trading platforms (such as MetaTrader 4 or 5) through which traders can place their orders.</p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg5.jpeg`} position='top' alt='...' style={{marginTop:-72}} width={306}/>
                <MDBCardBody>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                    <span>Powered by Wiki-fx</span>

                    <span className='text-muted'> Education</span>
                  </div>
                  <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                  <MDBCardText>
                  Trade execution is the process of completing a buy or sell order for a financial asset, such as stocks, bonds, commodities, or currencies. It involves the actual buying or selling of the asset at a specified price and quantity. Trade execution can occur through various methods, including market orders, limit orders, and stop orders.
                  </MDBCardText>

                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <span className='share-btn'>
                      <i class="fa-solid fa-share-nodes" onClick={handleShare}></i>
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col md={6} className='right-border' >
              <h3>Liquidity Provision:</h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
              Brokers aggregate liquidity from multiple liquidity providers, including banks, financial institutions, and other brokers, to offer competitive bid-ask spreads to their clients. This ensures that traders can execute their orders at the best available prices.
                <br />
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg6.jpg`} position='top' alt='...' height={306} />

                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The main goal of liquidity provision is to facilitate trading by ensuring that there are always buyers and sellers in the market, thus reducing the bid-ask spread and providing price stability. Market makers profit from the spread between the bid and ask prices, and they manage their risks by adjusting their bid and ask prices based on market conditions and order flow.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                Market makers play a crucial role in ensuring smooth and efficient market operations. Without liquidity providers, markets could become illiquid, with wide bid-ask spreads and price volatility, making it more difficult for traders to buy or sell securities at fair prices.
              </p>
              <Button className='btn btn_get btn_get_three' href='https://en.wikipedia.org/wiki/Liquidity' target='_blank'>Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section >

      <section className='section2'>
<div style={{ paddingTop: "5em", paddingBottom: "5em" }}></div>
<Container >
  <Row>
    <Col md={6}>
      <h3 style={{ color: '#131722' }}>How Start Trading as a Beginner</h3>
      <p>
        Learn about the financial markets, various trading techniques, risk management,
        and the instruments you'll be trading
        (stocks, FX, cryptocurrencies, etc.) before you start trading.
        Begin with a demo account or trade with small amounts of real money to gain experience without risking large sums.
      </p>

      <Button className='btn btn_get btn_get_three' href='https://www.youtube.com/watch?v=dV00JxVDBdk' target='_blank'>Watch Now</Button>
    </Col>
    <Col md={6}>
      <h3 style={{ color: '#131722' }}>Watch Our Educational Videos</h3>
      <ReactPlayer style={{ border: '1px solid #e0e3eb', background: '#131722',boxSizing: 'border-box' }} height={254} width={'100%'} url={'https://www.youtube.com/watch?v=dV00JxVDBdk'} controls />
    </Col>
  </Row>
</Container>
</section>

  <section className='section1'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container >
          <Row  >
            <Col md={6} className='right-border' >
              <h3>Risk Management: </h3>
              <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
              <p>
              Forex brokers often provide risk management tools such as stop-loss and take-profit orders, which help traders manage their risk exposure and protect their capital from significant losses.
                <br />
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg7.jpg`} position='top' alt='...' style={{marginTop:18}} height={306} />

                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                Risk management in trading refers to the process of identifying, assessing, and controlling risks associated with trading financial instruments such as stocks, bonds, commodities, or currencies. The goal of risk management is to minimize potential losses and protect capital while maximizing returns.
                <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                There is no way to avoid risk in trading. Every single trade could, theoretically at least, end up a loser. In fact, a successful trader can lose money on trades more often than they make money—but still end up ahead in the long run if the size of their gains on winning trades far exceeds the losses on their losers.
                {/* <br />
                <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                The first key to risk management in trading is determining your trading strategy's win-loss ratio, and the average size of your wins and losses. If you know these numbers, and they add up to long-term profitability, you are well on your way to successful trading. */}
              </p>
              <Button className='btn btn_get btn_get_three' href='https://en.wikipedia.org/wiki/Risk_management' target='_blank'>Learn More</Button>
            </Col>


            <Col md={6} >
              <MDBCard className='h-100'>
                <MDBCardBody>
                  <MDBCardTitle className='card-small-title'>
                    <h3 style={{marginTop:12}}>What is Leverage?</h3>
                  </MDBCardTitle>
                  <MDBCardText>
                    <p style={{marginTop:12}}>Many forex brokers offer leverage, allowing traders to control larger positions with a relatively small amount of capital. However, it's important to note that leverage magnifies both potential profits and losses, so it should be used with caution.</p>
                    
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage className='img-left' src={`${process.env.PUBLIC_URL}/TradingEdu/eduimg8.webp`} position='top' alt='...' style={{marginTop:-76}} />
                {/* <video controls>
                  <source src={`${process.env.PUBLIC_URL}/TradingEdu/chart-big.avc1.5ddfd85030f4ba213936.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> */}
                <MDBCardBody>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

                    <span>Powered by Wiki-fx</span>

                    <span className='text-muted'> Education</span>
                  </div>
                  <div style={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}></div>
                  <MDBCardText>
                  Basically, leverage trading means that the investor can have a trading position that is worth much more than the amount of money they put into the investment (more about trading positions below). The flip side of leverage is that the risk is also increased - in case the investment doesn’t turn out as planned, you could incur losses higher than the amount you invested, i.e. your debt increases.                  </MDBCardText>

                  <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <span className='share-btn'>
                      <i class="fa-solid fa-share-nodes" onClick={handleShare}></i>
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
        </Container>
      </section >  

      


      

      <section className='section3'>
        <div style={{ paddingTop: "4em", paddingBottom: "4em" }}></div>
        <Container  >
          {/* <Related /> */}
        </Container>
      </section>
    </>
  )
  }

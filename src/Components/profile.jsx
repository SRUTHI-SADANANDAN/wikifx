import React, { useEffect, useState } from 'react';
import { Breadcrumb, Card, Button, Image, Col, Row } from 'react-bootstrap';
import './profile.css'
import Slider from "react-slick";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import investment from '../Components/investing.jpg'
import news from '../Components/cryptoslate.jpg'
import lorem from '../Components/lorem.jpg'
import logo2 from '../Components/LOGO2.avif'
import logo3 from '../Components/logo3.avif'
import logo4 from '../Components/logotriangle.avif'
import logo5 from '../Components/logo5.avif'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from '../Constants/customstyle';
import image from '../Components/lorem.jpg'
import rank1 from '../Components/rank1.svg'
import rank2 from '../Components/rank-2.svg'
import rank3 from '../Components/rank-3.svg'

import forextrade from '../Components/forexTrade.jpg'
import forextrade2 from '../Components/forextrade2.jpg'
import forextrade3 from '../Components/forextrade3.jpg'
import forextrade4 from '../Components/forextrade4.jpg'
import forextrade5 from '../Components/forextrade5.jpg'
import 'animate.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LazyLoad from "react-lazyload";
import badge1 from '../Components/badge1.png'
import badge2 from '../Components/badge2.png'
import badge3 from '../Components/badge3.png'



const CardSlider = () => {
    const [isHovered, setIsHovered] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 9000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <i className="fa-solid fa-arrow-right"></i>,
        prevArrow: <i className="fa-solid fa-arrow-left"></i>
    };
}

// const LazyImage = ({ src, alt }) => (
//     <LazyLoadImage
//       alt={alt}
//       src={src} 
//       effect="blur" // Optional: Adds a blur effect while loading
//       threshold={100} // Optional: Distance in px to load before coming into viewport
//     />
//   );

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

const DivBetween = styled.div`
display: flex;
justify-content: space-between;
margin-top:4px;
`

const UserProfile = () => {
    const [activeItem, setActiveItem] = useState('rankings');
    const [data, setData] = useState([]);
    const handleItemClick = (item) => { setActiveItem(item) };
    const sizeLg = window.innerWidth >= 768;
    const sizeMs = window.innerWidth <= 767
    const [isHovered, setIsHovered] = useState(false)

    const rankImages = [
        `${process.env.PUBLIC_URL}/ranking-list logo/1.svg`,
        `${process.env.PUBLIC_URL}/ranking-list logo/2.svg`,
        `${process.env.PUBLIC_URL}/ranking-list logo/3.svg`,
    ];

    useEffect(() => {
        // fetch("https://fakestoreapi.com/products?limit=5").then((response) => response.json()).then((data) => {
        //     console.log(data)
        //     setData(data);
        // })
    }, [])


    // const fakeData = [
    //     {
    //         id: 1,
    //         name: "Product 1",
    //         image: "https://eimgjys.fxeyee.com/logo/0001698019/FXT0001698019_907528.png_wiki-template-global",
    //         rankImg: `${process.env.PUBLIC_URL}/ranking-list logo/1.svg`,
    //     },
    //     {
    //         id: 2,
    //         name: "Product 2",
    //         image: "https://eimgjys.fxeyee.com/logo/637853008698807935/FXT637853008698807935_296902.jpg_wiki-template-global",
    //         rankImg: `${process.env.PUBLIC_URL}/ranking-list logo/2.svg`,
    //     },
    //     {
    //         id: 3,
    //         name: "Product 3",
    //         image: "https://resources1.interface003.com/web20/img/rankingList/iocn-bg.png?v=Sat%20Jan%2020%202024%2012:37:47%20GMT+0530%20(India%20Standard%20Time)",
    //         rankImg: `${process.env.PUBLIC_URL}/ranking-list logo/3.svg`,
    //     },
    // ];


    const renderHeaderContent = () => {
        switch (activeItem) {
            case 'rankings':
                return (
                    <a href="/en/wikifxranking.html" className="header-rankings">
                        <span><i className="fa-solid fa-trophy"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Rankings
                        </span>
                    </a>
                );
            case 'fire':
                return (
                    <a href="/en/wikifxfire.html" className="header-rankings">
                        <span><i className="fa-solid fa-fire"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Fire
                        </span>
                    </a>
                );


            case 'tv':
                return (
                    <a href="/en/wikifxranking.html" className="header-rankings">
                        <span><i className="fa-solid fa-tv"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Rankings
                        </span>
                    </a>
                );
            case 'danger':
                return (
                    <a href="/en/wikifxfire.html" className="header-rankings">
                        <span><i className="fa-solid fa-circle-exclamation"></i></span>
                        <span className="header-rankings-text" style={{ marginLeft: 6 }}>
                            Danger
                        </span>
                    </a>
                );

            default:
                return null;
        }
    };

    const settings = {
        // Your existing settings
        dots: true,
        infinite: true,
        speed: 9000,
        slidesToShow: 3,
        slidesToScroll: 3,
        // Adding responsive settings below
        responsive: [
            {
                breakpoint: 1024, // For devices with width less than 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600, // For devices with width less than 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can add more breakpoints as needed
        ]
    };


    return (
        <section >
            <div className="container py-5" data-aos="zoom-in">
                <div className="row">
                    <div>
                        <section style={{ padding: 20, backgroundColor: "white", borderRadius: 17 }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-md">
                                                <img src={news} alt="" height={214} width={285} style={{ borderRadius: 14 }} />
                                            </div>
                                            <div className="col-md newcontent">
                                                <a href='#' style={{ textDecorationColor: "black" }}></a>
                                                <div>
                                                    <h3 style={{ color: "black" }}>Asian stocks surge as Fed keeps rate cut hopes alive; Nikkei at record high</h3>
                                                    <p>Investing.com- Most Asian stocks rallied on Thursday, with Japan’s Nikkei 225 hitting a record high after the Federal Reserve kept interest rates steady and said it was still considering at least three rate cuts in 2024. Regional...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md">
                                                <div className='d-ruby'>
                                                    <img src={investment} alt="" height={150} width={200} style={{ borderRadius: 10 }} />
                                                    <p style={{ marginTop: 10, textAlign: "justify" }}>The Indian stock market indices, Sensex and Nifty 50, are expected to see a muted opening on Friday amid mixed global market cues.</p>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='d-ruby'>
                                                    <img src={investment} alt="" height={150} width={200} style={{ borderRadius: 10 }} />
                                                    <p style={{ marginTop: 10, textAlign: "justify" }}>The Indian stock market indices, Sensex and Nifty 50, are expected to see a muted opening on Friday amid mixed global market cues.</p>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='d-ruby'>
                                                    <img src={investment} alt="" height={150} width={200} style={{ borderRadius: 10 }} />
                                                    <p style={{ marginTop: 10, textAlign: "justify" }}>The Indian stock market indices, Sensex and Nifty 50, are expected to see a muted opening on Friday amid mixed global market cues.</p>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='d-ruby'>
                                                    <img src={investment} alt="" height={150} width={200} style={{ borderRadius: 10 }} />
                                                    <p style={{ marginTop: 10, textAlign: "justify" }}>The Indian stock market indices, Sensex and Nifty 50, are expected to see a muted opening on Friday amid mixed global market cues.</p>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='d-ruby'>
                                                    <img src={investment} alt="" height={150} width={200} style={{ borderRadius: 10 }} />
                                                    <p style={{ marginTop: 10, textAlign: "justify" }}>The Indian stock market indices, Sensex and Nifty 50, are expected to see a muted opening on Friday amid mixed global market cues.</p>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div className='d-ruby'>
                                                    <img src={investment} alt="" height={150} width={200} style={{ borderRadius: 10 }} />
                                                    <p style={{ marginTop: 10, textAlign: "justify" }}>The Indian stock market indices, Sensex and Nifty 50, are expected to see a muted opening on Friday amid mixed global market cues.</p>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4 mt-4 mt-lg-0"> */}
                                    {/* <ReactPlayer style={{ border: '1px solid #e0e3eb', background: '#131722', boxSizing: 'border-box' }} height={230} width={'100%'} url={'https://www.youtube.com/live/iyyI-_iPbxo?si=nxYGo-Q5sH_Kxs1C'} controls /> */}
                                    <div className="col-lg-4">
                                        <h4 style={{ textAlign: "center", color: "red" }}>TOP FIVE BROKERS</h4>

                                        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 20, borderRadius: 11, padding: 10, backgroundColor: "white" }}>
                                            <div className="row">
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <img src={lorem} alt="" style={{ margin: 5, height: 80,borderRadius: 50}} />
                                                    <h3 style={{ marginTop: 10, color: "#343a40", fontSize: 24, fontWeight: "bold" }}>LOREM</h3>

                                                </div>
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    {/* <h1 style={{ marginTop: 10, fontSize: 48, color: "#ff6f61", fontWeight: "bold" }}>1</h1> */}
                                                    <img src={badge1} alt="" style={{ marginTop: 10, height: 50,borderRadius: 50 }} />

                                                    <h4 style={{ marginBottom: 5, color: "#ff6f61", fontSize: 20 }}>8.06  Score</h4>
                                                    <div className='year' style={{ fontSize: 16, color: "black",fontFamily:"jealousy" }}>
                                                        <p>Above 20 years</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 20, borderRadius: 11, padding: 10, backgroundColor: "white" }}>
                                            <div className="row">
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <img src={logo2} alt="" style={{ margin: 5, height: 80,borderRadius: 50}} />
                                                    <h3 style={{ marginTop: 10, color: "#343a40", fontSize: 24, fontWeight: "bold" }}>LOREM</h3>
                                                </div>
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    {/* <h1 style={{ marginTop: 10, fontSize: 48, color: "#ff6f61", fontWeight: "bold" }}>2</h1> */}
                                                    <img src={badge2} alt="" style={{ marginTop: 10, height: 50,borderRadius: 50 }} />

                                                    <h4 style={{ marginBottom: 5, color: "#ff6f61", fontSize: 20 }}>8.06  Score</h4>
                                                    <div className='year' style={{ fontSize: 16, color: "black",fontFamily:"jealousy" }}>
                                                        <p>Above 20 years</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 20, borderRadius: 11, padding: 10, backgroundColor: "white" }}>
                                            <div className="row">
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <img src={logo3} alt="" style={{ margin: 5, height: 80, borderRadius: 50}} />
                                                    <h3 style={{ marginTop: 10, color: "#343a40", fontSize: 24, fontWeight: "bold" }}>LOREM</h3>
                                                </div>
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    {/* <h1 style={{ marginTop: 10, fontSize: 48, color: "#ff6f61", fontWeight: "bold" }}>3</h1> */}
                                                    <img src={badge3} alt="" style={{ marginTop: 10, height: 50 }} />

                                                    <h4 style={{ marginBottom: 5, color: "#ff6f61", fontSize: 20 }}>8.06  Score</h4>
                                                    <div className='year' style={{ fontSize: 16, color: "black",fontFamily:"jealousy"}}>
                                                        <p>Above 20 years</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 20, borderRadius: 11, padding: 10, backgroundColor: "white" }}>
                                            <div className="row">
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <img src={logo4} alt="" style={{ margin: 5, height: 80, borderRadius: 50}} />
                                                    <h3 style={{ marginTop: 10, color: "#343a40", fontSize: 24, fontWeight: "bold" }}>LOREM</h3>
                                                </div>
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <h1 style={{ marginTop: 10, fontSize: 48, color: "maroon", fontWeight: "bold" }}>4</h1>

                                                    <h4 style={{ marginBottom: 5, color: "#ff6f61", fontSize: 20 }}>8.06  Score</h4>
                                                    <div className='year' style={{ fontSize: 16, color: "black",fontFamily:"jealousy" }}>
                                                        <p>Above 20 years</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", marginTop: 20, borderRadius: 11, padding: 5, backgroundColor: "white" }}>
                                            <div className="row">
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <img src={logo5} alt="" style={{ margin: 5, height: 80, borderRadius: 50}} />
                                                    <h3 style={{ marginTop: 10, color: "#343a40", fontSize: 24, fontWeight: "bold" }}>LOREM</h3>
                                                </div>
                                                <div className="col" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                    <h1 style={{ marginTop: 10, fontSize: 48, color: "maroon", fontWeight: "bold" }}>5</h1>
                                                    <h4 style={{ marginBottom: 5, color: "#ff6f61", fontSize: 20 }}>8.06  Score</h4>
                                                    <div className='year' style={{ fontSize: 16, color: "black" }}>
                                                        <p>Above 20 years</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>


                                    {/* </div> */}
                                </div>

                            </div>
                        </section>

                    </div>


                    <section className="py-5" style={{ marginTop: 50 }}>
                        <div className="container">
                            <div className="row align-items-center ">
                                <div className="col-lg-6">
                                    <div className="row justify-content-start pb-4">
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">
                                                    <span><i class="fa-solid fa-rocket" style={{ fontSize: '30px', color: 'rgba(232,13,15,255)' }}></i></span>
                                                </div>
                                                <h5>Fully integrated</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">
                                                    <span><i class="fa-solid fa-cart-shopping" style={{ fontSize: '30px', color: 'rgba(232,13,15,255)' }}></i></span>
                                                </div>
                                                <h5>Payments functionality</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-start">
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">
                                                    <span><i class="fa-solid fa-paper-plane" style={{ fontSize: '30px', color: 'rgba(232,13,15,255)' }}></i></span>
                                                </div>
                                                <h5>Prebuilt components</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info">
                                                <div className="icon icon-md">

                                                    <span><i class="fa-solid fa-bell" style={{ fontSize: '30px', color: 'rgba(232,13,15,255)' }}></i></span>
                                                </div>
                                                <h5>Improved platform</h5>
                                                <p>
                                                    We get insulted by others, lose trust for those We get back
                                                    freezes
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 ms-auto">
                                    <div className="card" data-aos="zoom-in-left">
                                        <img
                                            className="card-img-top"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/funny.jpg"
                                        />
                                        <div
                                            className="position-relative overflow-hidden"
                                            style={{ height: 50, marginTop: "-50px" }}
                                        >
                                            <div className="position-absolute w-100 top-0 z-index-1">
                                                <svg
                                                    className="waves waves-sm"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    viewBox="0 24 150 40"
                                                    preserveAspectRatio="none"
                                                    shapeRendering="auto"
                                                >
                                                    <defs>
                                                        <path
                                                            id="card-wave"
                                                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                                                        />
                                                    </defs>
                                                    <g className="moving-waves">
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={-1}
                                                            fill="rgba(255,255,255,0.30"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={3}
                                                            fill="rgba(255,255,255,0.35)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={5}
                                                            fill="rgba(255,255,255,0.25)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={8}
                                                            fill="rgba(255,255,255,0.20)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={13}
                                                            fill="rgba(255,255,255,0.15)"
                                                        />
                                                        <use
                                                            xlinkHref="#card-wave"
                                                            x={48}
                                                            y={16}
                                                            fill="rgba(255,255,255,0.99)"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="card-body">

                                            <h4 style={{ color: "black", fontFamily: "Courier T1" }}>Soft UI Design System</h4>
                                            <p>
                                                One of the most beautiful and complex UI Kits built by the team
                                                behind Creative Tim. That's pretty impressive.
                                            </p>
                                            <a href="javascript:;" className="text-danger icon-move-right">
                                                More about us
                                                <i
                                                    className="fas fa-arrow-right text-xs ms-1"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className='few-newses'>
                        <div className='text-center mb-5'>
                            <h2 className='head'>Stay Updated</h2>
                            <p className='desc'>
                                Get the latest Market News at your fingertips
                            </p>

                            <a href="#" className='btn btn-outline-danger'>Read market talk</a>
                        </div>

                        <div className="slider-container">
                            <Slider {...settings}>
                                {[forextrade, forextrade2, forextrade3, forextrade4, forextrade5].map((imgSrc, index) => (
                                    <LazyLoad key={index} height={200} once>
                                        <div
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            <Card className="card-section">
                                                <Card.Img variant="top" src={imgSrc} />
                                                <Card.Body>
                                                    <Card.Title>Card Title</Card.Title>
                                                    <Card.Text>
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                    </Card.Text>
                                                    <Button className="read-more" variant="danger">
                                                        Read more
                                                    </Button>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <DivBetween>
                                                        <small className="text-muted">Last updated 3 mins ago</small>
                                                        <small className="text-muted">News Letters</small>
                                                    </DivBetween>
                                                </Card.Footer>
                                            </Card>
                                        </div>
                                    </LazyLoad>
                                ))}
                            </Slider>
                        </div>
                    </section>


                    <div className="footer-section  py-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <h4 class="mb-1">Thank you for your support!</h4>
                                    <p class="lead mb-0">Delivering the best products</p>
                                </div>
                                <div class="col-lg-6 buttons">
                                    <div className="row">
                                        <div className="col-md-3 col-6 text-center">
                                            <a href="javascript:;" className=" btn btn-sm btn-twitter mb-0 me-2">
                                                <i className="fab fa-twitter  " aria-hidden="true"></i> Twitter
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-6 text-center">
                                            <a href="javascript:;" className="btn  btn-sm btn-facebook mb-0 me-2">
                                                <i className="fab fa-facebook-square  " aria-hidden="true"></i> Facebook
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-6 text-center">
                                            <a href="javascript:;" className="btn  btn-sm btn-dribbble mb-0 me-2">
                                                <i className="fab fa-instagram " aria-hidden="true"></i> Instagram
                                            </a>
                                        </div>
                                        <div className="col-md-3 col-6 text-center">
                                            <a href="javascript:;" className="btn  btn-sm btn-whatsapp mb-0 me-2">
                                                <i className="fab fa-whatsapp" aria-hidden="true"></i> Whatsapp
                                            </a>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
};

export default UserProfile;

import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
} from "mdb-react-ui-kit";
import "./Brokers.css";
import { motion, AnimatePresence } from 'framer-motion';


function Brokers() {
    return (
        <MDBContainer fluid>
            <MDBRow className="justify-content-center mb-0">
                <MDBCol md="12" xl="10">
                    <motion.div  whileHover={{
        scale: 1.05,
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
                    <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3" >
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
                                        fluid
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                        ></div>
                                    </a>
                                </MDBCol>
                                <MDBCol md="6">
                                    <h5>Quant trident shirts</h5>
                                    <div className="d-flex flex-row">
                                        <div className="text-danger mb-1 me-2">
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                        </div>
                                        <span>310</span>
                                    </div>
                                    <div className="mt-1 mb-0 text-muted small">
                                        {/* <span>100% cotton</span>
                                        <span className="text-primary"> • </span>
                                        <span>Light weight</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                                            Best finish
                                            <br />
                                        </span> */}
                                    </div>
                                    <div className="mb-2 text-muted small">
                                        {/* <span>Unique design</span>
                                        <span className="text-primary"> • </span>
                                        <span>For men</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                                            Casual
                                            <br />
                                        </span> */}
                                    </div>
                                    <p className="text-truncate mb-4 mb-md-0">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don't
                                        look even slightly believable.
                                    </p>
                                </MDBCol>
                                <MDBCol
                                    md="6"
                                    lg="3"
                                    className="border-sm-start-none border-start"
                                >
                                    <div style={{textAlign:"center",marginTop:20}}>
                                       <h1>90.63</h1>
                                       <div>Score</div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    </motion.div>
                </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-center mb-3">
                <MDBCol md="12" xl="10">
                <motion.div  whileHover={{
        scale: 1.05,
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
                    <MDBCard className="shadow-0 border rounded-3">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(4).webp"
                                        fluid
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                        ></div>
                                    </a>
                                </MDBCol>
                                <MDBCol md="6">
                                    <h5>Quant olap shirts</h5>
                                    <div className="d-flex flex-row">
                                        <div className="text-danger mb-1 me-2">
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                        </div>
                                        <span>289</span>
                                    </div>
                                    <div className="mt-1 mb-0 text-muted small">
                                        <span>100% cotton</span>
                                        <span className="text-primary"> • </span>
                                        <span>Light weight</span>
                                        <span classNAme="text-primary"> • </span>
                                        <span>
                                            Best finish
                                            <br />
                                        </span>
                                    </div>
                                    <div className="mb-2 text-muted small">
                                        <span>Unique design</span>
                                        <span className="text-primary"> • </span>
                                        <span>For men</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                                            Casual
                                            <br />
                                        </span>
                                    </div>
                                    <p className="text-truncate mb-4 mb-md-0">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don't
                                        look even slightly believable.
                                    </p>
                                </MDBCol>
                                <MDBCol
                                    md="6"
                                    lg="3"
                                    className="border-sm-start-none border-start"
                                >
                                   <div style={{textAlign:"center",marginTop:20}}>
                                       <h1>90.63</h1>
                                       <div>Score</div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    </motion.div>
                </MDBCol>
            </MDBRow>
            <MDBRow className="justify-content-center mb-3">
                <MDBCol md="12" xl="10">
                    <motion.div whileHover={{
        scale: 1.05,
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }} >
                    <MDBCard className="shadow-0 border rounded-3">
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/new/img(5).webp"
                                        fluid
                                        className="w-100"
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                        ></div>
                                    </a>
                                </MDBCol>
                                <MDBCol md="6">
                                    <h5>Quant ruybi shirts</h5>
                                    <div className="d-flex flex-row">
                                        <div className="text-danger mb-1 me-2">
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                            <MDBIcon fas icon="star" />
                                        </div>
                                        <span>145</span>
                                    </div>
                                    <div className="mt-1 mb-0 text-muted small">
                                        <span>100% cotton</span>
                                        <span className="text-primary"> • </span>
                                        <span>Light weight</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                                            Best finish
                                            <br />
                                        </span>
                                    </div>
                                    <div className="mb-2 text-muted small">
                                        <span>Unique design</span>
                                        <span className="text-primary"> • </span>
                                        <span>For women</span>
                                        <span className="text-primary"> • </span>
                                        <span>
                                            Casual
                                            <br />
                                        </span>
                                    </div>
                                    <p className="text-truncate mb-4 mb-md-0">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don't
                                        look even slightly believable.
                                    </p>
                                </MDBCol>
                                <MDBCol
                                    md="6"
                                    lg="3"
                                    className="border-sm-start-none border-start"
                                >
                                    <div style={{textAlign:"center",marginTop:20}}>
                                       <h1>90.63</h1>
                                       <div>Score</div>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                    </motion.div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Brokers;
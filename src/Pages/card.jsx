import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo1 from '../Components/lorem.jpg'
import logo2 from '../Components/LOGO2.avif'
import logo3 from '../Components/logo3.avif'
import logo4 from '../Components/logotriangle.avif'
import logo5 from '../Components/logo5.avif'
import logo6 from '../Components/logo6.avif'
import './RankingList.css'
import badge1 from '../Components/badge1.png'
import badge2 from '../Components/badge2.png'
import badge3 from '../Components/badge3.png'
import badge4 from '../Components/badge4.png'
import badge5 from '../Components/badge5.png'
import badge6 from '../Components/badge6.png'


const YourComponent = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1,logo:logo1, title:'FXCM',img:badge1},
    { id: 2,logo:logo2, title:'XM',img:badge2},
    { id: 2,logo:logo3, title:'STARTRADER',img:badge3},
    { id: 2,logo:logo4, title:'GO MARKETS',img:badge4},
    { id: 2,logo:logo5, title:'IC MARKETS',img:badge5},
    { id: 2,logo:logo6, title:'FP MARKETS',img:badge6}
    
    // Add more items as needed
  ];

  return (

    <div className="row">
      <div className="box">
      <h2><span style={{color:"red"}}>Ranking</span> List</h2>
    </div>
      {items.map(item => (
        <div key={item.id} className="col-md-4 mt-3">
          <motion.div
            layoutId={item.id}
            onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
            className="card p-3 mb-2"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.3 }}
          >
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="icon">
                  <i className="bx bxl-mailchimp" />
                </div>
                <div className="c-details">
                  <img src={item.logo} alt="" className='logoimg'/>
                  <span className='ms-4 companyname'>{item.title}</span>
                  <img src={item.img} alt="" width={59} className='ms-3'/>
                </div>
              </div>
              <div className="badge">
                <span></span>
              </div>
            </div>
            <div className="mt-3">
              <h4>9.06<span className='ms-1'>Score</span></h4>
              <div className='d-flex'>
                <div className='flag'>Flagshipstore</div>
                <div><span className='years ms-3'>Above 20 years</span></div>
                <div><span className='years ms-3'>Regulated in Australia</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              className="modal"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2>{items.find(item => item.id === selectedId).title}</h2>
              <p>{items.find(item => item.id === selectedId).content}</p>
              <button onClick={() => setSelectedId(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default YourComponent;

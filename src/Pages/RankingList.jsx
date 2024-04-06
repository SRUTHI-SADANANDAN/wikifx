import React from 'react'
import logo from '../Components/lorem.jpg'
import logo2 from '../Components/LOGO2.avif'
import logo3 from '../Components/logo3.png'
import './RankingList.css'
import badge1 from '../Components/badge1.png'
import badge2 from '../Components/badge2.png'
import badge3 from '../Components/badge3.png'
import badge4 from '../Components/badge4.png'
import badge5 from '../Components/badge5.png'
import { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'


function RankingList() {
  const [selectedId, setSelectedId] = useState(null)
  return (
    <div className="container py-3">
       
    <div className="box">
      <h2><span style={{color:"red"}}>Ranking</span> List</h2>
    </div>
    <div className="container mt-5 mb-3">
  <div className="row">
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="c-details">
            <img src={logo} alt="" className='logoimg'/>
              <span className='ms-4 companyname'>FXCM</span>
              <img src={badge1} alt="" width={59} className='ms-3'/>

            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-3">
        <h4>9.06<span className='ms-1'>Score</span></h4>
        <div className='d-flex'> <div className='flag'>Flagshipstore</div>
         <div><span className='years ms-2'>Above 20 years</span></div>
         <div><span className='years ms-2'>Regulated in Australia</span></div>

         </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="c-details">
            <img src={logo2} alt="" className='logoimg'/>
              <span className='ms-3 companyname'>IC mark</span>
              <img src={badge2} alt="" width={59} className='ms-2' />

            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-3">
        <h4>9.06<span className='ms-1'>Score</span></h4>
        <div className='d-flex'> <div className='flag'>Flagshipstore</div>
         <div><span className='years ms-2'>Above 20 years</span></div>
         <div><span className='years ms-2'>Regulated in Australia</span></div>

         </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="c-details">
            <img src={logo3} alt="" className='logoimg' height={100}/>
              <span className='ms-4 companyname'>XM</span>
              <img src={badge3} alt="" width={59} className='ms-4'/>

            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-3">
        <h4>9.06<span className='ms-1'>Score</span></h4>
        <div className='d-flex'> <div className='flag'>Flagshipstore</div>
         <div><span className='years ms-2'>Above 20 years</span></div>
         <div><span className='years ms-2'>Regulated in Australia</span></div>

         </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="c-details">
            <img src={logo3} alt="" className='logoimg' height={100}/>
              <span className='ms-4 companyname'>Star</span>
              <img src={badge4} alt="" width={59} className='ms-4' height={100}/>

            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-3">
        <h4>9.06<span className='ms-1'>Score</span></h4>
        <div className='d-flex'> <div className='flag'>Flagshipstore</div>
         <div><span className='years ms-2'>Above 20 years</span></div>
         <div><span className='years ms-2'>Regulated in Australia</span></div>

         </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="c-details">
            <img src={logo3} alt="" className='logoimg' height={100}/>
              <span className='ms-4 companyname'>FP</span>
              <img src={badge5} alt="" width={59} className='ms-4' height={100}/>

            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-3">
        <h4>9.06<span className='ms-1'>Score</span></h4>
        <div className='d-flex'> <div className='flag'>Flagshipstore</div>
         <div><span className='years ms-2'>Above 20 years</span></div>
         <div><span className='years ms-2'>Regulated in Australia</span></div>

         </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div className="icon">
              {" "}
              <i className="bx bxl-mailchimp" />{" "}
            </div>
            <div className="c-details">
            <img src={logo3} alt="" className='logoimg' height={100}/>
              <span className='ms-4 companyname'>FBS</span>
              <img src={badge4} alt="" width={59} className='ms-4' height={100}/>

            </div>
          </div>
          <div className="badge">
            {" "}
            <span>Design</span>{" "}
          </div>
        </div>
        <div className="mt-3">
        <h4>9.06<span className='ms-1'>Score</span></h4>
        <div className='d-flex'> <div className='flag'>Flagshipstore</div>
         <div><span className='years ms-2'>Above 20 years</span></div>
         <div><span className='years ms-2'>Regulated in Australia</span></div>

         </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default RankingList
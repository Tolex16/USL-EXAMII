import React from 'react'
import NewRealease6 from "../../Assets/Higer.jpg";
import NewRealease7 from "../../Assets/Honda.jpg";
import NewRealease8 from "../../Assets/Kia.jpg";
import NewRealease9 from "../../Assets/Mercedes.jpg";
import NewRealease10 from "../../Assets/Toyota.jpg";
import Style from './Models.module.css';

function HarderThanU() {

  return (
    <>
        <div className={Style.shopping}>
      <div className={Style.box}>
                <div className={Style.boximg}>
                    <img src={NewRealease6} alt="user" />
                </div>
                <p>HIGER</p>
            </div>
            <div className={Style.box}>
                <div className={Style.boximg}>
                    <img src={NewRealease7} alt="user" />
                </div>
                <p>HONDA</p>
            </div>
            <div className={Style.box}>
                <div className={Style.boximg}>
                    <img src={NewRealease8} alt="user" />
                </div>
                <p>KIA</p>
            </div>
            <div className={Style.box}>
                <div className={Style.boximg}>
                    <img src={NewRealease9} alt="user" />
                </div>
                <p>BENZ</p>
            </div>
            <div className={Style.box}>
                <div className={Style.boximg}>
                    <img src={NewRealease10} alt="user" />
                </div>
                <p>TOYOTA</p>
            </div>
        </div>
    </>
  )
}

export default HarderThanU;
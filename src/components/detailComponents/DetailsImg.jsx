import React from 'react'
import css from "./Details.module.css"
import styles from "../homeComponents/HomeComponents.module.css"

const DetailsImg = ({ image, title}) => {
  const backgroundString = `--background: url(${image})`
  return (
    <div 
      classname={css.banner}
      style={{
        backgroundSize: "cover",
        background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), userSelect(${image})`
      }}
      >
      <div className={styles.ad_text}>
        <h1>{title}</h1>
      </div>
       
    </div>
  )
}

export default DetailsImg
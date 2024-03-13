import React from 'react'
import styles from "./styles.module.css" 


const Discount = () =>{
  return(
    <div className={styles.background_discount}>
      <div className={styles.discount_table}>
        <div className={styles.discount_info}>
          <h2>5% off on the fiirst order</h2>
          <img src="#" alt ="#"></img>
          <form>
            <input placeholder="Name"></input>
            <input placeholder="Phone Number"></input>
            <input placeholder="Email"></input>
            <button>Get a discount</button>
          </form>
        </div>
      </div>
    </div>
  );
};



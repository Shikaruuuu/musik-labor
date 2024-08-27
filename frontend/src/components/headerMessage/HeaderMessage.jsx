import React, { useState, useEffect } from 'react';
import "./HeaderMessage.css"
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Hamburger from '../../components/hamburger/Hamburger';

export default function HeaderMessage(){

    return(
      <>
        <div className="HeaderMessage">
            <h1>
              音楽を愛するすべての人々へ
              <br />
              音楽の楽しさ、美しさ、可能性
              <br />
              その全てを届けたい
            </h1>
        </div>
      </>
    )
}

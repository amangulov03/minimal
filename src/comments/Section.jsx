import React from 'react'
import './Section.scss'

const Section = () => {
    return (
        <div>
            <div className='section'>
                <div className="main_container">
                    <div className="main_text">
                        <h1>Making brands stand out is our obsession</h1>
                        <span></span>
                        <p>Let us help your brand stand out.</p>
                    </div>
                </div>
            </div>

            <div style={{ background: '#FEFEC9', height: '30vh' }} className='end_section'>
                <p>Minimalist is a full-service digital creative agency located in Ontorio Canada. We focus on design, consulting, technology, and photography. We’ve been building unique digital products, platforms, and experiences for the past 6 years. Let us help your company grow.l</p>
                <button>Get in Touch</button>
            </div>
        </div>
    )
}

export default Section
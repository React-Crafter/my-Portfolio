import React, { useState } from 'react'
import './Home.css'

function Home() {
    
  return (
    <div>
        <section className='section-1'>
            <div className="container">
            <div className="imgAria">
                <img src="src/img/fulllogo.png" alt="" />
            </div>
            <div className="textAria">
                <h1> SOME </h1>
                <h2> INTRODUCTION </h2>
                <div className='buttonAria'>
                    <button>  LEARN MORE </button>
                </div>
            </div>
            </div>
        </section>
        <section className='section-2'>
        <div className="container">
            <div className="textAria">
                <h1> MTH PROGRAMMER </h1>
                <h2> Latest Update 2024 For<br />
                Technology </h2>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                doloribus non accusantium, nostrum beatae sequi! Eaque <br />
                recusandae dignissimos possimus ea ducimus reiciendis <br />
                tempore sint asperiores, amet dolore vero fugit, cumque <br />
                </p>
                <div className='BtnAria'>
                    <button> LEARN MORE  </button>
                </div>
            </div>
            <div className="imgAria">
                <img src="src/img/full-img1.png" alt="" />
            </div>
        </div>
        </section>
        <section className='section-3'>
            <div className="container">
                <div className='textAria'>
                    <h1> Our Sections </h1>
                    <hr />
                    <h2> Chose now and Develop Yourself  </h2>
                    <p> Proviyat by Mth Programmer in 2024 </p>
                </div>
                <div className='CardAria'>
                    
                    <div className='card'>
                        <div className="card-img">
                            <img src="src/img/full-img1.png" alt="" />
                        </div>
                        <div className="card-text">
                            <h2> Web Development Frontend </h2>
                            <p> Proviyat by Mth Programmer He is Expart for web development sector </p>
                            <button> LEARN MORE </button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className="card-img">
                            <img src="src/img/full-img1.png" alt="" />
                        </div>
                        <div className="card-text">
                            <h2> Web Development Backend </h2>
                            <p> Proviyat by Mth Programmer He is Expart for web development sector </p>
                            <button> LEARN MORE </button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className="card-img">
                            <img src="src/img/full-img1.png" alt="" />
                        </div>
                        <div className="card-text">
                            <h2> Web Development Means-Strak </h2>
                            <p> Proviyat by Mth Programmer He is Expart for web development sector </p>
                            <button> LEARN MORE </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-4">
            <div className="container">
                <div className="imgAria">
                    <img src="src/img/full-img1.png" className='img1' />
                    <img src="src/img/full-img1.png" className='img2'/>
                </div>
                <div className="textAria">
                    <h3> Welcome to MTHprogrammer </h3>
                    <hr />
                    <h2> Best Course For The <br /> Begainers </h2>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                     Corporis cupiditate ducimus blanditiis dolorem vel <br />
                     ex totam, quaerat dolorum commodi eius! Ad </p>
                     <ul>
                        <li> A Full Roadmape For Mens tark development </li>
                        <li> Complite Frontend web Development </li>
                        <li> Complite backend web Development </li>
                     </ul>
                     <button> LEARN MORE </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
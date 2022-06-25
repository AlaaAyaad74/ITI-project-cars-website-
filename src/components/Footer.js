import React from "react"


export default function Footer() {
    
    return (
        <footer className="page-footer bg-dark font-small text-light pt-4">
    <div className="container-fluid text-center  text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Additional Iformation</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Sites of Cars Company</h5>
                <ul className="list-unstyled">
                    <li><a href="https://www.bmw-me.com/en/index.html" target='_blank'
                     className='text-light'>BMW</a></li>
                    <li><a href="https://www.mercedes-benz.com/en/" target='_blank'
                     className='text-light'>MERCEDES</a></li>
                    <li><a href="https://www.jeep.com" target='_blank'
                    className='text-light'>JEEP</a></li>
                    <li><a href="https://www.audi.com/en.html" target='_blank'
                    className='text-light'>AUDI</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Our pages in Social Media</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className='text-light'>Facebook</a></li>
                    <li><a href="#!" className='text-light'>Twitter</a></li>
                    <li><a href="#!" className='text-light'>Instagrame</a></li>
                
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a href="https://www.facebook.com/alaa.ayad.904" className='text-light'>Alaa-Ayaad</a>
    </div>

</footer>

       
    )
}


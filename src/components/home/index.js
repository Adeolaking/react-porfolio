import { Link } from "react-router-dom";

const Home = ()=> {

    return(
        <div>
            <div>
                <h1>Hi, <br/> I'm
                    <img src={'LogoTile'} alt ="dveloper"/>
                    Adeolaking 
                    <br/>
                    web dveloper
                </h1>
                <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
                <Link to={'/contact'} className=''>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;
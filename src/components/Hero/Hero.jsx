import ghettokids from "../../assets/ghettokids.png";
import "./Hero.css";
export default function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-content">
                <span className="hero-title">
                    Improving Lives Through Inclusive Health and Opportunity
                </span>
                <p className="hero-subtitle">
                    We support communities by improving access to eye health, education, 
                    and economic opportunities especially 
                    for people with disabilities.
                </p>
                <img src={ghettokids} alt="ghetto kids running" className="hero-img"/>
            </div>
        </div>
    )
}
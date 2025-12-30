import "./Testimonials.css";
import Kid from "../../assets/me.JPG";
export default function Testimonials(){
    const testimonialData = [
        {
          author: "Sarah K.",
          testimony: `Before this support, I struggled to stay in school. Today, I am 
                    learning with confidence and hope for a better future.`,
          role: "Secondary School Student",
          image: Kid
        },
        {
          author: "Timothy W. O",
          testimony: `This organization works with us, not for us. Their programs have 
                     brought dignity, inclusion, and real opportunity to our community.`,
          role: "Community Leader",
          image: Kid
        },
        {
          author: "Grace N.",
          testimony: `I feel confident and included for the first time. The training and support gave
                      me the skills to participate.`,
          role: "Disability Inclusion Facilitator",
          image: Kid
        }
    ]
    return(
        <section className="testimonials">
          <div className="testimonials-header">
             <span className="t-title">Voices from the community</span>
             <p className="t-subtitle">
                These stories reflect the real impact of our work
                across communities. highlighting lives changed education,
                health, and inclusion.
             </p>
          </div>
          <div className="testimonial-grid">
            {testimonialData.map((views, i) =>(
                <div className="testimony-card" key={i}>
                    <p className="test-para">{views.testimony}</p>
                    <div className="testimony-details">
                        <div>
                          <span className="author-name">{views.author}</span>
                          <p className="author-role">{views.role}</p>
                        </div>
                        <div>
                          <img src={Kid} className="testi-img" alt="" />
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </section>
    )
}
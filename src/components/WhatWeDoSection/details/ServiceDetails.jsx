import "./ServiceDetails.css";
export default function ServiceDetails(){
    const work = [
        {
          title: "Community Based Education Support",
          description: [ "We work to ensure that every child in underserved communities has access to quality education, regardless of their background or abilities.Our approach brings together local schools, community leaders, parents, and government bodies to create inclusive and supportive learning environments.", "Trained Community Education Facilitators (CEFs) take the lead in identifying children at risk of dropping out, providing mentorship, and coordinating with schools to ensure consistent attendance and participation.", "CEFs also run workshops for parents and teachers, focusing on inclusive teaching methods, child rights, and life skills development. Through community engagement, we provide learning materials, scholarships, and after-school programs that nurture literacy, numeracy, and digital skills, giving children the foundation they need to succeed.", "In addition, we offer Advisory Services to local education authorities and NGOs, helping them design and implement programs that reach the most vulnerable children and promote long-term educational equity."]
        },
        {
          title: "Community Based Education Support",
          description: [ "We work to ensure that every child in underserved communities has access to quality education, regardless of their background or abilities.Our approach brings together local schools, community leaders, parents, and government bodies to create inclusive and supportive learning environments.", "Trained Community Education Facilitators (CEFs) take the lead in identifying children at risk of dropping out, providing mentorship, and coordinating with schools to ensure consistent attendance and participation.", "In addition, we offer Advisory Services to local education authorities and NGOs, helping them design and implement programs that reach the most vulnerable children and promote long-term educational equity."]
        },
        {
          title: "Community Based Education Support",
          description: [ "We work to ensure that every child in underserved communities has access to quality education, regardless of their background or abilities.Our approach brings together local schools, community leaders, parents, and government bodies to create inclusive and supportive learning environments.", "Trained Community Education Facilitators (CEFs) take the lead in identifying children at risk of dropping out, providing mentorship, and coordinating with schools to ensure consistent attendance and participation.", "CEFs also run workshops for parents and teachers, focusing on inclusive teaching methods, child rights, and life skills development. Through community engagement, we provide learning materials, scholarships, and after-school programs that nurture literacy, numeracy, and digital skills, giving children the foundation they need to succeed."]
        }
        
    ]
    return(
       <div className="work-details">
          {work.map((list, i) =>
            <div className="each-work" key={i}>
                <span className="detail-title">
                    {list.title}
                </span>
                {list.description.map((para, i) =>(
                  <p className="list-description" key={i}>
                    {para}
                </p>
                ))}
            </div>
          )}
       </div>
    )
}
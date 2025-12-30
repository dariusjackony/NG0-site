import "./ServiceList.css";
import distBooks from "../../../assets/books.jpg";
export default function ServiceList() {
    const whatWeDoData = [
        {
          category: "Education",
          programs :[
            "School Fees Assistance",
            "Learning Materials Support",
            "Mentorship & Life Skills",
            "Community Learning Sessions",
            "Inclusive Education",
          ]
        },
        {
          category: "Health",
          programs :[
            "School Fees Assistance",
            "Learning Materials Support",
            "Mentorship & Life Skills",
            "Community Learning Sessions",
            "Inclusive Education",
          ]
        },
        {
          category: "Food and Nutrition",
          programs :[
            "School Fees Assistance",
            "Learning Materials Support",
            "Mentorship & Life Skills",
            "Community Learning Sessions",
            "Inclusive Education",
          ]
        },
    ]
    return(

        <section className="what-we-do">
            <span className="service-title">What We Do</span>
            <hr />
            <div className="list">
                {whatWeDoData.map((item, i) =>(
                    <div className="category-block" key={i}>
                        <span className="category-head">{item.category}</span>
                        <ul className="category-list">
                            {item.programs.map((program, i) => (
                             <li key={i}>
                                {program}
                             </li>
                            ))}
                        </ul>
                    </div>
                ))}
                <img src={distBooks} alt="A woman distributing books"  className="service-img"/>
            </div>
        </section>
    )
}
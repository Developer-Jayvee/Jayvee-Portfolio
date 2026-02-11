import ExperienceComponent from "../component/feature/ExperienceComponent";
import { Experiences } from "../constants";
import "./styles/experience.section.css";

type ExperienceType = {
    company:string;
    date:{
        entry:string;
        exit:string;
    };
    position:string;
}
export default function ExperienceSection(){

    const experiences: ExperienceType[] = Experiences;
    return (
        <div className="wrapper-grid-col-1">
            <h1 className="section-title">Experience</h1>
            { experiences.map( (exp,index) => <ExperienceComponent key={index} initialData={exp} />)}
        </div>
    )
}
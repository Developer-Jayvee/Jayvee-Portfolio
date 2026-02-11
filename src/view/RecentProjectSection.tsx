import ProjectComponent from "../component/feature/ProjectComponent";
import { PROJECTS } from "../constants";
import "./styles/recentProject.section.css"

type ProjectType = {
    title:string;
    description:string;
    link:{
        description:string;
        link:string;
    }

}
export default function RecentProjectSection(){

    const projects: ProjectType[] = PROJECTS 
    return (
        <div className="wrapper-grid-col-1">
            <h1 className="section-title">Recent Projects</h1>
            <div className="card-list">
                {
                    projects.map( (proj) => {
                        return (
                            <ProjectComponent title={proj.title} description={proj.description} link={proj.link} />
                        )
                    })
                }
            </div>
        </div>
    )
}
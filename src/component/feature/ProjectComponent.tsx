import "./styles/project.component.css"


type ProjectProps = {
    title:string;
    description:string;
    link:{
        description:string;
        link:string;
    }
}
const ProjectComponent = ({ title , description , link }: ProjectProps) => {

    return (
        <div className="card">
            <p>{title}</p>
            <p>{description}</p>
            <a target="_blank" href={link.link}>{link.description}</a>
        </div>
    )
}
export default ProjectComponent;
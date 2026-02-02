import { Www } from "iconoir-react";

type TechStackTypes = {
    title: string;
    icon: string;
}
type CardDetails = {
    title: string;
    description: string;
    techStack:  TechStackTypes[];
    liveDemoLink: string;
    githubLink: string;
}
type CardProps = {
    ProjectImage: string;
    Details: CardDetails;
}

export default function Card({ ProjectImage, Details }: CardProps) {

    return (
        <div className="card">
            <div className="card-image">
                <img src={ProjectImage} alt="Project Image" />
            </div>
            <div className="card-content">
                <p>{Details.title}</p>
                <span>{Details.description}</span>
            </div>
            <div className="card-footer">
                <div className="tech-stack"><strong>Tech Stack:</strong>
                    {
                        Details.techStack.map((tech, index) => (
                            <span key={index} title={tech.title}>
                                <i className={tech.icon}></i>
                            </span>
                        ))
                    }
                </div>
                <div className="project-links">
                    <a href={Details.liveDemoLink} className="action live-demo" title="Live Demo" target="_blank" >
                        <Www width={20} height={20} />
                    </a>
                    <a href={Details.githubLink} className="action github-link" title="GitHub Repository" target="_blank" >
                        <i className="devicon-github-original"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
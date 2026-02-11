import { 
    Projects,
    TechStacks
} from "../constants/ConstantVariables"; 
import Card from "../component/Card";
import Stacks from "../component/Stacks";
import DocumentResume from "../assets/documents/Hidlao, Jayvee O - Resume.pdf";
export default function Sections() {
   
    return (
        <>
            <div className="sections">
                <section id="home" className="section home">
                    <div className="home-content">
                        <div>
                            <p>Jayvee</p>
                            <span>HIDLAO</span>
                            <p>Full Stack Web Developer</p>
                        </div>
                        <div className="btn-group">
                            <a className="btn hover primary-btn" href="#projects">My Works</a>
                            <a className="btn hover secondary-btn" href={DocumentResume} download="HIdlao, Jayvee O. - Resume.pdf" target="_blank">Download CV</a>
                        </div>
                    </div>
                </section>
                <section id="projects" className="section projects">
                    <div className="wrapper ">
                        <div className="wrapper-header">
                            <div className="box-title btn box">
                                PROJECTS
                            </div>
                            <p>Check out my featured <strong>projects.</strong></p>
                        </div>
                        <div className="wrapper-body">
                            <div className="card-container">
                                {
                                    Projects.map((project, index) => (
                                        <Card
                                            key={index}
                                            ProjectImage={project.ProjectImage}
                                            Details={{
                                                title: project.title,
                                                description: project.description,
                                                techStack: project.techStack,
                                                liveDemoLink: project.liveDemoLink,
                                                githubLink: project.githubLink
                                            }}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="section about">
                    <div className="wrapper ">
                        <div className="wrapper-header">
                            <div className="box-title btn box">
                                ABOUT ME
                            </div>
                            <p>
                                <strong>Continously expanding</strong> my technical toolkit throught <strong>hands-on experience</strong> and <strong>constant learning.</strong>
                            </p>
                        </div>
                        <div className="wrapper-body">
                           {
                                TechStacks.map((stackCategory, index) => (
                                    <Stacks 
                                        key={index}
                                        title={stackCategory.title}
                                        stacks={stackCategory.stacks}
                                    />
                                ))
                           }
                        </div>
                    </div>
                </section>
                <section id="home" className="section contact"></section>
            </div>
        </>
    )
}

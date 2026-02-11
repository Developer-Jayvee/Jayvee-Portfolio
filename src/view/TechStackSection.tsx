import TechStackComponent from "../component/feature/TechStackComponent"
import "./styles/techStack.section.css"

type StackType = {
    [key: string] : string[]
}
export default function TechStackSection(){

    const stacks: StackType = {
        Frontend:['JavaScript','Vue.js','React','Next.js','Tailwind CSS'],
        Backend:['PHP','Laravel','MongoDB','MySQL'],
        Developer_Tools:['Git','Github','GitLab','VSCode','Postman']
    }

    return (
        <div className="wrapper-grid-col-1">
            <h1 className="section-title">Tech Stack</h1>
            <div className="stacks">
                <h1 className="sub-title">Frontend</h1>
                <div className="stack-list">
                    <TechStackComponent stack={stacks.Frontend}/>
                </div>
                <h1 className="sub-title">Backend</h1>
                <div className="stack-list">
                    <TechStackComponent stack={stacks.Backend}/>
                </div>
                 <h1 className="sub-title">Developer Tools</h1>
                <div className="stack-list">
                    <TechStackComponent stack={stacks.Developer_Tools}/>
                </div>
            </div>
        </div>
    )
}
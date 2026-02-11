import "./styles/techStack.component.css"

type TechStackProps = {
    stack: string[];
}
const TechStackComponent = ({ stack }: TechStackProps) => {
    return (
        <>
            {
                stack.map((stacks,index) => {
                    return (
                        <div key={index} className="stack">
                            <span>{stacks}</span>
                        </div>
                    )
                })
            }
        </>

    )
}

export default TechStackComponent;
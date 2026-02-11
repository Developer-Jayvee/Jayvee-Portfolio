type TechStack = {
    title: string;
    icon: string;
}
type StacksProps = {
    title: string;
    stacks: TechStack[];
}
export default function Stacks({ title, stacks }: StacksProps) {
    return (
        <div className="stack">
            <p>{title}</p>
            <div className="tech-bar">
                {
                    stacks.map((tech, index) => (
                        <span key={index} title={tech.title}>
                            <i className={tech.icon}></i>
                        </span>
                    ))
                }
            </div>
        </div>
    )
}
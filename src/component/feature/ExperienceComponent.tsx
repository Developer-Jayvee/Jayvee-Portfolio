import "./styles/experience.component.css"
type EmbarkDisembarkProp = {
    entry: string;
    exit : string;
}
type ExperienceFieldProps = {
    company: string;
    date:EmbarkDisembarkProp;
    position:string;
}
type ComponentProps = {
    initialData: ExperienceFieldProps;
    customStyle?:string;
}
const ExperienceComponent = ({ initialData , customStyle = 'grid-col-2 experience-info'  }: ComponentProps) => {
    return (
        <div className={customStyle}>
            <p>{initialData.company}</p>
            <p>{initialData.date.entry} - {initialData.date.exit}</p>
            <p>{initialData.position}</p>
        </div>
    )
}

export default ExperienceComponent;
import type { WorkItem } from "../App";


export function WorkCard({ title, description, link, imageSrc }: WorkItem) {
    return (
        <article className="work-card">
        <img className="work-image" src={imageSrc} alt={`${title} preview`} />
        <div className="work-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">
            View project
            </a>
        </div>
        </article>
    )
}

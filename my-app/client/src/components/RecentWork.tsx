import { WorkCard } from './WorkCard';

async function RecentWork(){
    const res = await fetch("https://api.github.com/user/repos?sort=pushed&direction=desc&per_page=1", {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_PAT}`,
        } 
    });

    const [data] = await res.json();

    return(
        <section className="recent-work-panel">
            <h2>Recent Work</h2>
            <WorkCard 
            title={data.name}
            description={data.description}
            link={data.html_url}
            imageSrc={data.owner.avatar_url}
            />
        </section>
    )
}

export default RecentWork;
import { WorkCard } from './WorkCard';
import {useState, useEffect} from 'react';

interface Repo{
    name: string;
    html_url: string;
    pushed_at: string;
}

function RecentWork(){
    const [repo, setRepo] = useState <Repo | null>(null);
    const [error, setError] = useState<string |null>(null);

    useEffect(() => {
        fetch("/api/recent-work")
        .then((res) => res.json())
        .then((repo) => setRepo(repo[0]))
        .catch((err) => {
            setError(err.message);
            console.error(`Failed to fetch repo: ${err}`);
        });
    }, []);

    return(
        <section className="recent-work-panel">
            <h2>Recent Work</h2>
            {error && <p>There was a problem loading the link.</p>}
            {repo ? <WorkCard 
                title={repo.name}
                description={"This is what I was just working on. Take a look!"}
                link={repo.html_url}
                imageSrc={undefined}
                /> 
                : <p>Loading...</p>
            }
            
        </section>
    )
}

export default RecentWork;
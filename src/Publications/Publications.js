import './publications.css';

const Publications = () => {
    let json = require('./db.json')
    const arr = json['publications']
    return ( 
        <div className="publications">
            <h2>peer-reviewed publications (accepted)</h2>

            {arr.map( (publication)=>{
                return <article key={publication.id}>
                    <div className="title">{publication.title}</div>
                    <div className="authors">{publication.authors}</div>
                    <div className="journal">{publication.journal}</div>
                    <div className="links"><a href={publication.pubmed_url}>pubmed</a></div>
                </article>
            })}
        </div>
     );
}
 
export default Publications;
import './publications.css';
import React from "react"

const Publications = () => {
    let json = require('./publications.json')
    const arr = json['publications']
    return ( 
        <div className="publications">
            <h2>peer-reviewed publications (accepted)</h2>

            {arr.map( (publication)=>{
                return <article key={publication.id}>
                    <div className="title">{publication.title}</div>
                    <div className="authors">
                        {publication.authors.split("Michael Chiang")[0]}
                        <b>Michael Chiang</b>
                        {publication.authors.split("Michael Chiang")[1]}                        
                    </div>
                    <div className="journal">{publication.journal}</div>
                    <div className="links"><a href={publication.pubmed_url}>pubmed</a></div>
                </article>
            })}
        </div>
     );
}
 
export default Publications;
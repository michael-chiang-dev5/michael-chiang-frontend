const Publications = () => {
    let json = require('./db.json')
    const arr = json['publications']
    return ( 
        <div className="publications">
            <h2>peer-reviewed publications (accepted)</h2>

            {arr.map( (publication)=>{
                return <article key={publication.id}>
                    <div>{publication.title}</div>
                    <div>{publication.authors}</div>
                    <div><a href=''>pubmed</a></div>
                </article>
            })}
        </div>
     );
}
 
export default Publications;
const Publications = () => {
    const arr = [1,2,3]
    return ( 
        <div className="publications">
            {arr.map( (e)=>{
                return <div>{e+1}</div>
            })}
        </div>
     );
}
 
export default Publications;
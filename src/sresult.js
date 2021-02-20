import react from 'react';


const Result=(props)=>{

    const link=`https://source.unsplash.com/600x400/?${props.name}`;
    return(
        <>
       <div>
           <img src={link}/>
       </div>
        </>
    );
}

export default Result;
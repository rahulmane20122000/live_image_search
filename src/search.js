import react ,{useState} from 'react';
import Result from './sresult';

const Search=()=>{
    const [img,setimg]=useState("");

    const inputEvent=(event)=>{
       const data=event.target.value;
       console.log(data);
       setimg(data);
    }
    return(
        <>
        
        <div className='search'>
        <input className='input_box' placeholder="search anything" value={img} onChange={inputEvent} type='text'/>
        
        </div>
        <div className='result_class'>
       {img===""?null: <Result name={img}/>}
        </div>
        </>
    );
}

export default Search;
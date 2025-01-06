import { useEffect,useState } from "react"
import axios from 'axios'

function List(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data);
            setData(res.data)
        }).catch(error=>console.log(error.message));
        
    },[])
    return(
        <div className="container">
            <h1>Diaplay Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>{value.completed ? 'completed':'not'}</td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default List 
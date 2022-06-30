import {useState,useEffect} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "./actualTable.css";




let ActualTable = ()=>{
    const [userList,setUserList] =useState([]);

    let loadUser =async()=>{
        let result = await axios.get("https://leisureandthoughts.herokuapp.com/user");
        setUserList(result.data.reverse());
        // console.log(result.data);




    }
    useEffect(()=>{
        loadUser();
    },[]);
    return(
        <div className="table-customer">
<Table striped bordered hover>
  <thead>
    <tr>
      
      <th> Name</th>
      <th>Email</th>
      <th>Query</th>
    </tr>
  </thead>
  <tbody>
    {
        userList.map(user =>(
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.query}</td>

            </tr>
        ))
    }
  </tbody>
</Table>
        </div>
    
)
}

export default ActualTable;
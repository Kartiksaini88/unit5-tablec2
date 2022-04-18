import { useEffect, useState } from "react";
import "./table.css"
export const ShowStudents = () => {
 let [alldata , getalldata]  = useState([])
 let [sortdata , sortalldata] = useState()

 console.log(sortdata)
 useEffect(()=>{
  form_data()
 },[])

 let form_data= async ()=>{
   try {
     let res = await fetch("http://localhost:8080/students")
     let data = await res.json()
     getalldata(data)
   } catch (error) {
     
   }
 }
let handlesort = (e)=>{
  sortalldata(e.target.value)
  let sorrted = [...sortdata].sort((a,b)=>{
    a[e]>b[e] ? 1 : -1
    form_data(sorrted)
  })
}

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
          
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            value={sortdata}
            onChange={()=>{handlesort(sortdata)}}
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {alldata.map(e =>
          <tr className="row">
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

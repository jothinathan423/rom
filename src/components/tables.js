
import { useEffect, useState } from "react"
import axios from "axios"
import Button from '@mui/material/Button';


const Table=()=>{

    const [tableData, setTableData]=useState([])
    useEffect(()=>{
        fetchAllRecords()
        
    },[])

    const fetchAllRecords=async()=>{
        const temp = await axios.get(`http://localhost:3001/getproposal`)
        //alert(JSON.stringify(temp))
        //console.log(temp)
        setTableData(temp.data.result)
        console.log(tableData)
    }
    return(
        <>
        <div class="overallcontent">
            <div class="report-header"/>
            <h1 class="report-Articles">Your Reports</h1>
            
        </div>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>academic_Year</th>
                    <th>semester</th>
                    <th>faculty_Name</th>
                    <th>years</th>
                    <th>sessions</th>
                    <th>course_name</th>
                    <th>score_obtained</th>
                    <th>certificate_Type</th>
                    <th>certificate_pdf</th>
                </tr>
                {
                    tableData.map(val=>(
                        <tr key={val.nptel_cert_id}>
                            <td>{val.academic_Year}</td>
                            <td>{val.semester}</td>
                            <td>{val.faculty_Name}</td>
                            <td>{val.years}</td>
                            <td>{val.sessions}</td>
                            <td>{val.course_name}</td>
                            <td>{val.score_obtained}</td>
                            <td>{val.certificate_Type}</td>
                            <td>{val.certificate_pdf}</td>
                        </tr>
                    ))
                }
            </thead>
        </table>
        </>
    )
}
export default Table
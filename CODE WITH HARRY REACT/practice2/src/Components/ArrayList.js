// we use map function hear....
import React from 'react'
import '/Users/JEET/.vscode/User/React JS/practice2/src/App.css'
import { Table } from 'react-bootstrap'

export default function ArrayList() {
    const students = [
        { name: "Jeet", email: "jeet@gmail.com", contact: 222 },
        { name: "hitu", email: "hitu@gmail.com", contact: 444 },
        { name: "khushi", email: "khushi@gmail.com", contact: 898 },
        { name: "jay", email: "jay@gmail.com", contact: 898 },
        { name: "manav", email: "manav@gmail.com", contact: 898 },
    ]
    // const students = ["Jeet", "Hitu", "Khushi", "Jay"];
    //syntax of map function
    // student.map((item)=>{
    //     console.warn(item);
    // })

    // syntax of for loop
    // for(var i=0;i<student.length;i++){
    //     console.warn("name is : ",student[i]);
    // }

    return (

        <div className='App'>
            <h1>Dealing with array list</h1>
            <Table variant='dark' striped>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                    {/* //condition  */}
                    {students.map((data, i) => {
                        return data.contact !== 898? <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>:null
                    })
                    }
                </tbody>
            </Table>

        </div>
    )
}

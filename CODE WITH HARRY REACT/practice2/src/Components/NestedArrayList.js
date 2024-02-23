import React from 'react'
import '/Users/JEET/.vscode/User/React JS/practice2/src/App.css'
import { Table } from 'react-bootstrap'


export default function NestedArrayList() {
    const Details = [
        {
            name: "Jeet", email: "Jeet@123,gmail.com", address: {
                no: 84, city: "Vadodara", state: "Gujrat"
            }
        },
        {
            name: "hitu", email: "hitu@123,gmail.com", address: {
                no: 85, city: "Vadodara", state: "Gujrat"
            }
        },
        {
            name: "khushi", email: "khushi@123,gmail.com", address: {
                no: 86, city: "Vadodara", state: "Gujrat"
            }
        },
    ]
    return (
        <div>
            <h1>Nested Array List and Map Function..</h1>
            <Table >
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                {
                    Details.map((data, i) =>
                    (<tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{Object.values(data.address).map((add, index) =>
                        (
                            <Table variant='dark' striped>
                                <tbody>
                                    <tr key={index}>
                                        <td>{add}</td>

                                    </tr></tbody></Table>
                        )
                        )}</td>


                    </tr>)
                    )
                }

            </Table>

        </div>
    )
}

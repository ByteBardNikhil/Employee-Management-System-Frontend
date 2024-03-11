import React, { useEffect, useState } from 'react'
import { listEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);

        }).catch(error => {
            console.error(error)
        })
    }, [])
    function addNewEmployee() {
        navigator('/add-employee')
    }


function  updateEmp(id)
{
    navigator(`/edit-employee/${id}`)
}

    return (
        <div className='container'>

            <h2 className='text-center'>Employees List</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee</button>
            <table className='table table-dark table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee FirstName</th>
                        <th>Employee LastName</th>
                        <th>Email</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            emp =>
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.email}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={()=>updateEmp(emp.id)}>Update</button>
                                    </td>


                                </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent

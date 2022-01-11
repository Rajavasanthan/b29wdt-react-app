import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
function UserList() {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])

    let fetchUsers = async () => {
        try {
            let userData = await axios.get("https://b29wdt-node-app.herokuapp.com/users");
            setUserList(userData.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to delete?")
            if (result) {
                await axios.delete(`https://b29wdt-node-app.herokuapp.com/user/${id}`)
                fetchUsers()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='row'>
                <div className='col-lg-6'>
                    <h3>User List</h3>
                </div>
                <div className='col-lg-6 text-end'>
                    <Link to="/create">
                        <button className='btn btn-primary'>Create User</button>
                    </Link>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <tbody>
                    {
                        userList.map((user) => {
                            return <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edit-user/${user._id}`}>
                                        <button className='btn btn-sm btn-primary'>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        })
                    }



                </tbody>
            </table>
        </>
    )
}

export default UserList

// Screen Design
// API Creation
// API Intergration

import React from "react";
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./dummyData";
import {Link,useNavigate} from 'react-router-dom';

const Home = () => {

    const handleEdit = (id, name, userName, phone) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('UserName', userName);
        localStorage.setItem('Phone', phone);
        localStorage.setItem('Id', id);
    }

    const history = useNavigate();
    const handleDelete = (id) => {
        var index = dummyData.map(function(e){
            return e.id
        }).indexOf(id);

        dummyData.splice(index,1)
        history('/')
    }

    return (
        <div>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size ="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                User Name
                            </th>
                            <th>
                                phone
                            </th>
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyData && dummyData.length > 0
                            ?
                            dummyData.map((item) => {
                                return(
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.UserName}
                                    </td>
                                    <td>
                                        {item.Phone}
                                    </td>
                                    <td>
                                        <Link to = {`/edit`}>
                                        <Button onClick={() => handleEdit(item.id, item.Name, item.UserName, item.Phone)}>Edit</Button>
                                        </Link>
                                        &nbsp;&nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                                )
                            })
                            :
                            "no data available"
                        }
                    </tbody>
                </Table>
                <br/>
                <Link className="d-grid gap-2" to='/create'>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
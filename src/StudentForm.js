import React, { useEffect, useState } from 'react';
import './App.css';



function CreateFrom(props) {

    const [inputDataResponse, setResponseData] = useState([]);
    const [rowToEdit, setRowToEdit] = useState('');
    const [inputData, setInputData] = useState([]);
    const [editflag, setedit] = useState(false);
    const [acb, setabc] = useState({});
    const [idata, setData] = useState({
        name: "",
        email: "",
        city: "",
        address: "",
        id:Math.ceil(Math.random(10))
    })



    function handle(e) {
        const newData = { ...idata }
        newData[e.target.id] = e.target.value;

        setData(newData);

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('Delayed data:', idata);
            setResponseData(idata)
        }, 5000);

        return () => clearTimeout(timer);

    }, [idata])


    function addData(e) {

        const updatedIData = {
            id: "",
            name: "",
            email: "",
            city: "",
            address: ""
        };
        setData(updatedIData);
        e.preventDefault();
        setInputData([...inputData, { ...idata }])

    }

    const UpdateList = (e) => {
        e.preventDefault()
        console.log('assa',idata)
        let b=inputData.map((data,index)=>{
            return index == rowToEdit? idata:data
        })
        setInputData(b)
        const updatedIData = {
            id: "",
            name: "",
            email: "",
            city: "",
            address: ""
        };
        setData(updatedIData);

    }
    function handleEdit(id) {
        console.log('inputData', inputData)
        setedit(true)
        setData(inputData[id])
        setRowToEdit(id)
        console.log('Edit', id);

    }

    return (
        <div>
            <h1>Todo List</h1>
            <div className="container">
                <div className="form">
                    <form className="form" style={{ width: "50%" }} >
                        <div className="mb-3">
                            <input onChange={(e) => handle(e)} type="text" className="form-control" id="name" value={idata.name} aria-describedby="emailHelp" placeholder='Name *' />
                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => handle(e)} type="text" className="form-control" id="email" value={idata.email} placeholder='Email *' />
                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => handle(e)} type="text" className="form-control" id="city" value={idata.city} placeholder='City *' />
                        </div>
                        <div className="mb-3">
                            <input onChange={(e) => handle(e)} type="text" className="form-control" id="address" value={idata.address} placeholder='Address *' />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={!editflag ? addData : UpdateList}>{editflag?'Update Form':'Save'}</button>
                        
                    </form>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Address</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        inputData.map((item, id) => (

                            <tr key={id}>

                                <td>{id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td><button className="btn btn-info" onClick={() => handleEdit(id)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button></td>
                            </tr>

                        ))

                    }


                </tbody>
            </table>

        </div>
    );



    function handleDelete(id) {

        setInputData(inputData.filter((v, i) => i !== id));
        console.log('delete', id);

    }

}

export default CreateFrom;
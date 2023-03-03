import React, {useState} from 'react';
import '../../../App.css';
//Bootstrap
import Table from 'react-bootstrap/Table';
import MockData from './MOCK_DATA.json';
import complex from '../../../complex.json';



const SearchTable = () => {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            <input
            type='text'
            placeholder='Search...'
            className='form-control'
            style={{marginTop:20, marginBottom: 20, width:'100%'}}
            onChange ={(e)=>{
                setSearchTerm(e.target.value)
            }}>
            </input>
            <h1> aaaaa</h1>
            <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Quote</th>
                            <th>Traveller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MockData.filter(val=>{
                            if (searchTerm === '') {
                                return val;
                            } else if (
                                val.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                val.traveller.toLowerCase().includes(searchTerm.toLowerCase())
                            ) {
                                return val;
                            }  
                        }).map(m=>(
                            <tr key={m.id}>
                                <td>{m.quote}</td>
                                <td>{m.traveller}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
        </div>
    )
}

export default SearchTable;
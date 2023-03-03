import React, {useState} from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
// Bootstrap
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
// Icons
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
// Imgs
import corpus from '../../../assets/imgs/corpus.png';
import SearchTable from './filterTable';


export default function Corpus() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <>
        <div className="img_wrap">
            <img id='img-background' src={corpus} className='img-fluid'/>
            <div className='img-content'>
                <h1 className='img-title-black'>CORPUS</h1>
                <Link to='#'><Button className='corpus-button' variant="dark">Button</Button></Link>
            </div>
        </div>
        <div className='container-fluid'>
        <h1 className='corpus'>Corpus</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            <h2>Subtitle</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Row className='corpus-filters'>
                    <div className='col-container'>
                    <Col className='col-2'>
                        <Container className='filter-sidebar'>
                            <h3><IoIcons.IoMdOptions/>&nbsp;Filters</h3>
                            <input
            type='text'
            placeholder='Search...'
            className='form-control'
            style={{marginTop:20, marginBottom: 20, width:'100%'}}
            onChange ={(e)=>{
                setSearchTerm(e.target.value)
            }}>
            </input>
                            <h5>Language</h5>
                            <Form>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Language"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Language"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Language"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Language"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Language"
                                />
                                </div>
                            ))}
                            <h5>Place</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Museum"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Academy"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Observatory"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Church"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Park"
                                />
                                </div>
                            ))}
                            <h5>Traveller</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Lady Miller"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Marta Cavazza"
                                />
                                <Form.Check 
                                    type={type}
                                    label="John Moore"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Carlo Sarti"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Francesco Poppi"
                                />
                                </div>
                            ))}
                            <h5>Period</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="15th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="16th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="17th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="18th century"
                                />
                                <Form.Check 
                                    type={type}
                                    label="19th century"
                                />
                                </div>
                            ))}
                            <h5>Themes</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Senate"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Senate"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Senate"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Senate"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Senate"
                                />
                                </div>
                            ))}
                            <h5>Characters</h5>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    label="Eustachio Manfredi"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Benedetto XIV"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Ferdinando Luigi Marsili"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Voltaire"
                                />
                                <Form.Check 
                                    type={type}
                                    label="Laura Bassi"
                                />
                                </div>
                            ))}
                            </Form>
                        </Container>
                    </Col>
                    <Col className='col-10'>
                        <SearchTable/>
                    </Col>
                    </div>
                </Row>
        </div>
        </>
    )
}
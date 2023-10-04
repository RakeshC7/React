import { useReducer } from 'react';
import { useDataContext } from './../context/dataContext';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

const Home = () => {

    const crudReducer = (state, action) => {
        switch (action.type) {
            case 'SET_TITLE':
                return action.payload;
            case 'SET_INFORMATION':
                return state.information = action.payload;
            case 'SET_PRICE':
                return state.price = action.payload;
            case 'SET_COMPANY':
                return state.company = action.payload;
            case 'IS_EDIT':
                const editData = [...state];
                editData[action.payload.index] = action.payload.row;
                return editData;
            case 'IS_DELETE':
                const filteredData = state.filter((item, index) => item)
                return filteredData;

            default: return state;
        }
    }

    const [crudState, crudDispatch] = useReducer(crudReducer, {
        title: '',
        information: '',
        price: '',
        company: '',
        isEdit: false,
        isdelete: false
    });
    const data = useDataContext();

    const crudTableTitle = ['Title', 'Information', 'Price', 'Company', 'Actions'];
    const tableCellSpacing = 'p-2 align-middle';

    const editHandler = (product) => {
        console.log(product.id)
    }
    const deleteHandler = (id) => {

    }
    const inputClasses = 'p-2 inputboxColor';
    return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <h2 className='text-white my-4'>CRUD Operations</h2>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control
                                    className={inputClasses}
                                    type="text"
                                    placeholder="Title"
                                // value={ }
                                // onChange={ }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className={inputClasses}
                                    type="text"
                                    placeholder="Information"
                                // value={ }
                                // onChange={ }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className={inputClasses}
                                    type="text"
                                    placeholder="Price"
                                // value={ }
                                // onChange={ }
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    className={inputClasses}
                                    type="text"
                                    placeholder="Company"
                                // value={ }
                                // onChange={ }
                                />
                            </Col>
                            <Col>
                                <Button className='w-100 h-100' variant="success">Add</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table size='sm' className='text-center' variant='dark' striped bordered hover responsive >
                        <thead>
                            <tr>
                                {
                                    crudTableTitle.map((title, titleKey) => (
                                        <th className='p-3' key={titleKey}>{title}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((product) => (
                                    <tr key={product.id}>
                                        <td className={tableCellSpacing}>{product.title}</td>
                                        <td className={tableCellSpacing}>{product.info}</td>
                                        <td className={tableCellSpacing}>{product.price}</td>
                                        <td className={tableCellSpacing}>{product.company}</td>
                                        <td className={tableCellSpacing}>
                                            <div>
                                                <Button
                                                    className="btn btn-primary"
                                                    onClick={() => editHandler(product)}
                                                >Edit</Button>
                                                <Button className="btn btn-danger mx-2" onClick={deleteHandler(product.id)}>Delete</Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Home

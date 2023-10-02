import { useDataContext } from './../context/dataContext';
import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

const Home = () => {

    const data = useDataContext();

    const crudTableTitle = ['Title', 'Information', 'Price', 'Company', 'Actions'];
    const tableCellSpacing = 'p-2 align-middle';

    const editHandler = (id) => {

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
                                <Form.Control className={inputClasses} type="text" placeholder="Title" />
                            </Col>
                            <Col>
                                <Form.Control className={inputClasses} type="text" placeholder="Information" />
                            </Col>
                            <Col>
                                <Form.Control className={inputClasses} type="text" placeholder="Price" />
                            </Col>
                            <Col>
                                <Form.Control className={inputClasses} type="text" placeholder="Company" />
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
                                                    onClick={editHandler(product.id)}
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

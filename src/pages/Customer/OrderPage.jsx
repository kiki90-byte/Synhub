import NavbarComponents from "../../components/Customer/NavbarComponents";
import {Container, Row, Col, Card} from "react-bootstrap";



const OrderPage = () => {
    return(
        <>
        <NavbarComponents isloggedIn={true}/>
        <div id="order">
            <Container>
                <h1>Pesanan Anda</h1>
                <Row>
                    <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col md={4}>
                                <label htmlfor="nama-pemesan">Nama Pemesan</label>
                                <h5>Ahmad Fulan</h5>
                                </Col>
                                <Col md={4}>
                                <label htmlfor="tanggal-pemesanan">Tanggal Pemesanan</label>
                                <h5>01/08/2024</h5>
                                </Col>
                                <Col md={4}>
                                <label htmlfor="waktu">Waktu/Total Jam</label>
                                <h5>09 : 00 / 3 Jam</h5>
                                </Col>
                            </Row>
                            <Row className="mt-3">
                            <Col md={4}>
                                <label htmlfor="ruangan">Ruangan</label>
                                <h5>Ruang Meeting</h5>
                                </Col>
                                <Col md={4}>
                                <label htmlfor="status">Status</label>
                                <h5 className="status text-success">Lunas</h5>
                                </Col>
                                <Col md={4}>
                                <label htmlfor="kode-reservasi">Kode Reservasi :</label>
                                <div className="kode-reservasi"><h4>SYB1234567</h4>
                                </div>
                                </Col>      
                            </Row>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>

        </div>
        </>
    );
}

export default OrderPage
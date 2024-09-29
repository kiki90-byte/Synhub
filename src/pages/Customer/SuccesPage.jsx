import NavbarComponents from "../../components/Customer/NavbarComponents";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccesPage = () => {
    return(
        <>
       <NavbarComponents isloggedIn={true}/>
       <div id="success">
        <Container>
            <Row>
                <Col lg={8}>
                    <div className="bg-kode-reservasi mt-5">
                        <Row>
                            <Col lg={4}>
                                <img src="../../src/assets/img-sukses.png" alt="" width="80%"/>
                            </Col>
                            <Col lg={8}>
                             <h1>Horee!! Pesananan Telah Berhasil</h1>
                             <p>Silakan Ambil Screenshoot Kode Reservasi Dibawah Ini Untuk Ditunjukkan ke Reseptionist :</p>
                             <div className="kode-reservasi">
                                <h2>SYB1234567</h2>
                             </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
            </Row>
             <Row className="mt-3 d-flex align>-items-center">
                <Col lg={4}>
                <Link to="/order" className="btn btn-teal w-100">Cek Pesanan</Link>
                </Col>
                <Col lg={4}>
                <Link to="/home" className="back-home">Kembali Ke Beranda</Link>
                </Col>
             </Row>
        </Container>
       </div>
        </>
    );
}

export default SuccesPage
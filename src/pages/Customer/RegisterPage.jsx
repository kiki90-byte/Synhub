import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const RegisterPage = () => {
    return(
        <>
        <div id="login">
            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <div className="wrapper">
                            <div className="top text-center">
                                <img src={logo} alt="" className="mt-5" />
                                <h1>Daftar Akun</h1>
                                <p>Buat Akun Untuk Eksplorasi Ruangan</p>
                            </div>
                        </div>

                        <form action="/login">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text" name="nama-lengkap" placeholder="Si Anu" />
                            <Form.Label>Nomor Telepon</Form.Label>
                            <Form.Control type="text" name="telepon" placeholder="Contoh 08117899997" />
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Contoh ricky.hadi.kusuma@gmail.com" />
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Masukkan Password" />           
                            <button className="btn btn-teal w-100 mt-5" type="submit">Daftar</button>
                        </form>
                        <p className="mt-5 text-center">Sudah Punya Akun?<Link to="/login">Masuk</Link></p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
    );
}

export default RegisterPage
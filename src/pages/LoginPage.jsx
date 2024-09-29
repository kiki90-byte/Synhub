import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const LoginPage = () => {
    return (
        <>
            <div id="login">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="wrapper">
                                <div className="top text-center">
                                    <img src={logo} alt="" className="mt-5" />
                                    <h1>login</h1>
                                    <p>Masuk Untuk Mulai Reservasi Ruangan</p>
                                </div>
                            </div>

                            <form action="/home">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="ricky.hadi.kusuma@gmail.com" />
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Masukkan Password" />
                                <Link className="d-flex justify-content-end mt-2">Lupa Password?</Link>
                                <button className="btn btn-teal w-100 mt-5" type="submit">Masuk</button>
                            </form>
                            <p className="mt-5 text-center">Belum Punya Akun<Link to="/register">Daftar</Link></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default LoginPage
//import component react-bootstarp
import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import components
import NavbarComponents from "../../components/Customer/NavbarComponents";
import KontakComponents from "../../components/Customer/KontakComponents";
import FooterComponents from "../../components/Customer/FooterComponents";



const LandingPage = () => {
    return (
        <>
            <NavbarComponents isloggedIn={false}/>
            <div id="banner">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <h1>Elegansi dan Produktivitas <br /> Dalam Satu Ruangan</h1>
                        </Col>
                        <Col lg={4}>
                            <p className="banner-teks">Ruang Tumbuh Untuk Bisnis Meningkatkan Kreatifitas dan Kenyamanan Saat Bekerja</p>
                        </Col>
                    </Row>

                    <Row className="banner-image mt-5">
                        <Col lg={5}>
                            <img src="../../src/assets/img-hero1.png" alt="" />
                        </Col>
                        <Col lg={7}>
                            <Row>
                                <Col>
                                    <img src="../../src/assets/img-hero2.png" alt="" />
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col lg={6}>
                                    <img src="../../src/assets/img-hero3.png" alt="" />
                                </Col>
                                <Col lg={6}>
                                    <img src="../../src/assets/img-hero4.png" alt="" />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div id="ruangan" className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center">Temukan Ruangan Anda <br /> Cocok Untuk Anda</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Card>
                                <Card.Img variant="top" src="../../src/assets/img-rmeeting.png" />
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Ruang Meeting</Card.Title>
                                        </Col>
                                        <Col>
                                            <p className="text-end">IDR 80K/Jam</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Ruang meeting ideal untuk bisnis dan usaha yang
                                        ingin melakukan pertemuan atau mencari inspirasi bersama.
                                    </Card.Text>
                                    <Button variant="outline-dark">4 - 10 Kursi</Button>
                                    <Button variant="outline-dark">Free Drink</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Img variant="top" src="../../src/assets/img-racara.png" />
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Ruang Acara</Card.Title>
                                        </Col>
                                        <Col>
                                            <p className="text-end">IDR 150K/Jam</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Ruang acara untuk workshop, seminar dan acara
                                        lainnya. Dilengkapi dengan peralatan pendukun acara.
                                    </Card.Text>
                                    <Button variant="outline-dark">30 - 50 Kursi</Button>
                                    <Button variant="outline-dark">Free Drink</Button>
                                    <Button variant="outline-dark">Sound System</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4}>
                            <Card>
                                <Card.Img variant="top" src="../../src/assets/img-racara.png" />
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>Coworking Space</Card.Title>
                                        </Col>
                                        <Col>
                                            <p className="text-end">IDR 15K/Jam</p>
                                        </Col>
                                    </Row>
                                    <Card.Text>
                                        Ruang acara untuk workshop, seminar dan acara
                                        lainnya. Dilengkapi dengan peralatan pendukun acara.
                                    </Card.Text>
                                    <Button variant="outline-dark">Single</Button>
                                    <Button variant="outline-dark">Free Drink</Button>
                                    <Button variant="outline-dark">Free WiFi</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
            <KontakComponents/>
            <FooterComponents/>
        </>

    );
}

export default LandingPage
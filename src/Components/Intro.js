import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div className="Intro">
      <Container
        className="text-white text-center d-flex justify-content-center
    align-items-center "
      >
        <Row>
          <Col>
            <div className="title">WELCOME TO COCOCINEMA</div>
            <div className="isi">
              Streaming Drama Korea Terlengkap
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;

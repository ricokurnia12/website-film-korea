import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import squidgameimage from '../assets/Image/trending/squidgame.jpg';
import bofimage from '../assets/Image/trending/bof.jpg';
import cloyimage from '../assets/Image/trending/cloy.jpg';
import descendantsimage from '../assets/Image/trending/descendants.jpg';
import sunshineimage from '../assets/Image/trending/sunshine.jpeg';
import tfoimage from '../assets/Image/trending/twentyfivetwentyone.jpg';

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">TRENDING</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="Trending">
            <Card className=" movieimage">
              <Image
                src={squidgameimage}
                alt="Squidgame"
                className="trendingimage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title>SQUIDGAME</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieimage">
              <Image
                src={bofimage}
                alt="Squidgame"
                className="trendingimage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title>Boys Over Flower</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieimage">
              <Image
                src={cloyimage}
                alt="Squidgame"
                className="trendingimage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title>Crash Landing On You</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieimage">
              <Image
                src={descendantsimage}
                alt="Squidgame"
                className="trendingimage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title>Descendant Of The Sun</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieimage">
              <Image
                src={sunshineimage}
                alt="Squidgame"
                className="trendingimage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title>MR. Sunshine</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieimage">
              <Image
                src={tfoimage}
                alt="Squidgame"
                className="trendingimage"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title>Twenty Five Twenty One</Card.Title>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;

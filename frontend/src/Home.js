import React from "react";
import "./css/home.css";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center main-heading text-black font-weight-bold m-auto">
              UML(activity) Test Case Generator
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Badge variant="dark" className="pt-2 pb-2 pl-2 pr-2">
              A simple test case generator for UML diagrams built in React,
              Nodejs and Express server bindings.
            </Badge>{" "}
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6} className="left-col">
            <h4 className="text-center">Process</h4>
            <div className="mt-2 divprops">
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    1
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Use any standard tool to generate UML diagram. Please refer
                    the UML-diagram given in 'extra-files' folder and do not
                    make any fancy changes, otherwise it will not run.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    2
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Note that: standard tool generates different XMI tags every
                    time. So you need to edit XMI file.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    3
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Copy all the nodes from all group tags and paste them into
                    first group tag. After that delete remaining group tags.
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    4
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Upload the XMI file in the UML Test Case Generator.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    5
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">Generate Paramater Values.</p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    6
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Download Excel Sheet of Paramater Values for further
                    computations.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className="right-col">
            <h4 className="text-center">Local Usage</h4>
            <div className="mt-2 divprops">
              <Row>
                <Col className="text-left">
                  <p className="text-left">
                    <span className="comment">
                      &#47;&#47; Link to download: <br />
                    </span>
                    <samp>
                      https://github.com/mayuraitavadekar/uml-activity-test-case-generator
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment">
                      &#47;&#47; clone using terminal <br />
                    </span>
                    <samp>
                      git clone
                      https://github.com/mayuraitavadekar/uml-seq-test-case-generator.git
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment mt-3">
                      &#47;&#47; open terminal and move into server1 <br />
                    </span>
                    <samp>
                      cd server1 <br />
                      npm install <br />
                      sudo npm start <br />
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment mt-3">
                      &#47;&#47; After that move into frontend type: <br />
                    </span>
                    <samp>
                      cd frontend <br />
                      npm install <br />
                      sudo npm start
                    </samp>
                  </p>
                </Col>
                <Row className="m-auto">
                  <Button as={Link} className="mt-3" to="/parser">
                    Generate Test Cases &#8594;
                  </Button>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

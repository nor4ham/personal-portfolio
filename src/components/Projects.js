import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: "https://i.pinimg.com/736x/02/eb/bf/02ebbf73467eaf84bff7b3987638734b.jpg",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: "https://i.pinimg.com/736x/02/eb/bf/02ebbf73467eaf84bff7b3987638734b.jpg",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: "https://i.pinimg.com/736x/02/eb/bf/02ebbf73467eaf84bff7b3987638734b.jpg",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: "https://i.pinimg.com/736x/02/eb/bf/02ebbf73467eaf84bff7b3987638734b.jpg",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: "https://i.pinimg.com/736x/02/eb/bf/02ebbf73467eaf84bff7b3987638734b.jpg",
    },
    {
      title: "Coming Soon",
      description: "Coming Soon",
      imgUrl: "https://i.pinimg.com/736x/02/eb/bf/02ebbf73467eaf84bff7b3987638734b.jpg",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Coming Soon</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

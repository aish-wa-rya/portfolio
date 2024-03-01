import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import projImg4 from "../assets/project-img4.png";
import projImg5 from "../assets/project-img5.png";
import projImg6 from "../assets/project-img6.png";
import colorSharp2 from "../assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "SABDA NER",
      description: "Design & Development",
      details: 'SABDA NER is a Nepali Named Entity Recognition software that allows user to insert unstructure text in Nepali language and then derive the Named-Entities from their paragraphs. It recognises Person, Location and Organisation.',
      imgUrl: projImg1,
    },
    {
      title: "Raw Tasks",
      description: "Design & Development",
      details: 'Raw Task is a task management application that allows the users to create custom tasks, habits or goals. This application acts as a habit tracker, a task manager, a planner (calendar) as well as a t0-do list. Raw Task implements descriptive analysis model by providing a visaual representation of the progress made by the user.',
      imgUrl: projImg2,
    },
    {
      title: "Admin Dashboard",
      description: "Design & Development",
      details: 'This project was to create a admin dashboard for the analysis of metrics like engagement of a social media enthusiast or businesses to check their social media following and interactions. It is inspired by Facebook Business suit feature.',
      imgUrl: projImg3,
    },
    {
      title: "Food Recipe Recommendation",
      description: "Design",
      details: 'This project steamed from the idea to create a recipe recommendation system. This system will have features that allows users to search recipe using the ingredients they have in hand with options of cuisine, health conscious choices and meal planning.',
      imgUrl: projImg4,
    },
    {
      title: "Movie Recommendation",
      description: "Design & Development",
      details: 'A movie recommendation system inspired by a book recommendation system called What Should I Read Next? This project will recommend different movies based on filter options like plot similaries, genre, theme, tone of movie, etc.',
      imgUrl: projImg5,
    },
    {
      title: "Pinterest Clone",
      description: "Design & Development",
      details:'This website is created as a clone of a popular website called Pinterest. So far it can only allow photo posting, likes and interaction amongst other simple features.',
      imgUrl: projImg6,
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
                <p>Here are a few projects that I have worked on individually or as a part of a team.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Tab.Pane eventKey="third">
                      <p>This section includes group project done in college.</p>
                    </Tab.Pane>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Tab.Pane eventKey="section">
                      <p>This section is for individual projects and inspired systems. </p>
                    </Tab.Pane>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 4</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 5</Nav.Link>
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
                    {/* <Tab.Pane eventKey="section">
                      <p>This section is for individual projects and inspired systems. </p>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                      <p>This section includes group project done in college.</p>
                    </Tab.Pane> */}
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
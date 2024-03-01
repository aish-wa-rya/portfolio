import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, details, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div/>
          <span>{description}</span>
          <div/>
          <span>{details}</span>
        </div>
      </div>
    </Col>
  )
}
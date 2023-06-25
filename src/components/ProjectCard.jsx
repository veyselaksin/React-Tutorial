import { Col } from "react-bootstrap";

function ProjectCard({imgUrl, title, description}){
    return(
        <Col sm={6} md={4} className="mb-3">
            <div className="proj-imgbox">
                <img src={imgUrl} alt="Image" />
                <div className="proj-txtx">
                    <h5>{title}</h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}

export default ProjectCard;
import React from "react";
import { Row, Tag, Col } from "antd";
import { Typography } from "antd";
import {Divider} from "antd";

const { Title, Text } = Typography;

const Skills = () => {
  return (
    <section
      className="skills-section"
      id="skills"
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}
    >
      <Title level={2}>Skills</Title>

      <Row gutter={[16, 16]}>
        {[
          "Spring Boot",
          "React.js",
          "Angular",
          "AWS",
          "PostgreSQL",
          "Oracle DB",
          "JWT",
          "Spring Security",
          "REST APIs",
          "Redux",
          "Tailwind CSS",
          "Git & GitHub",
        ].map((tech) => (
          <Col key={tech} xs={12} sm={8} md={6}>
            <Tag color="blue" style={{ fontSize: "14px", padding: "5px 10px"}}>
              {tech}
            </Tag>
          </Col>
        ))}
      </Row>
      <Divider />
    </section>
  );
};

export default Skills;

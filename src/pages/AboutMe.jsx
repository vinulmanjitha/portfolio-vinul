import React from "react";
import { Typography, Row, Col, Divider, Tag } from "antd";

const { Title, Paragraph, Text } = Typography;

const AboutMe = () => {
  return (
    <section
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}
      id="aboutMe"
    >
<Typography>
        <Title level={2}>Who I Am</Title>
        <Paragraph>
          I'm a Full Stack Software Engineer with experience in building scalable applications using 
          <Text strong> React</Text>, <Text strong>Angular</Text>, <Text strong>Spring Boot</Text>, 
          and <Text strong>Oracle</Text>. At Sampath Bank IT Solutions, I've worked on key systems 
          like the Trade Portal and Credit Approval System, improving workflows and system efficiency. 
          With a B.Sc. (Hons) in Computer Science from the University of Sri Jayewardenepura, I bring 
          strong technical skills and a passion for innovative projects—from real-time AI apps to 
          machine learning in music. 

          I specialize in developing back-end systems using <Text strong>Spring Boot</Text>, crafting 
          interactive UIs with <Text strong>React</Text> and <Text strong>Angular</Text>, and implementing 
          secure authentication with <Text strong>JWT & Spring Security</Text>. My experience also includes 
          managing relational databases like <Text strong>Oracle</Text> and <Text strong>PostgreSQL</Text>, 
          as well as deploying applications on <Text strong>AWS cloud platforms</Text>. I'm a fast learner, 
          team player, and always eager to grow professionally.
        </Paragraph>
        <Divider />
      </Typography>
    </section>
  );
};

export default AboutMe;

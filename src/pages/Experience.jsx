import React from "react";
import { Typography, Card, Button, Divider } from "antd";
const { Title, Text } = Typography;

const Experience = () => {
  return (
    <section
      className="experience"
      id="experience"
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}
    >
      <Title level={2}> Work Experience</Title>
      <Title level={4}>Sampath Bank PLC</Title>
      <Card hoverable style={{ margin: "2rem" }}>
        <Card.Meta
          title="Trade Portal"
          description="Designed and developed a comprehensive Trade Portal for the Trade Department of the Sampath Bank, significantly improving the efficiency of Letter of Credit (LC) approval workflows. Engineered and deployed the MT700 document generation module to facilitate seamless communication with international banking institutions. Implemented the backend using Spring Boot and a responsive frontend with React and Redux, resulting in an enhanced user experience and streamlined operations."
        />
      </Card>

      <Card hoverable style={{ margin: "2rem" }}>
        <Card.Meta
          title="Credit Approval System"
          description="Led the end-to-end development and ongoing maintenance of the Credit Approval System (CAS), supporting the management of loans, leases, and other credit-related operations. Designed and implemented automated approval workflows and a scalable system architecture using Angular and Spring Boot, resulting in improved operational efficiency and more informed, data-driven decision-making in credit processes."
        />
      </Card>
      <Card hoverable style={{ margin: "2rem" }}>
        <Card.Meta
          title="Financial Reporting System"
          description="Designed and developed a secure, enterprise-grade Financial Reporting System (FRS) using Angular and Spring Boot, enabling efficient management, submission, and auditing of financial reports across multiple departments. Implemented granular user and group-based authorization to ensure proper data access control and role-based permissions. Integrated functionality for seamless report uploads and downloads, including validation. The system supports multi-level authorization for financial document approvals, enhancing compliance, data integrity, and collaboration between finance and management teams. This project significantly reduced manual reporting time and improved accuracy and transparency in financial operations."
        />
      </Card>
      <Divider />
    </section>
  );
};

export default Experience;

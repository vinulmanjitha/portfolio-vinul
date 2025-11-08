import React from 'react';
import { Layout, Typography, Row, Col, Space } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#f0f2f5', padding: '2rem 1rem' }}>
      <Row justify="space-between" align="middle">
        {/* Left Side: Branding */}
        <Col xs={24} md={12} style={{ marginBottom: '1rem' }}>
          <Text strong style={{ fontSize: '16px' }}>
            © {new Date().getFullYear()} Vinul Lewangama. All rights reserved.
          </Text>
        </Col>

        {/* Right Side: Links & Icons */}
        <Col xs={24} md={12} style={{ textAlign: 'right' }}>
          <Space size="middle">
            <Link href="mailto:vinulmanjitha98@gmail.com">
              <MailOutlined style={{ fontSize: '20px' }} />
            </Link>
            <Link href="https://github.com/vinulmanjitha?tab=repositories" target="_blank">
              <GithubOutlined style={{ fontSize: '20px' }} />
            </Link>
            <Link href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFDND-HQJr9ugAAAZfgURJ4qip9LikugK6neVZtiZXdT90c_4JkUaqK3OC1dsUlhkXozpLQCge5229Ef-1fiSCa01Lg5qdLKqH_8fot-3be9tL-FskIjL6IXoc_4H-stXkRza0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvinul-lewangama-2b53151b4%2F" target="_blank">
              <LinkedinOutlined style={{ fontSize: '20px' }} />
            </Link>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;

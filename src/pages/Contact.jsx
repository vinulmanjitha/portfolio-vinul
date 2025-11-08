import React, { useRef, useState } from "react";
import {
  Typography,
  Button,
  Form,
  Input,
  Divider,
  message,
  Space,
  Spin,
} from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
  SendOutlined,
} from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const { Title, Text } = Typography;

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (values) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_3ljd90e",
        "template_shcys1z",
        {
          user_name: values.user_name,
          user_email: values.user_email,
          message: values.message,
        },
        "h7tQE3XxESSksXT7g"
      );
      message.success("Your message has been sent successfully!");
      formRef.current.resetFields(); 
    } catch (error) {
      console.error("FAILED...", error.text);
      message.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}

    >
      <Title level={2}> Contact Information</Title>


      <div style={{ fontSize: "16px" }}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <p>
            <UserOutlined style={{ marginRight: 8 }} />
            <Text strong>Name:</Text> Vinul Lewangama
          </p>
          <p>
            <MailOutlined style={{ marginRight: 8 }} />
            <Text strong>Email:</Text> vinulmanjitha98@gmail.com
          </p>
          <p>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            <Text strong>Location:</Text> Sri Lanka
          </p>
          <p>
            <PhoneOutlined style={{ marginRight: 8 }} />
            <Text strong>Phone:</Text> +94 76 637 2245
          </p>

          <Button
            type="primary"
            icon={<DownloadOutlined />}
            href="https://drive.google.com/uc?export=download&id=1frCO5ljy0tJ8EyBqH6WaXC74HPfyY_Lw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "fit-content", marginTop: "1rem" }}
          >
            Download CV
          </Button>
        </Space>
      </div>

      <Divider style={{ margin: "2rem 0" }} />

      <Title level={4}>Reach Out</Title>

      <Spin spinning={loading} tip="Sending...">
        <Form
          layout="vertical"
          onFinish={sendEmail}
          ref={formRef}
          style={{ marginTop: "1rem" }}
        >
          <Form.Item
            label="Name"
            name="user_name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Your name" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="user_email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="your@example.com" prefix={<MailOutlined />} />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter a message" }]}
          >
            <Input.TextArea rows={5} placeholder="Type your message here..." />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SendOutlined />}
              block
              loading={loading} 
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </section>
  );
};

export default Contact;

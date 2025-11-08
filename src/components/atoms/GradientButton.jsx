import React from "react";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Space } from "antd";
import { createStyles } from "antd-style";
import { SocialIcon } from 'react-social-icons'

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const GradientButton = () => {
  const { styles } = useStyle();
  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Space>
        <Button size="large" href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFDND-HQJr9ugAAAZfgURJ4qip9LikugK6neVZtiZXdT90c_4JkUaqK3OC1dsUlhkXozpLQCge5229Ef-1fiSCa01Lg5qdLKqH_8fot-3be9tL-FskIjL6IXoc_4H-stXkRza0=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvinul-lewangama-2b53151b4%2F">LinkedIn</Button>
        <Button size="large" href="https://github.com/vinulmanjitha?tab=repositories">Github</Button>
      </Space>
    </ConfigProvider>
  );
};

export default GradientButton;

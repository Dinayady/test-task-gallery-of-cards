import { Button, ConfigProvider, Form } from 'antd';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  loading?: boolean;
  shape?: 'default' | 'circle' | 'round' | undefined;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  type?: 'link' | 'text' | 'default' | 'primary' | 'dashed' | undefined;
};

export const CustomBtn = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  shape,
  onClick,
}: Props) => {
  return (
    <Form.Item>
      <ConfigProvider>
        <Button
          onClick={onClick}
          danger={danger}
          loading={loading}
          shape={shape}
          htmlType={htmlType}
          type={type}
        >
          {children}
        </Button>
      </ConfigProvider>
    </Form.Item>
  );
};

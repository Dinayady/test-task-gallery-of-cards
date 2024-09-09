import { Layout, Space, Typography } from 'antd';

import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

import style from './style.module.css';

export const Header = () => {
  return (
    <Layout.Header className={style.header}>
      <Space>
        <Link to={Paths.products}>
          <Typography.Title level={3} style={{ color: '#54387F' }}>
            Products cards
          </Typography.Title>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.product}>
          <Typography.Title level={3} style={{ color: '#54387F' }}>
            Add products
          </Typography.Title>
        </Link>
      </Space>
    </Layout.Header>
  );
};

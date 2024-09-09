import { Link } from 'react-router-dom';
import { Card } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  HeartOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { Paths } from '../../paths';

type Props = {
  name: string;
  img: string;
  birthday: string;
  loading: boolean;
};

export const ProductCard = ({ name, img, birthday, loading }: Props) => {
  return (
    <Link to={`${Paths.product}/${name}`}>
      <Card
        style={{ width: 300 }}
        title={name}
        cover={<img alt={name} src={img} />}
        loading={loading}
        actions={[
          <HeartOutlined key='heart' />,
          <DeleteOutlined key='delete' />,
        ]}
      >
        {birthday}
      </Card>
    </Link>
  );
};

import { Layout as AntLayout } from 'antd';

import style from './style.module.css';
import { Header } from '../header/Header';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={style.layout}>
      <Header />
      <AntLayout.Content style={{ height: '100%' }}>
        {children}
      </AntLayout.Content>
    </div>
  );
};

import React, {useState, useEffect} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import {connect, useSelector} from 'react-redux';
import { logout } from '../../configs/redux/actions/loginAction';

const { Header, Content, Footer, Sider } = Layout;

const SiderDemo = ({history, handleLogout}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {isLogin, jwtToken} = useSelector(state => state.auth);

  useEffect(() => {
    if(!isLogin && !jwtToken) return history.push('/login');
  }, [])

  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  // LOGOUT EVENT
  const handleButtonLogout = async () => {
    localStorage.removeItem('jwtToken');
    handleLogout()
    history.push('/');
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* SIDEBAR */}
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="10" icon={<LogoutOutlined />} onClick={() => handleButtonLogout()}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      
      {/* MAIN LAYOUT */}
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />

        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        
        <Footer style={{ textAlign: 'center' }}>Dashboard</Footer>
      </Layout>
    </Layout>
  );
}

// REDUX CONNECT
const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(logout()),
  }
}

export default connect(null, mapDispatchToProps) (SiderDemo);
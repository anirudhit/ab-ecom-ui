import React, { useState } from 'react';
import { AutoComplete, Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import './MainWrapper.css';

const { Header, Sider, Content, Footer } = Layout;

export const MainWrapper = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false);
    const toggle = () => {
    setCollapsed(!collapsed);
    };

    return (
        <>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: toggle,
                })}
            </Header>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                            Todo
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            Portfolio
                        </Menu.Item>
                        <Menu.Item key="3" icon={<VideoCameraOutlined />}>
                            Holding
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UploadOutlined />}>
                            Report
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 'auto',
                    }}>
                    Content
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>EaB Design ©2021 Created by </Footer>
        </Layout>
        </>
    );
};
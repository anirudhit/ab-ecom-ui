import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import {
    AppstoreOutlined
  } from '@ant-design/icons';
import { PageHeader } from 'antd';
import './TodoPage.css';

// Tabs
import { Tabs } from 'antd';
import { CopyOutlined, DeleteOutlined } from '@ant-design/icons';

export const TodoPage = () => {
    const [form] = Form.useForm();
    const { TabPane } = Tabs;
    return(
        <>
            <header id="header" data-testid="header" className="eab-page-header">
                <PageHeader
                    className="todo-page-header"
                    backIcon={<AppstoreOutlined />}
                    onBack={() => null}
                    title="EaB"
                    subTitle="@1 Place"
                />
            </header>

            <Form
                form={form}
                layout="vertical"
            >
                <Form.Item label="What needs to be done" required tooltip="Todo title">
                    <Input placeholder="Todo title" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>

            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <span>
                        <CopyOutlined />
                        Active
                        </span>
                    }
                    key="1"
                >
                Tab 1
                </TabPane>
                <TabPane
                    tab={
                        <span>
                        <DeleteOutlined />
                        Archieved
                        </span>
                    }
                    key="2"
                >
                Tab 2
                </TabPane>
            </Tabs>
        </>
    );
};
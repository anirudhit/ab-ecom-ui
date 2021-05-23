import React from 'react';
import {
    AppstoreOutlined
  } from '@ant-design/icons';
import { PageHeader } from 'antd';
import './EabHeader.css';

export const EabHeader = () => {
    return(
        <header id="header" data-testid="header" className="eab-page-header">
            <PageHeader
                className="eab-page-header"
                backIcon={<AppstoreOutlined />}
                onBack={() => null}
                title="EaB"
                subTitle="@1 Place"
            />
        </header>
    );
};
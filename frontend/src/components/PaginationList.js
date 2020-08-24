import React from 'react';
import Moment from 'moment';

import { List, Space } from 'antd';

Moment.locale('pt-BR');

const PaginationList = (props) => {
    return (

        <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 6,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.rocket_name}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          title={<a href={item.href}>{item.rocket_name}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
    );
}

export default PaginationList;
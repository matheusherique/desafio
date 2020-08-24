import React from 'react';
import { Card, Row, Col, List } from 'antd';
import Moment from 'moment';

const OneListView = (props) => {
  console.log(props.data)
  return (
    <List.Item
        key={props.data.rocket_name}
        extra={
            <iframe width="420" height="315"
            src={props.data.video_link}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        }
      >
      <List.Item.Meta
        title={<a>Número do voo: {props.data.flight_number}</a>}
        description={props.data.description}
      />
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Horário local" bordered={true}>
              {Moment(props.data.launch_date_local).format('HH:mm - DD MMM, YYYY')}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Horário UTC" bordered={true}>
              {Moment(props.data.launch_date_utc).format('HH:mm (UTCZ) - DD MMM, YYYY')}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Ano do voo" bordered={true}>
              {props.data.launch_year}
            </Card>
          </Col>
        </Row>
        <br/>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Nacionalidade" bordered={true}>
              {props.data.nationality}
            </Card>
          </Col>
          <Col span={8}>
              <Card title="Local" bordered={true}>
              {props.data.site_name}
              </Card>
          </Col>
          <Col span={8}>
            <Card title="Nome do foguete" bordered={true}>
              {props.data.rocket_name}
            </Card>
          </Col>
        </Row>
      </div>
    </List.Item>
  );
};
export default OneListView;
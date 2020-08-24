import React from 'react';
import { Card, Row, Col } from 'antd';

const List = (props) => {
  console.log(props.data)
  return (
    <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col span={8}>
                <Card title="Horário local" bordered={true}>
                {props.data.launch_date_local}
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Horário UTC" bordered={true}>
                {props.data.launch_date_utc}
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
  );
};
export default List;
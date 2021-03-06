import React from 'react';
import Moment from 'moment';

import { List, Card, Row, Col } from 'antd';

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
                made by <b>Matheus Costa</b>
            </div>
            }
            renderItem={item => (
                <List.Item
                    key={item.rocket_name}
                    extra={
                        <iframe width="420" height="315"
                        src={item.video_link}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                        </iframe>
                    }
                >
                    <List.Item.Meta
                    title={<a href={item.href}>Número do voo: {item.flight_number}</a>}
                    description={item.description}
                    />
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Horário local" bordered={true}>
                                    {Moment(item.launch_date_local).format('HH:mm - DD MMM, YYYY')}
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Horário UTC" bordered={true}>
                                    {Moment(item.launch_date_utc).format('HH:mm (UTCZ) - DD MMM, YYYY')}
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Ano do voo" bordered={true}>
                                    {item.launch_year}
                                </Card>
                            </Col>
                        </Row>
                        <br/>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Nacionalidade" bordered={true}>
                                    {item.nationality}
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Local" bordered={true}>
                                    {item.site_name}
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Nome do foguete" bordered={true}>
                                    {item.rocket_name}
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </List.Item>
            )}
        />
    );
}

export default PaginationList;
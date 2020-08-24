import React from 'react';
import { Layout, Tabs } from 'antd';
import NextLaunch from '../containers/NextLaunch';
import LatestLaunch from '../containers/LatestLaunch';
import PastLaunch from '../containers/PastLaunch'
import UpcomingLaunch from '../containers/UpcomingLaunch';

const TabPane = Tabs.TabPane;
const { Content, Footer } = Layout;

export default class TabsMenu extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    callback(key) {
        console.log(key);
    }


    render() {
        return (
            <Layout>
                <Content style={{ background: '#FFF', padding: '0 20px' }}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Próximo Lançamento" key="1">
                            <NextLaunch />
                        </TabPane>
                        <TabPane tab="Último Lançamento" key="2">
                            <LatestLaunch />
                        </TabPane>
                        <TabPane tab="Próximos Lançamentos" key="3">
                            <UpcomingLaunch />
                        </TabPane>
                        <TabPane tab="Lançamentos Passados" key="4">
                            <PastLaunch />
                        </TabPane>
                    </Tabs>
                    <div style={{ background: '#FFF', padding: 24, minHeight: 280 }}>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center', bottom: 0 }}></Footer>
            </Layout>
        );
    }
}
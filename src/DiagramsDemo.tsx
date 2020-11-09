import * as React from 'react';
import createEngine, {
    DefaultLinkModel,
    DefaultNodeModel,
    DiagramModel
} from '@projectstorm/react-diagrams';

import {
    CanvasWidget
} from '@projectstorm/react-canvas-core';

class DiagramsDemo extends React.Component<any, any> {
    protected readonly engine: any;
    protected readonly model: any;
    constructor(props: any) {
        super(props);

        this.engine = createEngine();

        const node1 = new DefaultNodeModel({
            name: 'Node 1',
            color: 'rgb(0,192,255)'
        });

        node1.setPosition(100, 100);
        let port1 = node1.addOutPort('Out');

        // node 2
        const node2 = new DefaultNodeModel({
            name: 'Node 2',
            color: 'rgb(0,150,255)',
        });
        node2.setPosition(50, 100);
        let port2 = node2.addOutPort('Out');

        const link = port1.link<DefaultLinkModel>(port2);
        link.addLabel('Hello World');

        this.model = new DiagramModel();
        this.model.addAll(node1, node2, link);

        this.engine.setModel(this.model);

    }
    render () {
        console.log('engine info', this.engine)
        return <CanvasWidget engine={this.engine} className='canvas' />
    }
}
export default DiagramsDemo;

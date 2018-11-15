import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import DeviceDetector from "device-detector-js";
const agent = new DeviceDetector().parse(navigator.userAgent) || {};
const device = agent.device || { type: 'desktop' };

if (device.type === 'desktop') {
    import ('./components/common.blocks/index').then((Import) => {
        const { App } = Import;
        ReactDOM.render(
            <App/>,
            document.getElementById('root') as HTMLElement
        );
    });
} else {
    import ('./components/mobile.blocks/index').then((Import) => {
        const { App } = Import;
        ReactDOM.render(
            <App/>,
            document.getElementById('root') as HTMLElement
        );
    });
}

registerServiceWorker();

import React from "react";
import { Tabs, Tab, Button } from "carbon-components-react";

export const CustomTab = (props) => {
    const { onClose } = props;
    return (<Tabs>
        <Tab id="tab-1" label="Tab label 1">
            <p>Content for first tab goes here.</p>
            <Button onClick={onClose}>Close</Button>
        </Tab>
        <Tab id="tab-2" label="Tab label 2">
            <p>Content for second tab goes here.</p>
            <Button onClick={onClose}>Close</Button>
        </Tab>
    </Tabs>)
};
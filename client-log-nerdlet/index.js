import React from 'react';
import { Grid, GridItem } from 'nr1';
import QueryLogsSection from './query-section';
import BrowserLogs from './browser-logs';

export default class ClientLogNerdLet extends React.Component {
    render() {
        return <div>
            <br/>
            <br/>
            <Grid className="wrapper">
            <GridItem columnSpan={12} columnStart={12} columnEnd={12} ><QueryLogsSection /></GridItem>
            <GridItem columnSpan={12}columnStart={2} columnEnd={11}><BrowserLogs /></GridItem>
            </Grid>
        </div>
    }
}

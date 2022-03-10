import React from 'react';
import { PlatformStateContext, NerdletStateContext, Grid, GridItem, AccountPicker} from 'nr1';
import BrowserLogs from './browser-logs';



export default class ClientLogNerdLet extends React.Component {
    
  constructor() {
    super();
  }

  onChangeAccount(_, value) {
    this.setState({ accountId: value });
  }

    render() {
    return (
      <PlatformStateContext.Consumer>
        {({ accountId }) => (
        <NerdletStateContext.Consumer>
         {({ entityGuid }) => (
          <div>
            <Grid className="top-chart">
                <GridItem columnSpan={12}columnStart={1} columnEnd={12}><BrowserLogs accountId={accountId} entityGuid={entityGuid}/></GridItem>
            </Grid>
          </div>
         )}
       </NerdletStateContext.Consumer>
        )}
      </PlatformStateContext.Consumer>
    );

    }
}

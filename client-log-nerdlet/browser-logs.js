import React from 'react';
import {
  PlatformStateContext, navigation, Stack, StackItem, HeadingText, TableChart
} from 'nr1';
import { timeRangeToNrql } from '@newrelic/nr1-community';

const LOGGING_NERDLET_ID = 'logger.log-tailer'

export default class BrowserLogs extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        const entityQuery="SELECT count(*) as '#' FROM JavaScriptError FACET uuid, errorMessage, stackTrace WHERE uuid is not null ";

        return (

            <PlatformStateContext.Consumer>
                {(PlatformState) => {

                    const since = timeRangeToNrql(PlatformState);

                    return (
                        <Stack
                          verticalType={Stack.VERTICAL_TYPE.FILL} 
                          directionType={Stack.DIRECTION_TYPE.VERTICAL}
                          gapType={Stack.GAP_TYPE.EXTRA_LOOSE}>
                          <StackItem>
                               <HeadingText>
                                    JavaScript Errors
                                </HeadingText>
                               <TableChart query={entityQuery+since} accountId={this.props.accountId} className="top-chart" onClickTable={(dataEl, row, chart) => {
                                const  nerdlet = {
                                    id: LOGGING_NERDLET_ID,
                                    urlState: {
                                      query: `search.UUID:${row.uuid} and entity.GUID:${this.props.entityGuid}`
                                    },
                                  };
                                  
                                    navigation.openNerdlet(nerdlet);
                            }}/>
                            </StackItem>
                        </Stack> 
                    );
                }}
            </PlatformStateContext.Consumer>
        );
    }
}

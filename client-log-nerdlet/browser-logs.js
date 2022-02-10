import React from 'react';
import { HeadingText, 
         NrqlQuery, 
         TableChart,
} from 'nr1';

const ACCOUNT_ID = 2093792

export default class BrowserLogs extends React.Component {
    render() {

        return <div>
            <HeadingText className="chartHeader">
                JavaScript Errors
            </HeadingText>
            <br/>
            <NrqlQuery
                pollInterval={NrqlQuery.AUTO_POLL_INTERVAL}
                accountIds={[ACCOUNT_ID]}
                query="SELECT entityGuid, uuid, errorMessage, stackTrace FROM JavaScriptError WHERE uuid is not null SINCE 2 days ago"
            >
                {
                    ({ data }) => {
                        return <TableChart data={data} fullWidth />;
                    }
                }
            </NrqlQuery>
        </div>
    }
}

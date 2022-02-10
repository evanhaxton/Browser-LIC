import React from 'react';
import {
    Button,
    navigation
} from 'nr1';

const ACCOUNT_ID = 2093792
const UUID = 12345
const LOGGING_NERDLET_ID = 'logger.log-tailer'



export default class QueryLogsSection extends React.Component {
    render() {
        return <div>
            <Button type={Button.TYPE.PRIMARY} 
            onClick={() => navigation.openStackedNerdlet({
                // @ts-expect-error @datanerd/nr1-types has incorrect type definitions for `openStackedNerdlet`
                id: [LOGGING_NERDLET_ID],
                urlState: {
                  accountId: [ACCOUNT_ID],
                  query: 'uuid: [UUID]'
                },
              })}
            >Query Logs</Button>
        </div>
    }
}

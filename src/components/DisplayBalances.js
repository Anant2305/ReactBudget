import React from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({expenseTotal, incomeTotal}) {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance balSize='tiny' balColor='green' balLabel='Income' balValue={incomeTotal} />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance balSize='tiny' balColor='red' balLabel='Expensese' balValue={expenseTotal} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances;



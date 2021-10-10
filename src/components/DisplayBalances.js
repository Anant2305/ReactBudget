import React from 'react';
import { Grid, Segment, Statistic } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

function DisplayBalances({balSize, balColor, balLabel, balValue}) {
    return (
        <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance balSize='tiny' balColor='green' balLabel='Income' balValue='1,220' />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance balSize='tiny' balColor='red' balLabel='Expensese' balValue='623.50' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default DisplayBalances;



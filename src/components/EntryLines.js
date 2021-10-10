import React from 'react';
import { Grid, Icon, Segment, Statistic } from 'semantic-ui-react';

function EntryLines({title, value, isExpense=false}) {
    return (
        <Segment color={isExpense ? 'red':'green'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{title}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>£{value}</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
}

export default EntryLines;
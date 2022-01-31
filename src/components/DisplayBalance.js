import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBalance({balSize, balColor, balLabel, balValue}) {
    return (<Statistic size={balSize} color={balColor}>
    <Statistic.Label style={{textAlign:"left"}}>
      {balLabel}:
    </Statistic.Label>
    <Statistic.Value>{isNaN(balValue) ? 0: balValue}</Statistic.Value>
  </Statistic>
    );
}

export default DisplayBalance;
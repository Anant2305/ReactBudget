import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLines from './EntryLines';

function EntryLine({entries,}) {
    return (
        <Container>
        {entries.map((entry) => (
            <EntryLines 
              key={entry.id}
              {...entry}
            />
        ))}
        </Container>
    );
}

export default EntryLine;
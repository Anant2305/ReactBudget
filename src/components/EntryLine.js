import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLines from './EntryLines';

function EntryLine({entries, deleteEntry}) {
    return (
        <Container>
        {entries.map((entry) => (
            <EntryLines 
              key={entry.id}
              {...entry}
              deleteEntry={deleteEntry}
            />
        ))}
        </Container>
    );
}

export default EntryLine;
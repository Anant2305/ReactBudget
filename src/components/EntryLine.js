import React from 'react';
import { Container } from 'semantic-ui-react';
import EntryLines from './EntryLines';

function EntryLine({entries, deleteEntry, editEntry}) {
    return (
        <Container>
        {entries.map((entry) => (
            <EntryLines 
              key={entry.id}
              {...entry}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
            />
        ))}
        </Container>
    );
}

export default EntryLine;
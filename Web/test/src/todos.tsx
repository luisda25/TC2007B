import {useMediaQuery, Theme} from '@mui/material';
import {List, SimpleList, Datagrid, TextField, EmailField, Edit, SimpleForm, TextInput, Create, required, ReferenceField, ReferenceInput} from 'react-admin';

export const TodosList = () => (
    <List>
        <Datagrid>
            <ReferenceField source = "userId" reference = "users"/>
            <TextField source = "id"/>
            <TextField source = "title"/>
            <TextField source = "completed"/>
        </Datagrid>
    </List>
);

export const TodosEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source = "userId" reference = "users" InputProps = {{disabled: true}}/>
            <TextInput disabled source = "id" InputProps = {{disabled: true}}/>
            <TextInput source = "title"/>
            <TextInput source = "completed"/>
        </SimpleForm>
    </Edit>
);

export const TodosCreate = () => (
    <Create>
        <SimpleForm>
            <ReferenceInput source = "userId" reference = "users"/>
            <TextInput source = "title"/>
            <TextInput source = "completed"/>
        </SimpleForm>
    </Create>
);
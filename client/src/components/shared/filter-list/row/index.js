import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const handleChange = (callback, id) => () => callback(id);

const CheckboxItem = ({ _id, name, checked, onToggle }) => {
  return (
    <ListItem style={{ padding: '10px 0' }}>
      <ListItemText primary={name} />
      <ListItemSecondaryAction>
        <Checkbox
          color="primary"
          onChange={handleChange(onToggle, _id)}
          checked={checked.indexOf(_id) !== -1}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CheckboxItem;

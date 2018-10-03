import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class BrandTitle extends PureComponent {
  render() {
    const { title, open, onClick } = this.props;
    return (
      <ListItem onClick={onClick} style={{ padding: '10px 23px 10px 0' }}>
        <ListItemText primary={title} className="collapse_title" />
        <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} className="icon" />
      </ListItem>
    );
  }
}

export default BrandTitle;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Row from './row/index';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';

class CollapseCheckbox extends Component {
  state = {
    open: this.props.open
  };

  handleTitleClick = () => this.setState({ open: !this.state.open });

  handleCheckboxToggle = value => {
    const currentIndex = this.props.checked.indexOf(value);
    const newChecked = [...this.props.checked];

    currentIndex === -1 ? newChecked.push(value) : newChecked.splice(currentIndex, 1);
    this.props.onFiltersChange(newChecked);
  };

  render() {
    return (
      <div className="collapse_items_wrapper">
        <List style={{ borderBottom: '1px solid #dbdbdb' }}>
          <ListItem onClick={this.handleTitleClick} style={{ padding: '10px 23px 10px 0' }}>
            <ListItemText primary={this.props.title} className="collapse_title" />
            <FontAwesomeIcon icon={this.state.open ? faAngleUp : faAngleDown} className="icon" />
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {this.props.list.map(item => (
                <Row
                  key={item._id}
                  {...item}
                  checked={this.props.checked}
                  onToggle={this.handleCheckboxToggle}
                />
              ))}
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

CollapseCheckbox.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  checked: PropTypes.arrayOf(PropTypes.shape).isRequired,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onFiltersChange: PropTypes.func.isRequired
};

CollapseCheckbox.defaultProps = {
  open: false
};

export default CollapseCheckbox;

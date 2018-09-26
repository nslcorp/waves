import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '@fortawesome/fontawesome-free-solid/faAngleDown';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

class FilterListRadio extends Component {
  state = {
    value: '0',
    open: this.props.open
  };

  handleTitleClick = () => this.setState({ open: !this.state.open });

  handleRadioChange = event => {
    this.setState({ value: event.target.value });
    this.props.onFiltersChange(parseInt(event.target.value, 0));
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
              <RadioGroup
                aria-label="prices"
                name="prices"
                value={this.state.value}
                onChange={this.handleRadioChange}
              >
                {this.props.list.map(item => (
                  <FormControlLabel
                    key={item._id}
                    value={item._id.toString()}
                    control={<Radio />}
                    label={item.name}
                  />
                ))}
              </RadioGroup>
            </List>
          </Collapse>
        </List>
      </div>
    );
  }
}

FilterListRadio.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onFiltersChange: PropTypes.func.isRequired
};

FilterListRadio.defaultProps = {
  open: false
};

export default FilterListRadio;

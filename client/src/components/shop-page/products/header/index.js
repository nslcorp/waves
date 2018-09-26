import React from 'react';
import { connect } from 'react-redux';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTh from '@fortawesome/fontawesome-free-solid/faTh';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

import { doToggleGrid } from '../actions';
import { getGrid } from '../reducer';

const Header = props => {
  const gridClassList = `grid_btn ${props.grid === 'bars' ? 'active' : ''}`;
  const gridBtnClassList = `grid_btn ${props.grid === 'cards' ? 'active' : ''}`;
  return (
    <div className="shop_options">
      <div className="shop_grids clear">
        <div className={gridClassList} onClick={() => props.doToggleGrid('bars')}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className={gridBtnClassList} onClick={() => props.doToggleGrid('cards')}>
          <FontAwesomeIcon icon={faTh} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  grid: getGrid(state)
});
export default connect(
  mapStateToProps,
  { doToggleGrid }
)(Header);

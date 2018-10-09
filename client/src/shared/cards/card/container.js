import { connect } from 'react-redux';
import Card from './component';
import { getUser } from '../../../components/user/reducer';
import { doAddToCart } from '../../../components/user/actions';

const mapStateToProps = state => ({
  isAuth: getUser(state).isAuth
});

const withConnect = connect(
  mapStateToProps,
  { doAddToCart }
);

export default withConnect(Card);

import axios from 'axios';
import * as types from './types';

const USER_SERVER = '/api/user';

export const doSmth = () => ({
  type: DO_REQUEST
});

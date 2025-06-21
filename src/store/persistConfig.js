// storage
import storage from "redux-persist/lib/storage";
import userTransform from './userPersistConfig';

export default {
  key: 'root',
  storage,
  transforms: [userTransform],
  whitelist: ['user'],
  blacklist: ['company', 'cart'],
};

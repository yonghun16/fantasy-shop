// storage
import storage from "redux-persist/lib/storage";

export default {
  key: "root",
  storage,
  blacklist: ['company', 'cart'],
};

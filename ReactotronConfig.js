import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

export default Reactotron
  // .setAsyncStorageHandler(AsyncStorage)
  .configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect();

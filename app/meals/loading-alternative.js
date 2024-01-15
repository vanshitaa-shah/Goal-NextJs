//Change file name to loading again to get the default loading
import Styles from "./loading.module.css";

const loading = () => {
  return <h1 className={Styles.load}>Fetching Data ...</h1>;
};

export default loading;

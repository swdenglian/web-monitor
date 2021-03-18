import axios from 'axios';
import styles from './index.less';

setInterval((): void => {
  axios.get('https://vod-dev.duochang.cc/api/user/v1/relation?user_id=180161');
}, 2000);

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

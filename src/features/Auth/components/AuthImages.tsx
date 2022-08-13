import styles from '../Auth.module.scss';
import bg from '../../../common/assets/bg.png';
import React from 'react';

const AuthImages = () => {
  return <>
    <div className={styles.bgImgFirst}>
      <img src={bg} alt={'bg auth image'} width={300} />
    </div>
    <div className={styles.bgImgSecond}>
      <img src={bg} alt={'bg auth image'} width={200} />
    </div>
    <div className={styles.bgImgThirty}>
      <img src={bg} alt={'bg auth image'} width={150} />
    </div>
  </>
}

export default AuthImages;
import styles from './Label.module.css';

function Label (props) {
 return (
  <p className={styles['label-city']}>
    {props.city}
  </p>
 ) 
}

export default Label;

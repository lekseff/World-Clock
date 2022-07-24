import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Form.module.css'

function Form (props) {
  const { city, timezone } = props.form;

  const handleChange = (event) => {
    const { name, value } = event.target;
    props.onChange({name, value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        title={'Название города'}
        value={city}
        className={styles['input-field']}
        type="text"
        name='city'
        placeholder="Название города"
        required
        onChange={handleChange}
      />
      <Input
        title={'Часовой пояс'}
        value={timezone}
        className={styles['input-field']}
        type="number"
        name='timezone'
        placeholder="Часовой пояс"
        max="12"
        min="-12"
        step="1"
        required
        onChange={handleChange}
      />
      <Button className={styles['form-button']}>Добавить</Button>
    </form>
  )
}

export default Form;

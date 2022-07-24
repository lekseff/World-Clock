import { useEffect, useState } from 'react';
import styles from './Clock.module.css';
import Label from '../Label/Label';
import Button from '../Button/Button';

function Clock(props) {
    const { city, timezone } = props.watch;
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const getArrowTime = () => {
        const date = new Date();
        const utcHours = date.getUTCHours();
        const utcMinutes = date.getUTCMinutes();
        const utcSeconds = date.getUTCSeconds();
        let hours = utcHours > 12 ? utcHours - 12 : utcHours;
        hours = Math.abs(hours + Number.parseInt(timezone));
        if (hours > 12) hours = hours - 12;
        return { hours, minutes: utcMinutes, seconds: utcSeconds };
    };

    useEffect(() => {
        // Устанавливаем начальное состояние
        const { hours, minutes, seconds } = getArrowTime();
        setTime(() => ({ hours, minutes, seconds }));

        const intervalId = setInterval(() => {
            const { hours, minutes, seconds } = getArrowTime();
            setTime(() => ({ hours, minutes, seconds }));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.clock}>
            <div className={styles.watch}>
                <span
                    className={styles.hours}
                    style={{ transform: `rotate(${time.hours * 30 - 90}deg)` }}
                ></span>
                <span
                    className={styles.minutes}
                    style={{ transform: `rotate(${time.minutes * 6 - 90}deg)` }}
                ></span>
                <span
                    className={styles.seconds}
                    style={{ transform: `rotate(${time.seconds * 6 - 90}deg)` }}
                ></span>
                <span className={styles.dot}></span>
                <span className={styles.three}>3</span>
                <span className={styles.six}>6</span>
                <span className={styles.nine}>9</span>
                <span className={styles.twelve}>12</span>
            </div>
            <Label city={city} />
            <Button
                className={styles.close}
                onClick={() => props.remove(props.watch)}
            />
        </div>
    );
}

export default Clock;


Clock.defaultProps = {
  city: '',
  timezone: 0,
}
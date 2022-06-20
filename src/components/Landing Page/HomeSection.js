import { useHistory } from 'react-router-dom';
import styles from './HomeSection.module.css';
import Button from '../Button';



const HomeSection = () => {
	
	const history = useHistory();

	const loginRedirectHandler = (event) => {
		event.preventDefault();
		history.push('/login');
	};

	return (
		<div className={styles['container']}>
			<div className={styles['background-container']}>
				<img className={styles['background']} src='/images/background1.png' alt='background'></img>
			</div>
			<div className={styles['text-container']}>
				<p className={styles['text']}>Designed by Bhagwan Bharose</p>
				<h1 className={styles['title']}>Advance.</h1>
				<h1 className={`${styles['title']} ${styles['dark']}`}>Secure.</h1>
				<h1 className={styles['title']}>Network.</h1>
				<Button onClick={loginRedirectHandler} className={styles['login-btn']}>Login</Button>
			</div>
		</div>
	)
};

export default HomeSection;
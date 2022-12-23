import Button from './Button';
import styles from './Modal.module.css';

const Modal = (props) => {

    return (
        <div className={styles['modal-wrapper']}>
            <div className={styles['modal-background']} onClick={props.onConfirm}></div>
            <div className={styles['modal-dialog']}>
                <div className={styles['modal-content']}>
                    <div className={styles['modal-header']}>
                        <h4>{props.title}</h4>
                    </div>
                    <div className={styles['modal-body']}>
                        <p>{props.message}</p>
                    </div>
                    <div className={styles['modal-footer']}>
                        <Button type="button" onClick={props.onConfirm}>Ok</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
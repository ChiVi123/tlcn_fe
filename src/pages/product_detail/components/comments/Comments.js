import classNames from 'classnames/bind';
import styles from './Comments.module.scss';

const cx = classNames.bind(styles);

function Comments({ comments }) {
    return (
        <ul className={cx('comments')}>
            {comments.map((item, index) => (
                <li key={index} className={cx('comment')}>
                    <img
                        src={item.img}
                        alt={item.userName}
                        className={cx('avatar')}
                    />
                    <div className={cx('comment-right-side')}>
                        <span className={cx('user-name')}>{item.userName}</span>
                        <span className={cx('created-at')}>
                            {item.createdAt}
                        </span>
                        <p className={cx('comment-content')}>{item.content}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Comments;

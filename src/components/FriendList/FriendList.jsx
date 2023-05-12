import PropTypes from 'prop-types';
import css from './FriendList.module.css';




const getBackgroundColor = variant => {
  switch (variant) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const FriendList = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span
            className={css.status}
            style={{ backgroundColor: getBackgroundColor(isOnline) }}
          ></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  </>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

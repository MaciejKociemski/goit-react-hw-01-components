import PropTypes from 'prop-types';
import css from './FriendList.module.css';




const getFriendsBackgroundColor = (isOnline) => {
  return isOnline ? 'green' : 'red'
};

export const FriendList = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span
            className={css.status}
            style={{ backgroundColor: getFriendsBackgroundColor(isOnline) }}
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
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
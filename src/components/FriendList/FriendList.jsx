import PropsTypes from "prop-types";
import style from "./FriendList.module.css";

export const FriendList = props => {
  const friends = props.friends;
  return (
    <ul className={style["friend-list"]}>
      {friends.map(friend => (
        <li className={style['item']} key={friend.id}>
          <span className={friend.isOnline ? style.online : style.offline}></span>
          <img            
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.PropsTypes = {
  avatar: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  isOnline: PropsTypes.bool.isRequired,
  id: PropsTypes.number.isRequired
}

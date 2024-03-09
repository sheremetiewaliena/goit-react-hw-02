import css from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.wrap}>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
}

export default FriendListItem;
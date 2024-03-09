import css from "./Profile.module.css";


function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileContainer}>
      <div className={css.imageContainer}>
        <img
          className={css.imageContainerImage}
          src={image}
          alt={name}
          width={300}
        />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.statsItemValue}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.statsItemValue}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.statsItemValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
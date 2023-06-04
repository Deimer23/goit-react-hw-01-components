import PropsTypes from "prop-types";
import style from './Profile.module.css';

export const Profile = (props) => {
    const {username, tag, location, avatar, stats} = props.user;
    return (
       <div className={style['profile']}>
            <div className={style['description']}>
                <img className="img" src={avatar} alt="" width="100"/>
                <span>{username}</span>
                <span>{tag}</span>
                <span>{location}</span>
            </div>
            <ul className={style['stats']}>
                <li>
                <span >Followers</span><br/>
                <span >{stats.followers}</span>
                </li>
                <li>
                <span >Views</span><br/>
                <span >{stats.views}</span>
                </li>
                <li>
                <span >Likes</span><br/>
                <span >{stats.likes}</span>
                </li>
            </ul>
       </div>
    )
}

Profile.PropsTypes = {
    username: PropsTypes.string.isRequired,
    tag: PropsTypes.string.isRequired,
    location: PropsTypes.string.isRequired,
    avatar: PropsTypes.string.isRequired,
    stats: PropsTypes.object.isRequired
}
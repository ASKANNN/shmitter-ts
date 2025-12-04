import Avatar from "./Avatar";
import { useContext } from "react";
import { ShmitterContext } from "../utils/context";

const Stats = () => {
    const { user, stats, changeFollowers, changeFollowing } = useContext(ShmitterContext);

    return (
        <div className="user-stats">
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className="stats">
                <div
                    onClick={() => changeFollowers(1)}
                    onContextMenu={(e) => { e.preventDefault(); changeFollowers(-1); }}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={() => changeFollowing(1)}
                    onContextMenu={(e) => { e.preventDefault(); changeFollowing(-1); }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;

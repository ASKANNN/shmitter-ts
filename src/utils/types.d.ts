interface User {
    avatar: string;
    name: string;
}

interface Stats {
    followers: number;
    following: number;
}

interface ShmitterContextValue {
    user: User;
    stats: Stats;
    changeAvatar: (url: string) => void;
    changeName: (name: string) => void;
    changeFollowers: (change: number) => void;
    changeFollowing: (change: number) => void;
}

export type{User, Stats, ShmitterContextValue};
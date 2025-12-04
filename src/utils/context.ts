import { createContext } from "react";
import type { ShmitterContextValue } from "./types";

export const ShmitterContext = createContext<ShmitterContextValue>({
    user: { avatar: '', name: '' },
    stats: { followers: 0, following: 0 },
    changeAvatar: () => {},
    changeName: () => {},
    changeFollowers: () => {},
    changeFollowing: () => {},
});

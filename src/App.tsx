import { useState } from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import { ShmitterContext } from "./utils/context";
import type { User, Stats } from "./utils/types";

function App() {
    const [user, setUser] = useState<User>({
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
        name: 'Monster',
    });

    const [stats, setStats] = useState<Stats>({
        followers: 42,
        following: 12,
    });

    const changeAvatar = (url: string) => {
        setUser({ ...user, avatar: url });
    };

    const changeName = (name: string) => {
        setUser({ ...user, name });
    };

    const changeFollowers = (change: number) => {
        setStats(prev => ({
            ...prev,
            followers: Math.max(0, prev.followers + change)
        }));
    };

    const changeFollowing = (change: number) => {
        setStats(prev => ({
            ...prev,
            following: Math.max(0, prev.following + change)
        }));
    };

    return (
        <div className="app">
            <ShmitterContext.Provider value={{
                user,
                stats,
                changeAvatar,
                changeName,
                changeFollowers,
                changeFollowing
            }}>
                <Navigation />
                <Body />
            </ShmitterContext.Provider>
        </div>
    );
}

export default App;

import { useContext } from "react";
import { ShmitterContext } from "../utils/context";


const Avatar = ({size}:{size?:string}) => {
    const { user, changeAvatar, changeName } = useContext(ShmitterContext);

    return (
        <img
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
            onClick={() => {
                const url = prompt('Enter a new avatar URL');
                if (url !== null) changeAvatar(url);
            }}
            onContextMenu={(e) => {
                e.preventDefault(); // отменяем стандартное меню
                const name = prompt('Enter a new name');
                if (name !== null && name.trim() !== '') changeName(name.trim());
            }}
        />
    );
};

export default Avatar;

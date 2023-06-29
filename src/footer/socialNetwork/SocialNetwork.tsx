import style from '../socialNetwork/SocialNetwork.module.css'
import React from "react";

type SocialNetworkPropsType = {
    img: string
}
export const SocialNetwork: React.FC<SocialNetworkPropsType> = ({img}) => {
    return (
        <div className={style.socialNetworkBlock}>
            <img src={img} alt="socialNetwork_picture" className={style.img}/>
        </div>
    )
}
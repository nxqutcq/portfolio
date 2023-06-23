import style from './RemoteWork.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const RemoteWork = () => {
    return (
        <div className={styleContainer.container}>
            <div className={style.containerRemote}>
                <h2>Considering remote work options</h2>
                <div>Hire me</div>
            </div>
        </div>
    )
}
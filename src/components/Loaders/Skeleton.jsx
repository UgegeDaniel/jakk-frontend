import { SkeletonElement } from './SkeletonElement'
const Skeleton = ({ theme }) => {
    const themeClass = theme || 'light'
    return (<div className="content">
        <div className="articles">
            <div className={`skeleton-wrapper ${themeClass}`}>
                <div className='skeleton-article'>
                    <SkeletonElement type={'option'} />
                    {[1, 2, 3].map((type, index) => (
                        <SkeletonElement key={index} type={"text"} />
                    ))}
                    {[1, 2, 3, 4].map((type, index) => (
                        <SkeletonElement key={index} type={"title"} />
                    ))}
                    <div className="btnContainer">
                        {[1, 2].map((type, index) => (
                            <SkeletonElement key={index} type={"btn"} />
                        ))}
                    </div>
                </div>
                <div className="shimmer-wrapper">
                    <div className="shimmer"></div>
                </div>
            </div>
        </div>
    </div>)
}

export default Skeleton
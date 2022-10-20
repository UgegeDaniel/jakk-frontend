import { Button } from '@material-ui/core'
import {useState} from 'react'
const Param = ({ items, testParams, setTestParams, className, feild }) => {
    const [clicked, setClicked ] = useState(null)
const onClickHandler = (e, index) => {
        setTestParams({ ...testParams, [feild]: e.target.textContent })
setClicked(index)
    }
    return (
        <ul>
            {items?.length !== 0 && items?.map((item, index) =>
                <Button key={index} value={item} className={className} onClick={(e) => onClickHandler(e, index)} variant= {clicked === index ? 'contained' : 'outlined'} color={index % 2 === 1 ? "primary" : "secondary"} size="small">
                    {item}
                </Button>
            )}
        </ul>
    )
}

export default Param


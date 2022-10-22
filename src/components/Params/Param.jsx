import { Button } from '@material-ui/core'
import { useState } from 'react'
const Param = ({ items, testParams, setTestParams, className, feild }) => {
    const [clicked, setClicked] = useState(null)
    const [yearClicked, setYearClicked] = useState(null)
    const onClickHandler = (e, index) => {
        if (feild === 'subject') {
            setTestParams({ subject: e.target.textContent, year: '', examtype: 'utme' })
            setClicked(index)
            setYearClicked(null)
        } else if (feild === 'year') {
            setYearClicked(index)
            setTestParams({ ...testParams, year: e.target.textContent })
            // testParams.year ? setClicked(index) : setClicked(null)
        }
    }
    return (
        <ul>
            {items?.length !== 0 && items?.map((item, index) =>
                <Button key={index} value={item} className={className} onClick={(e) => onClickHandler(e, index)} variant={(clicked === index || (feild === 'year' && testParams.year && yearClicked === index)) ? 'contained' : 'outlined'} color={index % 2 === 1 ? "primary" : "secondary"} size="small">
                    {item}
                </Button>
            )}
        </ul>
    )
}

export default Param


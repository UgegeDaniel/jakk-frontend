import { Button } from '@material-ui/core'
const Param = ({ items, testParams, setTestParams, className, feild }) => {
    const onClickHandler = (e) => {
        setTestParams({ ...testParams, [feild]: e.target.textContent })
        console.log({ testParams, feild })
    }
    return (
        <ul>
            {items?.length !== 0 && items?.map((item, index) =>
                <Button key={index} value={item} className={className} onClick={onClickHandler} variant='contained' color={index % 2 === 1 ? "primary" : "secondary"} size="small">
                    {item}
                </Button>
            )}
        </ul>
    )
}

export default Param


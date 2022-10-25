import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Option from './Option'

const Options = ({ correct, currentQuestion, handleChoice, attempts, questionIndex }) => {
    const { option } = currentQuestion
    const { a, b, c, d } = option
    const optionProps = { handleChoice, attempts, questionIndex, correct, option }
    const letters = [{ lowerCase: { value: a, option: 'a' }, upperCase: 'A' }, { lowerCase: { value: b, option: 'b' }, upperCase: 'B' }, { lowerCase: { value: c, option: 'c' }, upperCase: 'C' }, { lowerCase: { value: d, option: 'd' }, upperCase: 'D' },]
    return (
        <Grid container spacing={3} justifyContent="center" align="center">
            {letters.map((letter, index) => (
                <Option key={index} value={letter.lowerCase.value} optionName={letter.lowerCase.option} upperCase={letter.upperCase} optionProps={optionProps} option />
            ))}
        </Grid>
    )
}
Options.propTypes = {
    correct: PropTypes.string,
    currentQuestion: PropTypes.object,
    handleChoice: PropTypes.func,
    attempts: PropTypes.array,
    questionIndex: PropTypes.number,
};
export default Options
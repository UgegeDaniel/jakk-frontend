import Option from './Option'
const Options = ({ optionsProps: {correct, option, choiceHandler, attempts, questionIndex } }) => {
    const optionProps = { choiceHandler, attempts, questionIndex, correct, option }
    const { a, b, c, d } = option
    const letters = [{ lowerCase: {value: a, option:'a'}, upperCase: 'A' }, { lowerCase: {value: b,  option:'b'}, upperCase: 'B' }, { lowerCase: {value: c,  option:'c'}, upperCase: 'C' }, { lowerCase: {value: d,  option:'d'}, upperCase: 'D' },]
    
    return (
        <div>
            {letters.map((letter, index) => (
                <Option key={index} value={letter.lowerCase.value} optionName={letter.lowerCase.option}  upperCase={letter.upperCase} optionProps={optionProps} option/>
            ))}
        </div>
    )
}

export default Options
import Row from 'react-bootstrap/Row'
import Question from './Question'

export default function Questions( props )
{
    let language = props.language
    let questions = props.moduleData['questions']
    let register = props.register

    return (
        <Row>
            { questions.map( (q,index) =>
                <Question index={index+1} language={language} question={q} register={register} />
                )
            }
        </Row>
    )
}

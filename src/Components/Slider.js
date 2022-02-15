import RangeSlider from 'react-bootstrap-range-slider'
import { useState } from 'react'

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';


export default function Slider( props )
{
    let min_value = parseInt(props.range.min_value);
    let max_value = parseInt(props.range.max_value);
     
    const [ value, setValue ] = useState( ( max_value + min_value ) /2 )

    let id = props.id
    let name = props.name
    let register = props.register

    return (
        <RangeSlider 
            value={value}
            min={min_value}
            max={max_value}
            {...register(`${id}`, { onChange: (e) => setValue(e.target.value)} )}
        />
    )

}

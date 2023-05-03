import React, { useState } from 'react'
import NumButton from './NumButton'
import SignButton from './SignButton'
// import Display from './Display'

const Calculator = () => {
    const [output, setOutput] = useState(0)


    const handleClick = (event) => {
        // setOutput(event.target.value)
        setOutput(output.concat(event.target.value));

    }

    const handleOnChange = (event) => {
        setOutput(event.target.value);
    }
    const clear = () => {
        setOutput("")
    }




    return (
        <>
            <div className="h-screen flex justify-center items-center ">
                <div className="w-96 h-[32rem] bg-[#655AC8] rounded-2xl pt-10 px-8 py-7">
                    <div className="flex justify-between space-x-2 bg-white">
                        <div className="screen w-3/4 h-7 bg-white flex">
                          <input type="text" className='bg-white text-3xl text-gray-600 w-full h-16' value={output} onChange={handleOnChange}/>
                        </div>
                        <div>
                            <img className='bg-[#655AC8] w-16' src="/bot-unscreen.gif" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-between  bg-[#655AC8] mt-7">
                        <NumButton value='1' onClick={handleClick} sign="1" />
                        <NumButton value='2' onClick={handleClick} sign="2" />
                        <NumButton value='3' onClick={handleClick} sign="3" />
                        <SignButton value='+' onClick={handleClick} sign="+" className="operators" />
                    </div>
                    <div className="flex justify-between  bg-[#655AC8] mt-7">
                        <NumButton value='4' onClick={handleClick} sign="4" />
                        <NumButton value='5' onClick={handleClick} sign="5" />
                        <NumButton value='6' onClick={handleClick} sign="6" />
                        <SignButton value='-' onClick={handleClick} sign="-" className="operators" />
                    </div>
                    <div className="flex justify-between  bg-[#655AC8] mt-7">
                        <NumButton value='7' onClick={handleClick} sign="7" />
                        <NumButton value='8' onClick={handleClick} sign="8" />
                        <NumButton value='9' onClick={handleClick} sign="9" />
                        <SignButton value='*' onClick={handleClick} sign="×" className="operators" />
                    </div>
                    <div className="flex justify-between  bg-[#655AC8] mt-7">
                        <SignButton id='clear' onClick={clear} sign="C" />
                        <NumButton value='0' onClick={handleClick} sign="0" />
                        <SignButton value='.' onClick={handleClick} sign="." />
                        <SignButton value='=' onClick={handleClick} sign="=" className="operators" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator

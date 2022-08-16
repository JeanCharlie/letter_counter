import React, { useRef, useState } from 'react';
import Result from './Result';

function Counter() {

    const [result, setResult] = useState(0);
    const refe1 = useRef(null);
    const refe2 = useRef(null);

    const counter = (e) => {
        e.preventDefault();

        let count = 0;
        let l = document.getElementById('letter').value;
        let txt = document.getElementById('textarea').value;

            for (let i = 0; i < txt.length; i++) {
                if (l[0] === txt[i]) {
                    count += 1;
                }
            }
      
        setResult(count);
    }

    return (

        <>
            <div className='card card-body'>
                <form >
                    <h1 className='text-center'>Letter Counter</h1>

                    <br></br>

                    <div className='form-group'>
                        <textarea ref={refe2} id='textarea' className='h-100 w-100'
                            placeholder='Copy or type your text in here!'
                            autoFocus />
                    </div>

                    <br /> <br />

                    <span id='span'>Type the lyric: </span>
                    <input id='letter' ref={refe1}
                        placeholder=''
                    />
                    <br></br>
                    <br></br>
                    <div className='buttom'>
                        <button className='btn btn-primary' type='submit' onClick={counter}>Convert</button>
                    </div>
                </form>

            </div>
            <Result sending={'Appearances: ' + result} />

        </>
    );
}

export default Counter;
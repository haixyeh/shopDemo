import { Input } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
// 使用Custom hook
// import useMouseY from './util/useMouseY';

const Index = () => {
    const [account, setAccount] = useState('輸入拉');

    /* 使用Custom hook */
    // const mousePosY = useMouseY();
    // 使用Custom hook
    // useEffect(() => {
    //     console.log(mousePosY);
    // }, [mousePosY])

    const ref = useRef('');
    const [refText, setRefText] = useState('')
    useEffect(() => {
        console.log(ref);
        // const { current: { value } } = ref;
        if (!ref.current) {
            ref.current = true;
            console.log(refText, 'ref1');
        } else {
            console.log(refText, 'ref2');
        }
        return () => {
            // cleanup
            
        }
    }, [refText])
    const onChangeInput = () => {
        setRefText(ref.current.value);
    }
    
    return (
        <div>
            <input type="text" ref={ref} onChange={onChangeInput} value={refText}></input>
            <input
                type="text"
                defaultValue={account}
                value={account}
                onChange={(e) => {
                    setAccount(e.target.value)
                }}
            >
            </input>
            <div>目前的Account: {account}</div>
        </div>
    );
}

export default Index;

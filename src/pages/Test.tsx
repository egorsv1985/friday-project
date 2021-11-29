import React from 'react'
import SuperButton from "../components/c2-SuperButton/SuperButton";
import SuperCheckbox from "../components/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../components/c1-SuperInputText/SuperInputText";


function Test() {

    return (
        <div>
            <h1>Test Page</h1>
            <SuperInputText/>
            <SuperButton>Test</SuperButton>
            <SuperCheckbox/>
        </div>
    )
}

export default Test
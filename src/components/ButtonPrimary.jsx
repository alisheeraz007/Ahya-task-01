import React from 'react'

function ButtonPrimary(props) {
    return (
        <button className='bg-[#3a388b] px-[10px] py-[5px] text-[14px] text-[#fff] rounded-[5px] cursor-pointer transition hover:bg-[#39388bcc] flex items-center justify-center outline-0 border-1 border-transparent gap-x-[10px]'>
            {props.icon}
            {props.text}
        </button>
    )
}

export default ButtonPrimary
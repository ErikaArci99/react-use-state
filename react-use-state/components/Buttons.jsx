import React from 'react'
import languages from '../data/languages'
import { useState } from 'react'

const Buttons = () => {
    return (
        <div className='container-buttons d-flex justify-content-center'>
            {languages.map((language) => (
                <button >
                    <h2>{language.title}</h2>
                </button>
            ))}
        </div>
    )
}

export default Buttons
import React, { useState } from 'react'
import languages from '../data/languages'

const Buttons = () => {
    const [openId, setOpenId] = useState(null)
    const selectedLanguage = openId !== null ? languages[openId - 1] : null;

    return (
        <>
            {/* Bottoni */}
            <div className='container-buttons d-flex justify-content-center'>
                {languages.map((language) => (
                    <button key={language.id} onClick={() => setOpenId(language.id)}>
                        <h3>{language.title}</h3>
                    </button>
                ))}
            </div>

            {/*card accordion  */}
            {selectedLanguage && (
                <div className='card'>
                    <h2>{selectedLanguage.title}</h2>
                    <p>{selectedLanguage.description}</p>
                </div>
            )}
        </>
    )
}

export default Buttons


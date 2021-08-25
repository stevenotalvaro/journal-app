import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {startSaveNote, startUpLoading} from '../../actions/notes'

export const NotesAppBar = () => {
    const dispatch = useDispatch()
    const {active} = useSelector(state => state.notes)
    const handleSave = () => {
        dispatch(startSaveNote(active))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click()
    }

    const handleFileChange = e => {
        e.preventDefault()
        const file = e.target.files[0]

        if (file) {
            dispatch(startUpLoading(file))
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>

            <div>
                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{display: 'none'}}
                    onChange={handleFileChange}
                />
                <button onClick={handlePictureClick} className="btn">
                    Picture
                </button>

                <button onClick={handleSave} className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}

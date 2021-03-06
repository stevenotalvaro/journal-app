import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {activeNote, startDeleting} from '../../actions/notes'
import {useForm} from '../../hooks/useForm'
import {NotesAppBar} from './NotesAppBar'

export const NoteScreen = () => {
    const dispatch = useDispatch()
    const {active: note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note)
    const {body, title, url, id} = formValues

    const handleDelete = () => {
        dispatch(startDeleting(id))
    }

    const activeId = useRef(note.id)

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
        }
    }, [reset, note])

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}))
    }, [dispatch, formValues])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {url && (
                    <div className="notes__image">
                        <img src={url} alt="imagen" />
                    </div>
                )}
            </div>
            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>
        </div>
    )
}

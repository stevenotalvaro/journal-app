import Swal from 'sweetalert2'
import {types} from '../components/types/types'
import {db} from '../firebase/firebase-config'
import {fileUpload} from '../helpers/fileUplaod'
import {loadNotes} from '../helpers/loadNotes'

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)

        dispatch(activeNote(doc.id, newNote))
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
})

export const startLoadingNotes = uid => {
    return async dispatch => {
        const notes = await loadNotes(uid)

        dispatch(setNote(notes))
    }
}

export const setNote = notes => ({
    type: types.notesLoad,
    payload: notes,
})

export const startSaveNote = note => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid

        if (!note.url) {
            delete note.url
        }

        const noteToFirestore = {...note}
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
        dispatch(refreshNote(note.id, note))
        Swal.fire('Saved', note.title, 'success')
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note,
    },
})

export const startUpLoading = file => {
    return async (dispatch, getState) => {
        const {active: activeNote} = getState().notes

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
        })

        const fileUrl = await fileUpload(file)
        activeNote.url = fileUrl

        dispatch(startSaveNote(activeNote))

        Swal.close()
    }
}

export const startDeleting = id => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        await db.doc(`${uid}/journal/notes/${id}`).delete()
        dispatch(deleteNote(id))
    }
}

export const deleteNote = id => ({
    type: types.notesDelete,
    payload: id,
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning,
})

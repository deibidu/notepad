import "./App.css";
import { useState } from "react";
import { Note, SaveNote, NoteDeleteModal, NoteEditModal } from "./utils/index";
import { NoteInterface } from "./type";
import { Footer } from "./Components/Footer";
import {
  getNotesFromLocalStorage,
  updateNotesInLocalStorage,
} from "./type/notes";

function App() {
  const [notes, setNotes] = useState<NoteInterface[]>(
    getNotesFromLocalStorage()
  );
  const [noteToDelete, setNoteToDelete] = useState<NoteInterface | null>(null);
  const [noteToEdit, setNoteToEdit] = useState<NoteInterface | null>(null);

  const onNoteDeleteClick = (note: NoteInterface) => {
    setNoteToDelete(note);
  };
  const onNoteEditClick = (note: NoteInterface) => {
    setNoteToEdit(note);
  };

  const onDeleteCloseModal = () => {
    setNoteToDelete(null);
  };

  const onNoteDelete = () => {
    if (!noteToDelete) return;
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter(
        (note) => note.id !== noteToDelete.id
      );
      updateNotesInLocalStorage(updatedNotes);
      return updatedNotes;
    });
    setNoteToDelete(null);
  };

  const onEditModalClose = () => {
    setNoteToEdit(null);
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Notespad.</h1>
        </div>
        <div className="d-flex-wrap">
          <div className="container_saveNote">
            <div>
              <SaveNote setNotes={setNotes} saveCallback={() => {}} />
            </div>
          </div>

          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                message={note.message}
                onDelete={() => onNoteDeleteClick(note)}
                onEdit={() => onNoteEditClick(note)}
              />
            );
          })}
        </div>
        {noteToEdit && (
          <NoteEditModal
            onClose={onEditModalClose}
            note={noteToEdit}
            setNotes={setNotes}
          />
        )}
        {noteToDelete && (
          <NoteDeleteModal
            onClose={onDeleteCloseModal}
            onDelete={onNoteDelete}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

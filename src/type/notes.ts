import { NoteInterface } from ".";

export const getNotesFromLocalStorage = (): NoteInterface[] => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
};

export const saveNoteToLocalStorage = (note: NoteInterface) => {
  const notes = getNotesFromLocalStorage();
  const updatedNotes = [...notes, note];
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

export const updateNotesInLocalStorage = (updatedNotes: NoteInterface[]) => {
  localStorage.setItem("notes", JSON.stringify(updatedNotes));
};

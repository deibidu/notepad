import "./SaveNote.css";
import { Dispatch, SetStateAction, useState, FormEvent } from "react";
import { NoteInterface } from "../type";
import { TextArea } from "./TextArea";
import { saveNoteToLocalStorage } from "../type/notes";

interface Props {
  setNotes: Dispatch<SetStateAction<NoteInterface[]>>;
  saveCallback: () => void;
}

export const SaveNote = ({ setNotes, saveCallback }: Props) => {
  const [message, setMessage] = useState("");

  const onMessageChange = (value: string) => {
    setMessage(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const note: NoteInterface = {
      id: `note-${Date.now()}`,
      message: message.trim(),
    };
    setNotes((prevNotes) => [...prevNotes, note]);
    saveNoteToLocalStorage(note);
    setMessage("");
    saveCallback();
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form d-flex-col">
        <TextArea value={message} onChange={onMessageChange} />
        <button
          type="submit"
          className="button"
          disabled={message.trim() === ""}
        >
          Guardar
        </button>
      </form>
    </>
  );
};

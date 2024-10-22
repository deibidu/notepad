import "./NoteEditModal.css";
import { Dispatch, SetStateAction, useState, FormEvent } from "react";
import { NoteInterface } from "../type";
import { TextArea } from "./TextArea";
import { updateNotesInLocalStorage } from "../type/notes";

interface Props {
  onClose: () => void;
  note: NoteInterface;
  setNotes: Dispatch<SetStateAction<NoteInterface[]>>;
}

export const NoteEditModal = ({ onClose, note, setNotes }: Props) => {
  const [message, setMessage] = useState(note.message);

  const onMessageChange = (value: string) => {
    setMessage(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((n) =>
        n.id === note.id ? { ...n, message: message.trim() } : n
      );
      updateNotesInLocalStorage(updatedNotes);
      return updatedNotes;
    });
    onClose();
  };

  return (
    <>
      <div className="modal ">
        <form onSubmit={onSubmit} className="">
          <div className="modal_card">
            <header>
              <p>Edit note</p>
            </header>
            <section>
              <TextArea value={message} onChange={onMessageChange} />
            </section>

            <footer>
              <button
                className="button-primary-success"
                type="submit"
                disabled={!message.trim()}
              >
                Save changes
              </button>
              <button className="button" type="button" onClick={onClose}>
                Cancel
              </button>
            </footer>
          </div>
        </form>
      </div>
    </>
  );
};

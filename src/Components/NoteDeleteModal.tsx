import "../styles/style.css";
import "./NoteDeleteModal.css";

export interface Props {
  onClose: () => void;
  onDelete: () => void;
}

export const NoteDeleteModal = ({ onClose, onDelete }: Props) => {
  return (
    <>
      <div className="modal">
        <div className="modal_card">
          <section className="d-flex-col">
            <p className="font-bold">Are you sure?</p>
          </section>
          <footer>
            <button
              className="button-primary-danger"
              type="button"
              onClick={onDelete}
            >
              Delete
            </button>
            <button className="button" type="button" onClick={onClose}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
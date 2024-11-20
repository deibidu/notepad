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
            <p className="font-bold">¿Estás segurx?</p>
          </section>
          <footer>
            <button
              className="button-primary-danger"
              type="button"
              onClick={onDelete}
            >
              Eliminar
            </button>
            <button className="button" type="button" onClick={onClose}>
              Cancelar
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

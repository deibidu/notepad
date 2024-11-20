import "./Note.css";
import { IoCloseCircle } from "react-icons/io5";

interface Props {
  message: string;
  onDelete: () => void;
  onEdit: () => void;
}

export const Note = ({ message, onDelete, onEdit }: Props) => {
  return (
    <div>
      <div className="note">
        <button className="button-icon" type="button" onClick={onDelete}>
          <IoCloseCircle />
        </button>
        {message
          .split("\n")
          .map((text, index) =>
            text === "" ? <p key={index}> </p> : <p key={index}> {text} </p>
          )}
      </div>
      <div>
        <button className="button-edit" type="button" onClick={onEdit}>
          Editar
        </button>
      </div>
    </div>
  );
};

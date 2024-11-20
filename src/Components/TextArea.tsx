import "./TextArea.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  limit?: number;
  placeholder?: string;
}

export const TextArea = ({
  value,
  onChange,
  limit = 80,
  placeholder = "Escribe algo aquí...",
}: Props) => {
  return (
    <>
      <textarea
        maxLength={limit}
        className="textarea"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      ></textarea>
      <p className="">Caracteres restantes: {limit - value.length}</p>
    </>
  );
};

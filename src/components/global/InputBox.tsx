// input box for form

type InputBoxProps = {
    value: string;
    setWhenChange: (e: any) => void;
    name: string;
    label: string;
    className?: string;
    inputPrps?: any;
};

const InputBox = ({
    value,
    setWhenChange,
    label,
    name,
    className = "",
    inputPrps = {}
}: InputBoxProps): JSX.Element => {
    return (
        <div className={`input-box ${className}`}>
            <style jsx>{`
        span {
            ${value.trim() === "" ? "" : "transform: translateY(-23px);color:#61E8D3;z-index:1;"}
        }
      `}</style>
            <input
                type="text"
                value={value}
                name={name}
                id=""
                onChange={setWhenChange}
                {...inputPrps}
            />
            <span>{label}</span>
        </div>
    );
};

export default InputBox;

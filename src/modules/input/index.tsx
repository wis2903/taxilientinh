import React, { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onEnter?: () => void;
    label: string;
    containerClassName?: string;
    onTextChange?: (value: string) => void;
    onInputFocus?: () => void;
    onInputBlur?: () => void;
    inputRef?: React.RefObject<HTMLInputElement>;
}

const Input = (props: IInputProps): JSX.Element => {
    const {
        className,
        onEnter,
        onKeyUp,
        onInputFocus,
        onInputBlur,
        containerClassName,
        onTextChange,
        inputRef: inputRefFromProps,
        ...ogInputProps
    } = props;

    const _ref = React.useRef<HTMLInputElement>(null);
    const inputRef = inputRefFromProps || _ref;

    const [isFocusing, setIsFocusing] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string | number>(
        ogInputProps.value ? String(ogInputProps.value) : ''
    );

    const handleKeyUpEvent = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && onEnter) onEnter();
    };

    return (
        <div
            className={`${styles.container} ${containerClassName} ${
                isFocusing || !!value ? styles.focusing : ''
            }`}
        >
            <span className={styles.label} onClick={(): void => inputRef.current?.focus()}>
                {props.label}
            </span>
            <input
                ref={inputRef}
                className={className}
                onKeyUp={handleKeyUpEvent}
                onChange={(e): void => {
                    setValue(e.target.value);
                    if (onTextChange) onTextChange(e.target.value);
                }}
                onFocus={(): void => {
                    setIsFocusing(true);
                    onInputFocus?.();
                }}
                onBlur={(): void => {
                    setIsFocusing(false);
                    if (onInputBlur) onInputBlur();
                }}
                {...{
                    ...ogInputProps,
                    spellCheck: false,
                }}
            />
        </div>
    );
};

export default Input;

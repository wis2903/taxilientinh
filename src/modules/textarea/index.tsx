import React, { TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface IInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    onEnter?: () => void;
    label: string;
    containerClassName?: string;
    onTextChange?: (value: string) => void;
    onInputBlur?: () => void;
    inputRef?: React.RefObject<HTMLTextAreaElement>;
}

const Textarea = (props: IInputProps): JSX.Element => {
    const {
        className,
        onEnter,
        onKeyUp,
        onInputBlur,
        containerClassName,
        onTextChange,
        inputRef: inputRefFromProps,
        ...ogInputProps
    } = props;

    const _ref = React.useRef<HTMLTextAreaElement>(null);
    const inputRef = inputRefFromProps || _ref;

    const [isFocusing, setIsFocusing] = React.useState<boolean>(false);
    const [value, setValue] = React.useState<string | number>(
        ogInputProps.value ? String(ogInputProps.value) : ''
    );

    const handleKeyUpEvent = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
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
            <textarea
                ref={inputRef}
                className={className}
                onKeyUp={handleKeyUpEvent}
                value={value}
                rows={3}
                onChange={(e): void => {
                    setValue(e.target.value);
                    if (onTextChange) onTextChange(e.target.value);
                }}
                onFocus={(): void => {
                    setIsFocusing(true);
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

export default Textarea;

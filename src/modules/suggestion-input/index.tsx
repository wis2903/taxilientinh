import React from 'react';

// styles module
import styles from './styles.module.scss';

// components
import Input from '../input';
import Loader from '../loader';
import Dropdown from '../dropdown';

// interfaces
interface ISuggestionInputProps {
    className?: string,
    label: string,
    getPredictionFunc?: (input: string) => Promise<{ label: string, value: string }[]>,
    onChanged?: (value: string) => void,
    defaultValue?: string,
}

interface ISuggestionState {
    loading?: boolean,
    data: { label: string, value: string }[],
}

const SuggestionInput = ({ className, label, getPredictionFunc, onChanged, defaultValue }: ISuggestionInputProps): JSX.Element => {
    const [typingValue, setTypingValue] = React.useState<string>(defaultValue || '');
    const [suggestion, setSuggetion] = React.useState<ISuggestionState>({
        loading: false,
        data: [],
    });

    const timeoutHandlerRef = React.useRef<ReturnType<typeof setTimeout> | null>();

    const clearTimeoutHandlerIfExisted = (): void => {
        if (timeoutHandlerRef.current) clearTimeout(timeoutHandlerRef.current);
    };

    const handleInputValueChanged = (text: string): void => {
        clearTimeoutHandlerIfExisted();
        setTypingValue(text);
        if (onChanged) onChanged(text);
        setSuggetion({
            ...suggestion,
            loading: true,
        });
        timeoutHandlerRef.current = setTimeout(async () => {
            if (getPredictionFunc) {
                const predictions = await getPredictionFunc(text);
                setSuggetion({
                    loading: false,
                    data: predictions,
                });
            }
        }, 1000);
    };

    const resetSuggestionState = (): void => {
        setSuggetion({
            loading: false,
            data: [],
        });
    };

    React.useEffect(() => {
        return (): void => {
            clearTimeoutHandlerIfExisted();
        };
    }, []);

    return (
        <div className={[styles.container, className].join(' ')}>
            <Input
                containerClassName={styles.input}
                label={label}
                value={typingValue}
                onTextChange={handleInputValueChanged}
                onInputBlur={clearTimeoutHandlerIfExisted}
            />
            {
                suggestion.loading
                && <Loader className={styles.loader} />
            }
            {
                !!suggestion.data.length
                && (
                    <Dropdown
                        className={styles.dropdown}
                        options={suggestion.data}
                        onKeyboardSelect={(option): void => {
                            if (option) setTypingValue(option.label);
                            if (option && onChanged) onChanged(option.label);
                        }}
                        onSelect={(option): void => {
                            setTypingValue(option.label);
                            if (onChanged) onChanged(option.label);
                        }}
                        onUnmounted={resetSuggestionState}
                    />
                )
            }
        </div>
    );
};

export default SuggestionInput;
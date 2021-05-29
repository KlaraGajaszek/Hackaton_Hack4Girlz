import React, { useState } from 'react';
import { Textarea, Picklist, Option } from 'react-rainbow-components';
import styled from 'styled-components';
import { Industries, Specials } from '../constants/user';

const MyOptions = styled(Picklist)`
    margin: 6px 40px;
`;

const MyTextArea = styled(Textarea)`
    margin: 0px 40px 0;
`;

type Props = {
    label: string;
    required?: boolean;
    disabled?: boolean;
    onChange?: (v: any) => void;
    options: { value: string; label: string; disabled?: boolean }[];
};

const SelectList = ({ options, label, required = false, disabled = false, onChange = () => {} }: Props) => {
    const [selected, setSelected] = useState(null);

    const handleChange = value => {
        onChange(value);
        setSelected(value);
    };

    return (
        <MyOptions onChange={handleChange} labelAlignment="left" label={label} value={selected} required={required}>
            {options.map(({ value, label }) => (
                <Option key={value} value={value} label={label} disabled={disabled} />
            ))}
        </MyOptions>
    );
};

const getOptions = (arr: string[]) => arr.map(name => ({ value: name, label: name }));

const UserBioInputs = ({ handleInput }) => {
    const [disabled, setDisabled] = useState(true);

    return (
        <div>
            <MyTextArea
                onChange={e => handleInput({ name: 'description', value: e.target.value })}
                labelAlignment="left"
                label="Opis"
                rows={2}
                placeholder="Dodaj Opis..."
            />
            <SelectList
                label="Branża"
                options={getOptions(Object.values(Industries))}
                required
                onChange={({ value }) => {
                    handleInput({ name: 'industry', value });
                    setDisabled(false);
                }}
            />
            <SelectList
                label="Specjalizacja"
                options={getOptions(Object.values(Specials))}
                disabled={disabled}
                onChange={({ value }) => {
                    handleInput({ name: 'specialization', value });
                }}
            />
        </div>
    );
};

export { UserBioInputs };

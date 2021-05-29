import React, { useState } from 'react';
import { Textarea, Select, Picklist, Option } from 'react-rainbow-components';
import styled from 'styled-components';

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
    onChange?: () => void;
    options: { value: string; label: string; disabled?: boolean }[];
};

const SelectList = ({ options, label, required = false, disabled = false, onChange = () => {} }: Props) => {
    const [selected, setSelected] = useState(null);

    const handleChange = value => {
        onChange();
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

const UserBioInputs = () => {
    const [disabled, setDisabled] = useState(true);

    const industries = [
        { value: 'option 1', label: 'Branża 1' },
        { value: 'option 2', label: 'Branża 2' },
        { value: 'option 3', label: 'Branża 3' }
    ];

    const specials = [
        { value: 'option 1', label: 'specials 1' },
        { value: 'option 2', label: 'specials 2' },
        { value: 'option 3', label: 'specials 3' }
    ];

    return (
        <div>
            <MyTextArea labelAlignment="left" label="Opis" rows={2} placeholder="Dodaj Opis..." />
            <SelectList label="Branża" options={industries} required onChange={() => setDisabled(false)} />
            <SelectList label="Specjalizacja" options={specials} disabled={disabled} />
        </div>
    );
};

export { UserBioInputs };

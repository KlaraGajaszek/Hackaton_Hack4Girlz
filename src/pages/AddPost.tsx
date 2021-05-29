import React, { useState } from 'react';
import { GoBack } from '../components/GoBack';
import { Routes } from '../routing/router';
import { Select, Textarea, Input } from 'react-rainbow-components';
import styled from 'styled-components';
import { GoalButton } from '../components/GoalButton';
import { useHistory } from 'react-router-dom';
import { AttachmentIcon } from '@chakra-ui/icons';

export const AddPost = () => {
    const selectStyles = {
        paddingBottom: 20
    };
    const areaStyles = {
        paddingBottom: 20
    };
    const Attach = styled.p`
        font-size: 16px;
        margin-top: 10px;
        padding: 0 5px;
        display: block;
        color: ${props => props.theme.rainbow.palette.primary.main};
    `;
    const View = styled.div`
        height: 750px;
        padding: 54px;
        background-color: white;
        padding: 20px;
        border-radius: 20px 20px 0px 0px;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    `;
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const [values, setValues] = useState({
        content: '',
        spec: '',
        tags: '',
        industry: '',
        text: ''
    });
    const industries = [
        { value: 'IT', label: 'IT' },
        { value: 'muzyka', label: 'muzyka' },
        { value: 'sport', label: 'sport' }
    ];
    const tags = [
        { value: 'achievements', label: 'achievements' },
        { value: 'problems', label: 'problems' },
        { value: 'education', label: 'education' }
    ];
    const spec = [
        { value: 'spec1', label: 'spec1' },
        { value: 'spec2', label: 'spec2' },
        { value: 'spec3', label: 'spec3' }
    ];
    const history = useHistory();
    const onSave = () => {
        console.log(values);
        history.push(Routes.Home);
    };
    return (
        <Wrapper>
            <GoBack url={Routes.Home} />
            <View>
                <Textarea
                    label="Treść"
                    labelAlignment="left"
                    rows={5}
                    placeholder="Wpisz treść"
                    style={selectStyles}
                    onChange={e => setValues({ ...values, text: e.target.value })}
                />
                <Select
                    label="Tagi"
                    labelAlignment="left"
                    options={tags}
                    name="tags"
                    value={values.tags}
                    style={selectStyles}
                    onChange={e => setValues({ ...values, tags: e.target.value })}
                />
                <Select
                    label="Branża"
                    labelAlignment="left"
                    options={industries}
                    value={values.industry}
                    name="industry"
                    style={selectStyles}
                    onChange={e => setValues({ ...values, industry: e.target.value })}
                />
                <Select
                    label="Specjalizacja"
                    labelAlignment="left"
                    options={spec}
                    value={values.spec}
                    name="spec"
                    style={selectStyles}
                    onChange={e => setValues({ ...values, spec: e.target.value })}
                />
                <div style={{ display: 'flex' }}>
                    <Attach>Załącz pliki</Attach>
                    <AttachmentIcon style={{ color: '#01B6F5', marginTop: '14px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '31px' }}>
                    <GoalButton title="Dalej" onClick={onSave} />
                </div>
            </View>
        </Wrapper>
    );
};

import React, { useRef, useState } from 'react';
import { GoBack } from '../components/GoBack';
import { Routes } from '../routing/router';
import { Select, Textarea, Input } from 'react-rainbow-components';
import styled from 'styled-components';
import { GoalButton } from '../components/GoalButton';
import { useHistory } from 'react-router-dom';
import { AttachmentIcon } from '@chakra-ui/icons';
import { Industries, Specials } from '../constants/user';
import { useAuthContext } from '../contexts/Auth';
import { addPost } from '../db/addPost';

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
        padding: 40px;
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
        spec: Specials.Specials1,
        tags: 'osiągnięcia',
        industry: Industries.Branza1,
        text: ''
    });

    const tags = [
        { value: 'achievements', label: 'osiągnięcia' },
        { value: 'problems', label: 'problemy' },
        { value: 'education', label: 'edukacja' }
    ];

    const {
        user: { uid, displayName, photoURL }
    } = useAuthContext();
    const ref = useRef();
    const getOptions = (arr: string[]) => arr.map(name => ({ value: name, label: name }));

    const history = useHistory();

    const onSave = async () => {
        const isSuccess = await addPost(
            { uid, displayName, photoURL },
            { ...values, text: ref?.current?.fieldRef?.current?.textareaRef?.current?.value }
        );
        if (isSuccess) history.push(Routes.Home);
    };
    return (
        <Wrapper>
            <GoBack url={Routes.Home} />
            <View>
                <Textarea
                    ref={ref}
                    label="Treść"
                    labelAlignment="left"
                    rows={5}
                    placeholder="Wpisz treść"
                    style={selectStyles}
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
                    options={getOptions(Object.values(Industries))}
                    value={values.industry}
                    name="industry"
                    style={selectStyles}
                    onChange={e => setValues({ ...values, industry: e.target.value })}
                />
                <Select
                    label="Specjalizacja"
                    labelAlignment="left"
                    options={getOptions(Object.values(Specials))}
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

import React, { useState, useContext, createContext } from 'react';

export const OnboardingContext = createContext<any>(null);

export const OnboardingProvider = props => {
    const [onboard, setOnboard] = React.useState('');
    const value = [onboard, setOnboard];

    return <OnboardingContext.Provider value={value} {...props} />;
};

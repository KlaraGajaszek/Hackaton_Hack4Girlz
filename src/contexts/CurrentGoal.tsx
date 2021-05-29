import React, { useState, useContext, createContext } from 'react';

const CurrentGoalContext = createContext<any>(null);

const GoalContextProvider = ({ children }) => {
    const [currentGoal, setCurrentGoal] = useState({
        userId: '',
        objective: '',
        starttime: '',
        endtime: '',
        isTime: false,
        prize: '',
        industry: '',
        subtasks: []
    });
    const setGoal = data => setCurrentGoal(data);

    return <CurrentGoalContext.Provider value={{ currentGoal, setGoal }}>{children}</CurrentGoalContext.Provider>;
};
const useCurrentGoalContext = () => {
    const goalContext = useContext(CurrentGoalContext);
    return goalContext;
};

export { CurrentGoalContext, GoalContextProvider, useCurrentGoalContext };

import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para validação
import { LightTheme, DarkTheme } from './Themes';
import { MuiThemeProvider } from '@material-ui/core/styles';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const getInitialMode = () => {
        if (typeof localStorage === 'undefined') return true;
        const isReturningUser = 'dark' in localStorage;
        const savedMode = JSON.parse(localStorage.getItem('dark'));
        const userPrefersDark = getPrefColorScheme();
        if (isReturningUser) {
            return savedMode;
        }
        return !!userPrefersDark;
    };

    const getPrefColorScheme = () => {
        if (!window.matchMedia) return;

        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [theme, setTheme] = useState(getInitialMode() ? 'dark' : 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('dark', JSON.stringify(theme === 'dark'));
        }
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            <MuiThemeProvider
                theme={theme === 'light' ? LightTheme : DarkTheme}
            >
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

// Validação de props para o ThemeProvider
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;


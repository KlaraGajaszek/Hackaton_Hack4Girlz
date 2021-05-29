import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        rainbow: {
            palette: {
                primary: {
                    main: string;
                    light: string;
                    dark: string;
                };
                secondary: {
                    main: string;
                    light: string;
                    dark: string;
                };
                text: {
                    primary: string;
                    secondary: string;
                    gray: string;
                    lightGray: string;
                };
                background: {
                    grey: string;
                    white: string;
                };

                secondary: string;
                success: string;
                error: string;
                warning: string;
                brand: string;
            };
        };
    }
}

import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        rainbow: {
            palette: {
                success: string;
                error: string;
                warning: string;
                brand: string;
                mainBackground: string;
                black: string;
            };
        };
    }
}

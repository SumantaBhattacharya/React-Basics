import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
}); // previously we didnt provide any value in here

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext); // useContext hook is used to access the context value in a function component. It returns the current context value if the context has been provided in the tree above. If the context has not been provided, it will throw an error.
}

// export const useTheme = () => useContext(ThemeContext); // this will give us access to the themeContext in any component. It will return the current context value or throw an error if the context has not been provided in the tree above.
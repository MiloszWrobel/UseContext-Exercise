import { UseThemeContext } from "./ThemeContextProvider";

export default function Header() {
  const theme = UseThemeContext();
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={() => theme.switchTheme()}>Toggle Theme</button>
    </header>
  );
}

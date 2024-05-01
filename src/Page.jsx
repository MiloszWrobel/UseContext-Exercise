import Header from "./Header";
import { UseThemeContext } from "./ThemeContextProvider";

export default function Page() {
  const theme = UseThemeContext();
  return (
    <div id="app" className={theme.theme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}

import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Nav from "./components/nav";
import Heading from "./components/heading";
import Footer from "./components/footer";
import Card from "./components/card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
    <Nav />
    <Heading />
    <Card name="Anisha Mukharjee" myArr={["Staff Engineer, Algolia", "Software Engineer, Moroco", "HR, Kolkata"]} image="https://images.pexels.com/photos/28209510/pexels-photo-28209510/free-photo-of-a-woman-in-a-black-dress-sitting-on-a-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    <Card name="Sridevi Singh" myArr={["Staff Engineer, Algolia", "Software Engineer, Moroco", "HR, Kolkata"]} image="https://images.pexels.com/photos/21908425/pexels-photo-21908425/free-photo-of-model-standing-with-book-by-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    <Footer />
    </div>

  );
}

export default App;
/*
  <ul>
    {myArr.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
*/
/*

{
    "liveServer.settings.donotShowInfoMsg": true,
    "files.autoSaveDelay": 500,
    "tabnine.experimentalAutoImports": true,
    "vscode-edge-devtools.webhint": false,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[css]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "workbench.editorAssociations": {
        "*.webm": "vscode.videoPreview"
    },
    "git-autoconfig.configList": [
        {
            "user.email": "sumanta2004@gmail.com",
            "user.name": "SumantaBhattacharya"
        }
    ],
    "window.zoomLevel": 2,
    "git.autofetch": true,
    "redhat.telemetry.enabled": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
    },
    "workbench.colorTheme": "Dark Chai",
    "chatgpt.lang": "en",
    "editor.minimap.showSlider": "always",
    "git.confirmSync": false,
    "files.autoSave": "afterDelay",
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
*/

/*
{
    "liveServer.settings.donotShowInfoMsg": true,
    "files.autoSaveDelay": 500,
    "tabnine.experimentalAutoImports": true,
    "vscode-edge-devtools.webhint": false,
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "[css]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "workbench.editorAssociations": {
        "*.webm": "vscode.videoPreview"
    },
    "git-autoconfig.configList": [
        {
            "user.email": "sumanta2004@gmail.com",
            "user.name": "SumantaBhattacharya"
        }
    ],
    "window.zoomLevel": 2,
    "git.autofetch": true,
    "redhat.telemetry.enabled": true,
    "diffEditor.ignoreTrimWhitespace": false,
    "workbench.colorTheme": "Dark Chai",
    "chatgpt.lang": "en",
    "editor.minimap.showSlider": "always",
    "git.confirmSync": false,
    "files.autoSave": "afterDelay",
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
*/

/*"emmet.includeLanguages": { "javascript": "javascriptreact" }

Effect: Extends Emmet support to JavaScript React files. This is useful if you want to use Emmet abbreviations in JSX code.
*/

/*each of them has specific effects that will modify your development environment. Here's a breakdown:

1. **"liveServer.settings.donotShowInfoMsg": true**  
   - **Effect**: Suppresses informational pop-ups from the Live Server extension, reducing distraction.

2. **"files.autoSaveDelay": 500**  
   - **Effect**: Automatically saves files after 500 milliseconds (0.5 seconds) of inactivity. This can be helpful to prevent data loss but might feel too quick if you want more time between typing and saving.

3. **"tabnine.experimentalAutoImports": true**  
   - **Effect**: Enables Tabnine's experimental feature to automatically import dependencies. It could make coding smoother by automatically handling imports, but being experimental, it may sometimes have unexpected behavior.

4. **"vscode-edge-devtools.webhint": false**  
   - **Effect**: Disables WebHint in Edge DevTools, reducing potential debugging messages. It's useful if you don't want extra hints during development.

5. **"[html]" and "[css]" sections**  
   - **Effect**: These sections define the default formatters for HTML and CSS, specifying that VS Code's built-in HTML and CSS language features will be used for formatting. This keeps your code formatted consistently.

6. **"workbench.editorAssociations": { "*.webm": "vscode.videoPreview" }**  
   - **Effect**: Associates `.webm` files with the VS Code video preview tool, allowing you to easily preview video files in the editor.

7. **"git-autoconfig.configList"**  
   - **Effect**: Sets your Git configuration with your email and name ("SumantaBhattacharya"). This ensures that commits made through VS Code will use this identity.

8. **"window.zoomLevel": 2**  
   - **Effect**: Increases the zoom level of the VS Code window. This makes the interface elements larger, which can improve readability.

9. **"git.autofetch": true**  
   - **Effect**: Automatically fetches changes from remote Git repositories. This keeps your local Git repository up-to-date without manually fetching.

10. **"redhat.telemetry.enabled": true**  
    - **Effect**: Enables telemetry for RedHat extensions, allowing data collection to improve the tools you use.

11. **"diffEditor.ignoreTrimWhitespace": false**  
    - **Effect**: Makes the diff editor not ignore whitespace when comparing files. This can make the differences more precise but could clutter the diff if there are many insignificant whitespace changes.

12. **"emmet.includeLanguages": { "javascript": "javascriptreact" }**  
    - **Effect**: Extends Emmet support to JavaScript React files. This is useful if you want to use Emmet abbreviations in JSX code.

13. **"workbench.colorTheme": "Dark Chai"**  
    - **Effect**: Sets the VS Code theme to "Dark Chai," a specific color scheme that you may find visually appealing.

14. **"chatgpt.lang": "en"**  
    - **Effect**: Sets the language for the ChatGPT extension to English.

15. **"editor.minimap.showSlider": "always"**  
    - **Effect**: Ensures that the slider in the minimap (the small overview of the code on the right) is always visible, allowing you to scroll more easily.

16. **"git.confirmSync": false**  
    - **Effect**: Disables confirmation prompts when syncing changes with a Git repository. This makes syncing faster but removes the safeguard of confirming sync actions.

17. **"files.autoSave": "afterDelay"**  
    - **Effect**: Automatically saves files after a short delay, which reduces the risk of losing unsaved work but may take control away from manual saving.

18. **"[javascriptreact]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }**  
    - **Effect**: Sets Prettier as the default formatter for JSX (React) files. This ensures consistent code formatting for your React code.

### Summary
These settings mostly improve convenience, automation, and consistency in formatting and Git usage. They reduce distractions (like prompts), make saving files automatic, and handle tasks like fetching Git changes and formatting automatically. You shouldn’t encounter issues with these settings unless you prefer more manual control over saving and syncing.
 */

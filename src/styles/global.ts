import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

:root {
    --blueB: #5429CC;
    --blue-light: #6F28DD;
    --green: #33CC95;
    --red: #E62E4D;

    --shape: #FFFFFF;
    --background: #F0F2F5;

    --text-color: #969CB3;
    --title-colors: #363F5F;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

}

body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
}
h1,h2,h3,h4,h5,h6,strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`
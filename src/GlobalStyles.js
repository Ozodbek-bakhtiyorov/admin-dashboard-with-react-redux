 import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

:root {
    --main-bg: #ffffff;
    --second-bg: #fafafb;
    --txt-color: #455560;
    --txt-white: #fff;
    --main-color: #349eff;
    --second-color: #62b4ff;
    --box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    --main-bg-light: #ffffff;
    --second-bg-light: #fafafb;
    --txt-color-light: #455560;
    --box-shadow-light: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    --main-bg-dark: #2d2d2d;
    --second-bg-dark: #202020;
    --txt-color-dark: #bbbbbb;
    --box-shadow-dark: rgba(0, 0, 0, 0.2) 0px 5px 10px;

    --main-color-blue: #349eff;
    --second-color-blue: #62b4ff;

    --main-color-red: #fb0b12;
    --second-color-red: #ff4a6b;

    --main-color-cyan: #10d4d2;
    --second-color-cyan: #2ae9e6;

    --main-color-green: #019707;
    --second-color-green: #4caf50;

    --main-color-orange: #d68102;
    --second-color-orange: #fca11a;

    --sidebar-width: 300px;
    --border-radius: 15px;
    --topnav-height: 110px;
    --transition-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 0.7px;
}

a {
    text-decoration: none;
    color: unset;
}

a:hover {
    color: var(--main-color);
}

button {
    cursor: pointer;
    border: 0;
    outline: 0;
    color: var(--txt-color);
}

ul {
    list-style-type: none;
}

input {
    border: 2px solid transparent;
    outline: 0;
}

input:focus {
    border: 2px solid var(--main-color);
}

.page-header {
    margin-bottom: 40px;
    text-transform: capitalize;
    color:var(--txt-color)
}

.card {
    width: 100%;
    padding: 30px;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
}

.full-height {
    height: 100%;
}

.card.full-height {
    height: calc(100% - 30px);
}

.card__header {
    text-transform: capitalize;
    color:var(--txt-color)
}

.card > div ~ div {
    margin-top: 30px;
}

.card__footer {
    text-align: center;
    color:var(--txt-color);
    text-transform: capitalize;
}

.light-background {
    background-color: var(--main-bg-light);
    color: #000;
}

.dark-background {
    background-color: var(--main-bg-dark);
    color: #fff;
}

.blue-color {
    background-color: var(--main-color-blue);
    color: #fff;
}

.red-color {
    background-color: var(--main-color-red);
    color: #fff;
}

.cyan-color {
    background-color: var(--main-color-cyan);
    color: #fff;
}

.green-color {
    background-color: var(--main-color-green);
    color: #fff;
}

.orange-color {
    background-color: var(--main-color-orange);
    color: #fff;
}

`
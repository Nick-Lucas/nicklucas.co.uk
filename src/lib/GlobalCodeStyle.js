import { css } from 'styled-components'
import { COLORS, THEME } from './styles'

// Adapted from
// https://github.com/PrismJS/prism-themes/blob/master/themes/prism-xonokai.css
const MonokaiTheme = css`
  code[class*='language-'],
  pre[class*='language-'] {
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: normal;
    font-family: Menlo, Monaco, 'Courier New', monospace;
    font-size: 14px;
    color: ${THEME.FONT};
    text-shadow: none;
  }
  pre[class*='language-'],
  :not(pre) > code[class*='language-'] {
    background: ${THEME.BACKGROUND_CODE};
  }
  pre[class*='language-'] {
    padding: 15px;
    border-radius: 4px;
    border: 1px solid ${COLORS.OFF_WHITE};
    overflow: auto;
  }

  pre[class*='language-'] {
    position: relative;
  }
  pre[class*='language-'] code {
    white-space: pre;
    display: block;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1rem 0.3rem;
    border-radius: 0.3em;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${COLORS.GREY};
  }
  .token.operator {
    color: ${THEME.FONT};
  }
  .token.boolean,
  .token.number {
    color: ${COLORS.PURPLE};
  }
  .token.attr-name,
  .token.string {
    color: ${COLORS.YELLOW};
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: ${COLORS.YELLOW};
  }
  .token.selector,
  .token.inserted {
    color: ${COLORS.GREEN};
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword,
  .token.important,
  .token.deleted {
    color: ${COLORS.RED_DARK};
  }
  .token.regex,
  .token.statement {
    color: ${COLORS.BLUE};
  }
  .token.placeholder,
  .token.variable {
    color: ${THEME.FONT};
  }
  .token.important,
  .token.statement,
  .token.bold {
    font-weight: bold;
  }
  .token.punctuation {
    color: ${COLORS.GREY};
  }
  .token.entity {
    cursor: help;
  }
  .token.italic {
    font-style: italic;
  }

  code.language-markup {
    color: ${COLORS.OFF_WHITE};
  }
  code.language-markup .token.tag {
    color: ${COLORS.RED_DARK};
  }
  .token.tag {
    color: ${COLORS.RED_DARK};
  }
  code.language-markup .token.attr-name {
    color: ${COLORS.GREEN};
  }
  code.language-markup .token.attr-value {
    color: ${COLORS.YELLOW};
  }
  code.language-markup .token.style,
  code.language-markup .token.script {
    color: ${COLORS.BLUE};
  }
  code.language-markup .token.script .token.keyword {
    color: ${COLORS.BLUE};
  }

  /* Line highlight plugin */
  pre[class*='language-'][data-line] {
    position: relative;
    padding: 1em 0 1em 3em;
  }
  pre[data-line] .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: 0;
    margin-top: 1em;
    background: rgba(255, 255, 255, 0.08);
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }
  pre[data-line] .line-highlight:before,
  pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-start);
    position: absolute;
    top: 0.4em;
    left: 0.6em;
    min-width: 1em;
    padding: 0.2em 0.5em;
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
    font: bold 65%/1 sans-serif;
    height: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: 999px;
    text-shadow: none;
    box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
  }
  pre[data-line] .line-highlight[data-end]:after {
    content: attr(data-end);
    top: auto;
    bottom: 0.4em;
  }
`

// Adapted from
// prismjs/plugins/line-numbers/prism-line-numbers.css
const PrismLineNumbersStyle = css`
  pre[class*='language-'].line-numbers {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;

    counter-reset: linenumber;
  }

  pre[class*='language-'].line-numbers > code {
    flex: 1 0 auto;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    pointer-events: none;
    font-size: 100%;

    /* width: 3em; works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid ${COLORS.PALE_WHITE};

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    padding: 0;
    margin-right: 0.5em;
  }

  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;

    flex: 0;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: ${COLORS.GREY};
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }

  .gatsby-highlight {
    border-radius: 0.3em;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'].line-numbers {
    padding: 1em;
    overflow: initial;
    min-width: max-content;
  }
`

export const GlobalCodeStyle = css`
  ${MonokaiTheme}
  ${PrismLineNumbersStyle}
`

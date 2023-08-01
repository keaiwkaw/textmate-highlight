import { convertTheme, convertThemeFromDir } from 'monaco-vscode-textmate-theme-converter'; 

const theme  = {}
convertTheme(theme);

convertThemeFromDir( './my-vscode-themes-collection-dir/in', './my-vscode-themes-collection-dir/out');
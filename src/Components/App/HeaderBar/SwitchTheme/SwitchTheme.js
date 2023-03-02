
const lightTheme = [
    '--body-bg-color: #FAFAFA',
    '--header-bar-bg-color: white',
    '--text-color: #111517',
    '--search-bar-bg-color: white',
    '--search-bar-icon-color: #848484',
    '--search-bar-placeholder-color: #848484',
    '--filter-box-bg-color: white',
    '--filter-popup-options-bg-color: white',
    '--filter-option-hover-color: rgba(0, 0, 0, 0.0532439)',
    '--country-box-bg-color: white',
    '--border-country-bg-color: white',
    '--go-back-bg-color: white'
]

const darkTheme = [
    '--body-bg-color: #202C36',
    '--header-bar-bg-color: #2B3844',
    '--text-color: white',
    '--search-bar-bg-color: #2B3844',
    '--search-bar-icon-color: white',
    '--search-bar-placeholder-color: white',
    '--filter-box-bg-color: #2B3844',
    '--filter-popup-options-bg-color: #2B3844',
    '--filter-option-hover-color: rgba(0, 0, 0, 0.0532439)',
    '--country-box-bg-color: #2B3844',
    '--border-country-bg-color: #2B3844',
    '--go-back-bg-color: #2B3844'
]



export default function SwitchTheme(change) {
    const root = document.getElementsByTagName('html')[0];
    let theme;

    if(change)
        theme = darkTheme;
    else 
        theme = lightTheme;

    root.style.cssText += theme.join(';')
}

const themeButtons = document.getElementsByClassName("theme-btn");

// Attach event listeners to each theme button
for (let i = 0; i < themeButtons.length; i++) {
    themeButtons[i].addEventListener('click', function(e){ 
        e.preventDefault(); 
        console.log(this)   
        let mode = this.dataset.mode;
        console.log('option selected: ', mode); 
        setTheme(mode);   
       
    });
}

// select theme based on theme button clicked //

const setTheme = (mode) => {
    if (mode == 'default') {
        document.getElementById('theme-style').href='../styling/themes/default.css';
     } 
    else if (mode == 'red') {
        document.getElementById('theme-style').href='../styling/themes/red.css'
    }
    else if (mode == 'green') {
        document.getElementById('theme-style').href='../styling/themes/green.css'
    }
    else if (mode == 'blue') {
        document.getElementById('theme-style').href='../styling/themes/blue.css'
    }
    else if (mode == 'purple') {
        document.getElementById('theme-style').href='../styling/themes/purple.css'
    }
    localStorage.setItem('theme', mode);
   
};

// setup local storage //

let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme)
}

window.onload = function() {
  document.querySelectorAll("[class*='toggleButton']").forEach(item => 
    item.addEventListener("click", applyStyles)
  )
  
  function applyStyles() {
    setTimeout(() => {
      const theme = document.documentElement.dataset.theme;
      console.log(theme)
      if (theme === 'dark') {
        document.getElementById("prime-theme").setAttribute("href", '/css/theme-dark.css');
      }
      if (theme === 'light') {
        document.getElementById("prime-theme").setAttribute("href", '/css/theme-light.css');    
      }  
    })
  }

  applyStyles();  
}
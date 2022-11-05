<script>
    function darkMode() {
      var element = document.body;
      var content = document.getElementById("DarkModetext");
      element.className = "dark-mode";
      content.innerText = "Dark Mode is ON";
    }
    function lightMode() {
      var element = document.body;
      var content = document.getElementById("DarkModetext");
      element.className = "light-mode";
      content.innerText = "Dark Mode is OFF";
    }
  </script>



  <h3 id="DarkModetext">Dark Mode is OFF</h3>
    <button onclick="darkMode()">Darkmode</button>
    <button onclick="lightMode()">LightMode</button>

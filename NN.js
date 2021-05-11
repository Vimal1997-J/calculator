
    function clearscreen() {
        document.getElementById("result").value="";
    }
    function livescreen(value) {
        document.getElementById("result").value += value;
    }
    function switchtheme(){
        let darkmode = document .getElementById("dark-mode");
        let theme = document . getElementById("theme");
        if (theme.getAttribute("href") == "L.css"){
            theme.href = "lIGHT MODE";
            darkmode.innerhtml="light mode"
        } else {
            theme.href ="D.css";
            darkmode.innerHTML = "darkmode"
        }
    }
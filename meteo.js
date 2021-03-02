
function askWeather() {

  
    var request = new XMLHttpRequest();
     request.onreadystatechange = function() {
       if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
           var response = JSON.parse(this.responseText);
         console.log(response.current_condition.tmp);
         
    document.getElementById('weather-result').innerHTML = response.current_condition.tmp;
    
    for ( var i=0; i<=23; i++) {
        newTR = document.createElement("tr");
        newTdh = document.createElement("td");
        newTd = document.createElement("td");
        newTdh.innerHTML =i+"H00"
        newTd.setAttribute("id", "tmp"+i);
        newTd.innerHTML = response['fcst_day_0']['hourly_data'][i+'H00']['TMP2m']
       newTR.appendChild(newTdh);
       newTR.appendChild(newTd);
       document.querySelector("tbody").appendChild(newTR);
    
    
    }
       }
     }; 
     
    request.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
    request.send();
    
     
    }
    
    var btn = document.getElementById('ask-weather');
    btn.addEventListener("click", askWeather);
    
    
    
    
var theam = "light";

function onLoad() {
    $.ajax({
      type: 'GET',
      url: '/table',
      dataType: 'json',
      success: function(data) {
        var table = $('#pg_table');
        $.each(data.results, function(index, row) {
          table.append(
            $('<tr>').append(
              $('<td>').text(row.id),
              $('<td>').text(row.task),
              $('<td>').text(row.status)
            )
          );
        });
      }
    });
  }
  

  
 

  
  function toggleDarkMode() {
    const body = document.body;
    const theam_but = document.getElementById("theme-btn")
    const theam_but_text = document.getElementById("theam_but_text");
    const theam_but_image = document.getElementById("theme-btn-img");
    console.log(theam_but_image);
    if(theam == "light"){
      body.classList.toggle("dark_mode");
      theam_but_text.innerHTML = "Dark";
      theam_but_image.src = "./images/moon.svg"
      theam = "dark";
    }
    else if(theam == "dark"){
      body.classList.toggle("dark_mode");
      theam_but_text.innerHTML = "Light";
      theam_but_image.src = "./images/light.svg"
      theam = "light";
    }
    console.log(theam)
  }
  
  
  function updateDatabase() {
    
  }
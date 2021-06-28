let url = '../data/english.json';
    let city_data = {};
    
    render_data(url);
    function updateCityData(){
      let city = document.getElementById('city').value;
      document.getElementById('c_aqi').innerText = city_data.city[city].aqi;
      document.getElementById('c_cigg').innerText = city_data.city[city].cigg;
    }
    function change_language(lang){
      let url = '../data/english.json';
      if(lang != 'english'){
        url = '../data/hindi.json';
      }
      render_data(url);
    }
    function render_data(url){
      fetch(url)
      .then(response => response.json())
      .then((data) => {
          var stringified = JSON.stringify(data);
          var parsedObj = JSON.parse(stringified);
          city_data = parsedObj;
          appendData(parsedObj);
      })
    }
    function appendData(data) {
      cities = document.getElementById('city');
      cities.innerHTML = '';
      data.city.forEach((obj, index) => {
        option = document.createElement("option");
        option.text = obj.name;
        option.value = index;
        cities.append(option);
      });
   
      var mainContainer = document.getElementById("left");
          
      var img = document.getElementById("main-image");        // Adding image.
      img.src = city_data['image']; 

      var imgcaption = document.getElementById("caption");    // Adding image caption.
      imgcaption.innerText = city_data['title'];

      var imgtitle = document.getElementById("title");    // Adding image title.
      imgtitle.innerText = city_data['p_1_value'];
      
      var imgtags = document.getElementById("tag");    // Adding image tags with link.
      imgtags.innerText = city_data['article']['byline'] + ' | ' + city_data['article']['date'] + ' | ' + city_data['article']['category'];
      imgtags.href = city_data['article']['url'];

      // Adding Description
      var para1 = document.getElementById("para_1");    
      para1.innerText = city_data['p_2_value'];

      var para2 = document.getElementById("para_2");    
      para2.innerText = city_data['p_3_value'];

      var para3 = document.getElementById("para_3");    
      para3.innerText = city_data['p_4_value'];

      var para4 = document.getElementById("para_4");    
      para4.innerText = city_data['p_5_value'];

      var method = document.getElementById("method");   
      method.innerText = city_data['method'];
      
      // Select your city using dropdown
      var selectCity = document.getElementById("select_city");    
      selectCity.innerText = city_data['city_select'];

      // Adding Methodology for Calculation.
      var para6 = document.getElementById("para_6");    
      para6.innerText = city_data['p_6_value'];

      var para7 = document.getElementById("para_7");    
      para7.innerText = city_data['p_7_value'];

      var para8 = document.getElementById("para_8");    
      para8.innerText = city_data['p_8_value'];

      var para9 = document.getElementById("para_9");    
      para9.innerText = city_data['p_9_value'];

      var para10 = document.getElementById("para_10");    
      para10.innerText = city_data['p_10_value'];

    }
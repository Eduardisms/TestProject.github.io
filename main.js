let x = "";
//console.log(x);

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText));
        }
        else {
          error(xhr);
        }
      }
    };
    xhr.open('GET', path, true);
    xhr.send();
  }
  

  let userNameDisplay = "";
  let testLang = "";
  let userNameDisplayUserName = "";
  let testLangUserName = "";
  let testLangzipCode = "";

  function myData(Data) {

    console.log(Data);
    for (var i=0; i < Data.length; i=i+1) {
        //console.log(Data[i].id);
        testLang = Data[i].id;
             
        if (testLang == x) {
            userNameDisplay = Data[i].username;
            console.log(userNameDisplay);
            document.getElementById("UserName").innerHTML = userNameDisplay;
        }

    }

    for (var n=0; n < Data.length; n++) {
        //console.log(Data[n]);
        //console.log(Data[n].username);
        console.log(Data[n].address.zipcode);
        testLangUserName = Data[n].username;
        testLangzipCode = Data[n].address.zipcode;

        let result = testLangzipCode.startsWith("5");
        console.log(result);

        for (z=0; z < Data.length; z++) {
            if (result == true) {
                
                console.log(testLangUserName);                

            }
        } 
        

        
    }
    

    
  }

  function myFunction() {
    x = Math.floor(Math.random() * 10) + 1;
    console.log(x);
    loadJSON("https://jsonplaceholder.typicode.com/users", myData,'jsonp');
  }


  

  const postContainer = document.querySelector('.card-container');

  var firstEightElements = dataArray.slice(0, 8);
  console.log(firstEightElements)

  const postMethods = ()=> {
    firstEightElements.map((postData)=> {
        //console.log(postData)

        const postElement = document.createElement('div');
        postElement.classList.add('card'); 
        
        postElement.innerHTML = `
        <img class="thumbnailImage" id="thumbnailImage" src="${postData.thumbnailUrl}"> 
        <h3 class="card-title">${postData.title}</h3>
        <p class="card-body">${postData.body}</p>
        <button class="btn-card">More Info</button>
        `
        postContainer.appendChild(postElement)
    })

  }

  postMethods()






  



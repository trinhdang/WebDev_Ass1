//Function for loading RSS
function loadRSS(){
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var url = 'https://www.nasa.gov/rss/dyn/educationnews.rss';

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", proxy + url, true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            processRSS(this);
        }else if(this.readyState == 2 && this.status == 400){
            alert("Server Not found");
        }
    };
}

//Function for filtering RSS and displaying on website
function processRSS(rss){
    const items = rss.responseXML.getElementsByTagName("item");

    var itemInfo, row, cell;
    var section = document.getElementById("rssDisplay");
    
    var inSection; 
    for(var i=0; i < items.length; i++){
        var title, description, link, uploadDate;
        itemInfo = items[i].children;
        for(var j=0; j < itemInfo.length; j++){
            //Filtering RSS for title
            if(itemInfo[j].tagName == "title"){
                title = itemInfo[j].innerHTML;
                //Filtering RSS for description
            }else if(itemInfo[j].tagName == "description"){
                description = itemInfo[j].innerHTML;
                //Filtering RSS for link
            }else if(itemInfo[j].tagName == "link"){
                link = itemInfo[j].innerHTML;
                //Filtering RSS for Upload Date
            }else if(itemInfo[j].tagName == "pubDate"){
                uploadDate = itemInfo[j].innerHTML;
            }
        }
        var div = document.createElement("div");
        div.className = "box";
        
       // alert("all good");
        div.innerHTML = `<h2>` + title + `</h2><p>` + description + `</p><a href="` + link + `">` + link + `</a>` + `<p>` + uploadDate +`</p>`;
        section.appendChild(div);
    }
}


loadRSS();
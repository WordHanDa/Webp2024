const url = `https://script.google.com/macros/s/AKfycbw5PnzwybI_VoZaHz65TpA5DYuLkxIF-HUGjJ6jRTOje0E6bVo/exec?name=${name}&age=${age}`
fetch(url,{method:'GET'})
.then(res=>{
    return res.text();
}).then(result=>{
    document.getElementById('h1').innerText=result;
})
function getimg() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', dataUrl, true);
    xhr.send();
    xhr.onload=function() {
        if (xhr.status===200) {
            var data=JSON.parse(this.responseText);
            add_new_img(data);
        }
    };
}

function add_new_img(dataset){
    var gal = document.getElementById("gallery");
    dataset.forEach(function(item) {
        var img = document.createElement("img");
        img.setAttribute("src", item.urls.small);
        gal.appendChild(img);
    });
}

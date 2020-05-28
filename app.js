
function converter(event) {
  try {
    var key = event.which || event.keyCode;
    if(key > =65 && key <= 122){
      var cValue = document.getElementById("cValue");
      var filtered = data.filter(function(item){
        return item.en === cValue.value
      });
      if(filtered.length > 0) {
        document.getElementById("demo").innerHTML = "The MM  value is: " + filtered[0].mm;
      }
    }
  } catch (e) {
     alert(e.message);
  }
}

windiw.addEventListener('load', () => {
    let input = document.querySelector('textarea')
    input.addEventListener('keyup', converter)
})


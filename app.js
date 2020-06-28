const app = window.app = new Object({
    events: {
        keypress(event) {
            let e = (event || window.event);
            let k = e.key.trim();
            if (k) {
                return;
            }
            return alert(k);
        },
        get input() {
            return (el || window.el).input;
        },
        get output() {
            return (el || window.el).output;
        }
    },
    get event() {
        return this.events;
    }
});

;(function(w) {
  if (! "el" in w) {
    document.write("<li class=\"alert danger\">Input/Output Elements not found</li>");
  }

  el.input.addEventListener('keypress', app.event.keypress);
})(window);

if(key > =65 && key <= 122){
  var cValue = document.getElementById("cValue");
  var filtered = data.filter(function(item){
    return item.en === cValue.value
  });
  if(filtered.length > 0) {
  document.getElementById("demo").innerHTML = "The MM  value is: " + filtered[0].mm;
  }

windiw.addEventListener('load', () => {
    let input = document.querySelector('textarea')
    input.addEventListener('keyup', converter)
})



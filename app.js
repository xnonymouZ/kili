const CHAR_WHITESPACE = " ";

const app = {
    output: "",

    convert() {
       this.ouput = "";
       el.input.setAttribute("disabled", true);
       el.button.setAttribute("disabled", true);

       let myanglish = el.input.value;
       let words = myanglish.split(CHAR_WHITESPACE);
       words.forEach(word => this.translate(word));
       el.output.value = this.output;
       el.input.removeAttribute("disabled");
       el.button.removeAttribute("disabled");
    },

    translate(word) {
       if (word.trim()) {
           word = this.find(word);
       }
       this.output += word;
    },

    find(word) {
        let matched = (data || window.data)
            .filter(({ en }) => en === word);
        return matched.length ? match[0].mm : word;
    }
};

windiw.addEventListener('load', () => {
    try {
        el.button.addEventListener('click', app.convert);
    } catch (error) {
        alert(error.message);
    }
});



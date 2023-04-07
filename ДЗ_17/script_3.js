class CssClass {
    class_name = '';
    styles = [];
    constructor(name = null, styles = []) {
        this.class_name = name;
        this.styles = styles;
    }
    setStyle(style) {
        if (this.styles == null) {
            this.styles = [style]
        }
        else {
            this.styles.push(style)
        }
    }
    deleteStyle(style) {
        if (this.styles != null && this.styles.includes(style)) {
            this.styles = this.styles.filter(i => i !== style)
        }
    }
    getCss() {
        return `${this.class_name} {\n\t${this.styles != null ? `${this.styles.join(';\n\t')};` : ``}\n}`
    }
}

let class1 = new CssClass('.class1')
class1.setStyle('display: bloc')

let class2 = new CssClass('.class2')
class2.setStyle('width: 300px')
class2.setStyle('margin: 100px')

let class3 = new CssClass('.class3')
class3.setStyle('width: 300px')
class3.setStyle('height: 300px')

let classText = new CssClass('.text')
classText.setStyle('text-align: justify')

let classImg = new CssClass('img')
classImg.setStyle('width: 100px')
classImg.setStyle('height: 100px')

console.log(class1, class2, class3, classText, classImg);
console.log(classImg.getCss());

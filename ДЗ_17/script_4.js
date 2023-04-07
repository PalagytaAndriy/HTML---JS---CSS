class HtmlBlock {
    styles = [];
    root = null;

    constructor(styles = [], root = null) {
        this.styles = styles
        this.root = root
    }
    getCode() {
        return `<style>\n${this.styles.flatMap(s => s.getCss()).join('\n')}\n</style>\n${this.root.html}`
    }
}


let clsWrap = new CssClass('.wrap')
clsWrap.setStyle('display: block')

let clsBlock = new CssClass('.block')
clsBlock.setStyle('width: 300px')
clsBlock.setStyle('margin: 10px')

let clsImg = new CssClass('.img')
clsImg.setStyle('width: 100%')

let clsText = new CssClass('.text')
clsText.setStyle('text-align: justify')



htmlB = new HtmlBlock([clsWrap, clsBlock, clsImg, clsText], wrapper)

console.log(htmlB.getCode());
document.write(htmlB.getCode()) 
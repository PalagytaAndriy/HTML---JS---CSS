class HtmlElement {
    tag_Name = '';
    isSelfClothing = false;
    text_inside = '';
    atributes = [];
    styles = [];
    nested_tags = [];
    constructor(tagName, isSelfClosing, text) {
        this.tag_Name = tagName;
        this.isSelfClothing = isSelfClosing;
        this.text_inside = text;
    }
    atribut_Push(atr) {
        return this.atributes.push(atr);
    }
    style_Push(style) {
        return this.styles.push(style);
    }
    appendTag(tag) {
        return this.nested_tags.push(tag.html);
    }
    prependTag(tag) {
        return this.nested_tags.unshift(tag.html);
    }
    get html() {
        let html = '';
        if (this.isSelfClothing === false) {
            html = `<${this.tag_Name} ${this.atributes.join('')} style="${this.styles.join('')}">${this.text_inside}${this.nested_tags.join(' ')}</${this.tag_Name}>`;
        } else {
            html = `<${this.tag_Name} ${this.atributes.join('')} style="${this.styles.join('')}">${this.text_inside}${this.nested_tags.join(' ')}`;
        }
        return html;
    }
}

const atributes = [
    {
        name: 'id="wrapper"',
    },
    {
        name: 'src="./Lorem.png"',
    },
    {
        name: 'alt="Lorem Ipsum"',
    },
    {
        name: 'href="https://www.vectorstock.com/royalty-free-vector/infographic-data-diagram-with-lorem-ipsum-vector-24168733"',
    },
    {
        name: 'target="_blank"',
    },
];

const styles = [
    {
        name: 'display:flex;',
    },
    {
        name: 'width:300px;',
    },
    {
        name: 'width:100%;',
    },
    {
        name: 'text-align:justify;',
    },
    {
        name: 'margin: 10px;',
    },
];

const wrapper = new HtmlElement('div', false, '');
wrapper.atribut_Push(atributes[0].name);
wrapper.style_Push(styles[0].name);

const div = new HtmlElement('div', false, '');
div.style_Push(styles[1].name);
div.style_Push(styles[4].name);

const h3 = new HtmlElement('h3', false, 'What is lorem Ipsum?');

const img = new HtmlElement('img', true, '');
img.style_Push(styles[2].name);
img.atribut_Push(atributes[1].name);
img.atribut_Push(atributes[2].name);

const p = new HtmlElement(
    'p',
    false,
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quia nobis corporis, maiores esse rerum error laboriosam voluptatibus nihil, veritatis quisquam beatae repudiandae illum porro nemo neque consequuntur quis illo natus qui dolores voluptates, tempora ad. Pariatur quisquam distinctio maxime. Tenetur, expedita id. Provident ut sit blanditiis eveniet ipsam voluptatum?'
);
p.style_Push(styles[3].name);

const a = new HtmlElement('a', false, 'More...');
a.atribut_Push(atributes[3].name + ' ');
a.atribut_Push(atributes[4].name);

div.prependTag(p);
div.prependTag(img);
div.prependTag(h3);
div.appendTag(a);
wrapper.prependTag(div);
wrapper.appendTag(div);

document.write(wrapper.html);

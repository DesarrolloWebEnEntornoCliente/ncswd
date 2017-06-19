// WebComponents is an experimental technology
// Enable it in your browser

function main() {
    var FooElement, Mypara, FooExtended, MyCustomElementProto, OtherCustomElement;

    // HTMLUnknownElement is the prototype for user created tags
    console.log(document.createElement("mytag").__proto__ === HTMLUnknownElement.prototype);

    // Extensions retain its prototype
    console.log(document.createElement("div", "mydiv").__proto__ === HTMLDivElement.prototype);

    // New Custom element
    FooElement = document.registerElement("foo-el");

    // Custom element which extends and HTMLElement
    // document.registerElement is deprectated in favor of customElements.define
    MyPara = document.registerElement("my-para", {
        prototype: Object.create(HTMLElement.prototype),
        extends: 'p'
    });

    // Custom element which extends other custom element
    FooExtended = document.registerElement("foo-extended", {
        prototype: Object.create(HTMLElement.prototype),
        "extends": 'foo-el'
    });

    // Add properties and methods to Custom Elements
    MyCustomElementProto = Object.create(HTMLElement.prototype);
    MyCustomElementProto.doSomeThing = function () {
        console.log("Doing something...");
    }
    // Define a read-only property
    Object.defineProperty(MyCustomElementProto, "myproperty", { value: 1 });
    MyCustomElement = document.registerElement("element-with-properties", { prototype: MyCustomElementProto });

    // A more condensed way
    var OtherCustomElement = document.registerElement('other-element-with-properties', {
        prototype: Object.create(HTMLElement.prototype, {
            myproperty: {
                get: function() { return 1; }
            },
            doSomeThing: {
                value: function() {
                    console.log("Doing something...");
               }
            }
        })
    });

    document.body.appendChild(new FooElement());
    document.body.appendChild(new MyPara());
    document.body.appendChild(new FooExtended());
    document.body.appendChild(new MyCustomElement());
    document.body.appendChild(new OtherCustomElement());
}

window.onload = main;

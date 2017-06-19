# CSS #

CSS refers to all three levels of the specification:
* CSS Level 1 (CSS1)
* CSS Level 2 (CSS2)
* CSS Level 3 (CSS3)

Each level of CSS builds on its predecessor. CSS2 had a shaky start and many issues came to light, leading to a revision of this specification and the release of CSS2.1. So, CSS3 contains aspects of its predecessor CSS2.1, and CSS2.1 contains aspects of CSS2 and CSS1.

1. Visualization
2. Positioning
3. Alignment
4. Decoration
5. Images
6. Transforms
7. Multimedia
8. Responsive

Centering
#########

Horizontal centering with CSS is rather easy. When the element to be centered is an inline element we use text-align center on its parent. When the element is a block level element we give it a width and set the left and right margins to a value of auto.

Vertical Align:

Line-Height Method
This method will work when you want to vertically center a single line of text. All we need to do is set a line-height on the element containing the text larger than its font-size.

  <div id="parent">
    <div id="child">Text here</div>
  </div>

  #child {
    line-height: 200px;
  }

Centering an Image with Line-Height
What if the content you want centered is an image? Will this method work? The answer is yes with one additional line of css.

  <div id="parent">
    <img src="image.png" alt="" />
  </div>

  #parent {
    line-height: 200px;
  }

  #parent img {
    vertical-align: middle;
  }

CSS Table Method
Above I mentioned that vertical-align applies to table cells which leads us to this method. We’ll display our elements as table and table cell and then use the vertical-align property to center the content.
Unlike the method above the content can be dynamic as the div will grow with what’s placed inside. The downside of this method is it doesn’t work in older versions of IE, though there is a fix, which is to add display: inline-block to the child element.

  <div id="parent">
    <div id="child">Content here</div>
  </div>

  #parent {
    display: table;
  }

  #child {
    display: table-cell;
    vertical-align: middle;
  }

Absolute Positioning and Negative Margin
This method works for block level elements and also works in all browsers. It does require that we set the height of the element we want to center.

  <div id="parent">
    <div id="child">Content here</div>
  </div>

  #parent {
    position: relative;
  }

  #child {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -15% 0 0 -25%;
  }

Links
http://devdocs.io/css/css_images

http://vanseodesign.com/css/vertical-centering/

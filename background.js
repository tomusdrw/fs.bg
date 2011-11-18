/*
 * Full screen background plugin.
 * 
 */
(function(doc, win) {
    var bg = null, n = doc.body.childNodes, elementIdx = null;
    // search for img
    for (elementIdx in n) {
        if (n[elementIdx].tagName === 'IMG') {
            bg = n[elementIdx];
            break;
        }
    }
    var h = "height", //
    w = "width", //
    org_height = parseInt(bg.getAttribute(h), 10) || 1024, //
    org_width = parseInt(bg.getAttribute(w), 10) || 800, //
    ratio = org_height / org_width, //
    f = Math.ceil, unit = "px";
    // initial properties
    bg.style.cssText = "top:0;left:0;position:absolute;z-index:-1;display:block";

    var resizer = function() {
        var style = doc.body.childNodes[elementIdx].style, //
        width = win.innerWidth, //
        height = win.innerHeight, //
        cWidth, cHeight;
        if (height / width > ratio) {
            cHeight = height;
            cWidth = f(height / ratio);
        } else {
            cWidth = width;
            cHeight = f(width * ratio);
        }
        style.height = cHeight + unit;
        style.width = cWidth + unit;
        style.left = f((width - cWidth) / 2) + unit;
        style.top = f((height - cHeight) / 2) + unit;
    };
    resizer();
    win.addEventListener('resize', resizer, false);

}(document, window));

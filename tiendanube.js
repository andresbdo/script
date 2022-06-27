
    var a = document.querySelector(".status-content");
console.log(document.currentScript);
    if (a) {
        window.setTimeout(() => {
            var m = document.querySelectorAll(".m-bottom-none.m-top-quarter")[document.querySelectorAll(".m-bottom-none.m-top-quarter").length - 1]
            if (m.innerHTML.toLowerCase().includes('cripto') || m.innerHTML.toLowerCase().incldudes('crypto')){
                var b = document.createElement("button");
                var i = document.createElement("img");
                var c = document.createElement("a");
                c.setAttribute('style', 'color: #FFF;');
                c.setAttribute('target', '_blank');
                c.setAttribute('rel', 'noopener noreferrer')
                var d = document.createTextNode("Pagá con criptomonedas");
                i.setAttribute('src', 'https://svgshare.com/i/iHw.svg');
                i.setAttribute('style', 'margin-right:10px;');
                var t = document.querySelectorAll(".text-right.table-price")[document.querySelectorAll(".text-right.table-price").length - 1].innerHTML.replace('$', '').replace('.', '').replace(',', '.');
                
                var e = 12345;
                var s = window.btoa(unescape(encodeURIComponent(e + '**' + t)));
                b.appendChild(i);
                c.appendChild(d);
                c.setAttribute('href', 'https://checkout.tiendacrypto.com/new/' + s);
                b.appendChild(c);
                b.setAttribute('style',
                    'background-color: #6b5ecd;border-style:solid;border-color: #6b5ecd; border-radius: 10px; padding: 10px 15px; cursor: pointer; margin-top: 15px;outline: none;display:flex;align-items: center; justify-content:flex-start;'
                );
                a.insertAdjacentElement('beforeend', b);
            }
        }, 1000)
    }

text = `@misc{goodfellow2014generative,
    title={Generative Adversarial Networks},
    author={Ian J. Goodfellow and Jean Pouget-Abadie and Mehdi Mirza and Bing Xu and David Warde-Farley and Sherjil Ozair and Aaron Courville and Yoshua Bengio},
    year={2014},
    eprint={1406.2661},
    archivePrefix={arXiv},
    primaryClass={stat.ML}
  }`



text.replace(/(=\s*)(?:("{)(.*?)(}")|(")(.*?)(")|({{)(.*?)(}})|({)(.*?)(})|(.*?))(?=\s*[,}])/g,
    function (m,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14) {
        p1=p1||'',p2=p2||'',p3=p3||'',p4=p4||'',p5=p5||'',p6=p6||'',p7=p7||'',p8=p8||'',
        p9=p9||'',p10=p10||'',p11=p11||'',p12=p12||'',p13=p13||'',p14=p14||'';
        var rgx = /^\d+$/,
        string = (
        p3 .match( rgx ) ||
        p6 .match( rgx ) ||
        p9 .match( rgx ) ||
        p12.match( rgx ) ||
        p14.match( rgx )
        ) ? 'digit' : 'string';
        console.log(p1+p2+p5+p8+p11) // ={ or = {
        return `${p1+p2+p5+p8+p11}<span class="${string}">${p3+p6+p9+p12+p14}</span>${p4+p7+p10+p13}`//
        })
        .replace(/(\@)([^\@\{]+)(\{)(\w+)(\,)/gi,'$1<span class="entrytype">$2</span>$3<span class="label">$4</span><span class="default">$5</span>')
        .replace(/(\w+)\s*(\=)\s*(?={)/gi,'<span class="property">$1</span> $2 ')
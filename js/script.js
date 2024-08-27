(function selectLatin() {
    var latin = [
        '<span data-tooltip="I think, therefore I am.">cogito, ergo sum</span>',
        '<span data-tooltip="Time flies.">tempus fugit</span>', 
        '<span data-tooltip="Through hardships to the stars.">per aspera ad astra</span>'
    ];
    var randomIndex = Math.floor(Math.random() * latin.length);
    document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeend', latin[randomIndex]);
  })();
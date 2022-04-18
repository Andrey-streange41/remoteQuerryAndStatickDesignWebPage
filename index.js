
const body = document.getElementById('body');

const header = new PageHeader();
body.append( header.render());
const loc = new CurrentLocation();
body.append(loc.render())
const sliderSection = new Slider();
body.append(sliderSection.render());

const pageCategory = new PageCategory();

body.append(pageCategory.render());

const catalog = new Catalog();

body.append(catalog.render());
const api = new API(URL);
const app = new App(APP_ELEMENT);

function search() {
  if (typeof api !== undefined) {
    const query = document.getElementById(QUERY_ELEMENT).value;
    const mainContent = document.getElementsByTagName('main')[0];
    mainContent.classList.remove('show-filter');        

    if (query !== '') {
      app.drawVideos({q: query});     
    } else {
      document.getElementById(APP_ELEMENT).innerHTML = NO_RESULTS_FOUND;
    }
  }
}

const buttonFilter = document.getElementById('show-filter');
buttonFilter.addEventListener('click', showFilter)

function showFilter() {
  const mainContent = document.getElementsByTagName('main')[0];
  mainContent.classList.add('show-filter');
}

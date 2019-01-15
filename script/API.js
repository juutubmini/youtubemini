class API {
  constructor(url) {
    this.url = url;
  }
  getFilterValues() {
    const filter = document.getElementById(FILTER_ELEMENT);
    let fieldsets = filter.getElementsByTagName('fieldset');
    let queries = {};
    fieldsets = [...fieldsets];

    if (fieldsets.length > 0) {
      fieldsets.forEach(fieldset => {
        let inputs = fieldset.getElementsByTagName('input');
        inputs = [...inputs];

        inputs.forEach(input => {
          if (input.checked && !input.disabled) queries[input.name] = input.value;
        });
      });
    }

    return queries;
  }
  getSearchURL(query) {
    let filterParams = this.getFilterValues();
    let urlParams = { ...defaultParamsSearch, ...query, ...filterParams };
    let searchURL = this.url;
    searchURL += Object.keys(urlParams).map(prop => prop + '=' + urlParams[prop]).join('&');

    return searchURL;
  }
  getVideos(query) {
    return fetch(this.getSearchURL(query))
      .then(result => result.json());
  }

}

class App {
  constructor(element) {
    this.element = element;
  }  
  view(result) {
    let videos = '';

    result.forEach((video) => {
      videos += this.videoTemplate(video);
    });

    return videos;
  }
  controller(query) {
    return api.getVideos(query)
      .then(result => {
        return result.items;
      });
  }
  videoTemplate(video) {
    const channelTitle = video.snippet.channelTitle;
    const channelId = video.snippet.channelId;
    const description = video.snippet.description;
    const thumbnail = video.snippet.thumbnails.medium;
    const published = new Date(video.snippet.publishedAt);
    const title = video.snippet.title;

    return `
        <div class="video-detail">  
          <div class="thumbnail">       
            <a href="${VIDEO_URL}${video.id.videoId}" title="${title}" target="_blank">
              <img src="${thumbnail.url}" width="${thumbnail.width}" height="${thumbnail.height}"  alt="${title}"/>
            </a>
          </div>
          <div class="text">
            <h3>${title}</h3>
            <h4>
              <a href="${CHANNEL_URL}${channelId}" title="${channelTitle}" target="_blank">${channelTitle}</a> 
              • 
              ${published.toLocaleDateString()} ${published.toLocaleTimeString()}
            </h4>
            <p>${description}</p>       
          </div>
          <p class="clearfix"></p>
        </div>
      `;
  }
  drawVideos(query) {
    this.controller(query)
      .then(result => {
        if (result.length > 0) {
          document.getElementById(APP_ELEMENT).innerHTML = this.view(result);
        } else {
          document.getElementById(APP_ELEMENT).innerHTML = NO_RESULTS_FOUND;
        }
      })
      .catch(error => {
        document.getElementById(this.element).innerHTML = error.message;
      });
  }
}

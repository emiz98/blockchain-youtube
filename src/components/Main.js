import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid text-monospace">
        <br></br>
        &nbsp;
        <br></br>
        <div className="row">
          <div className="col-md-10">
            <div
              className="embed-responsive embed-responsive-16by9"
              style={{ maxHeight: "768px" }}
            >
              <video
                muted
                controls
                src={`https://ipfs.infura.io/ipfs/${this.props.currentHash}`}
              />
            </div>
            <h3>{this.props.currentTitle}</h3>
          </div>
          <div
            className="col-md-2 overflow-auto text-center"
            style={{ maxHeight: "768px", minWidth: "175px" }}
          >
            <h5>
              <b>Share Video</b>
            </h5>
            <form
              onSubmit={(event) => {
                {
                  event.preventDefault();
                  const title = this.videoTitle.value;
                  this.props.uploadVideo(title);
                }
              }}
            >
              &nbsp;
              <input
                type="file"
                accept=".mp4, .mkv, .ogg, .wmv"
                onChange={this.props.captureFile}
                required
              />
              <div className="form-group mr-sm-2">
                <input
                  id="videoTitle"
                  type="text"
                  ref={(input) => {
                    this.videoTitle = input;
                  }}
                  className="form-control-sm"
                  placeholder="Title..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger btn-block btn-sm">
                Upload
              </button>
              &nbsp;
            </form>
            {/* Map Video...*/}
            {this.props.videos.map((video, key) => {
              return (
                <div key={key} style={{ width: "175px" }}>
                  <div className="card-title bg-dark">
                    <small className="text-white">
                      <b>{video.title}</b>
                    </small>
                  </div>
                  <div
                    onClick={() =>
                      this.props.changeVideo(video.hash, video.title)
                    }
                  >
                    <video
                      style={{ width: "100%" }}
                      muted
                      src={`https://ipfs.infura.io/ipfs/${video.hash}`}
                    />
                  </div>
                </div>
              );
            })}
            {/* Return Video...*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

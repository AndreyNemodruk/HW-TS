import { Api } from "./Api/Api";
import { AudioPlayer } from "./AudioPlayer/AudioPlayer";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer";

class MultimediaPlayer {
  private audioPlayer: AudioPlayer;
  private videoPlayer: VideoPlayer;
  private api: Api;

  constructor() {
    this.audioPlayer = new AudioPlayer();
    this.videoPlayer = new VideoPlayer();
    this.api = new Api();
  }

  openPlayer(type: "audio" | "video", id: number) {
    const { src } = this.api.getLinkForStream(id);
    if (type === "audio") {
      this.audioPlayer.init(src);
      this.playAudio();
    }
    if (type === "video") {
      this.videoPlayer.init(src);
      this.playVideo();
    }
  }

  playAudio(): void {
    this.audioPlayer.play();
  }

  pauseAudio(): void {
    this.audioPlayer.pause();
  }

  stopAudio(): void {
    this.audioPlayer.stop();
  }

  playVideo(): void {
    this.videoPlayer.play();
  }

  pauseVideo(): void {
    this.videoPlayer.pause();
  }

  stopVideo(): void {
    this.videoPlayer.stop();
  }
}

const multimediaPlayer = new MultimediaPlayer();

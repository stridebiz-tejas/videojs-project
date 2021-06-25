import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import videojs from 'video.js';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vjs-player',
  templateUrl: './vjs-player.component.html',
  styleUrls: ['./vjs-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VjsPlayerComponent implements OnInit {

  @ViewChild('target', { static: true })
  target!: ElementRef;
  options: any;
  player!: videojs.Player;
  questions: any =  [];
  faPlayCircle = faPlayCircle;

  constructor(
    private elementRef: ElementRef,
  ) {
    this.options = {
      autoplay: true,
      controls: false,
      preload: "auto",
      sources: [
        {
          src: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
          type: "video/mp4",
        },
      ]
    }
  }

  ngOnInit() {
    this.questions = [
      {
        question: "Tell me about yourself?",
        src: "https://wordsmayabucket.s3.ap-south-1.amazonaws.com/sandeep/Tell+me+about+yourself.mp4",
        type: "video/mp4",
      },
      {
        question: "What exactly StrideBiz does?",
        src: "https://wordsmayabucket.s3.ap-south-1.amazonaws.com/sandeep/How+StrideBiz+Works.mp4",
        type: "video/mp4",
      },
      {
        question: "How to contact me?",
        src: "https://wordsmayabucket.s3.ap-south-1.amazonaws.com/sandeep/How+to+contact.mp4",
        type: "video/mp4",
      }
    ];
    this.options.sources[0].src =
      "https://wordsmayabucket.s3.ap-south-1.amazonaws.com/sandeep/waiting.mp4";
    this.options.sources[0].type = "video/mp4";
    this.player = videojs(this.target.nativeElement, this.options, () => {
      console.log('onPlayerReady', this);
    });
    this.player.play();
    this.player.loop(true);
    this.player.enterFullWindow();
    // this.player.on('contextmenu', (e) => {
    //   e.preventDefault();
    // })
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

  goToVideo(question: any) {
    this.player.src([
      {
        type: question.type,
        src: question.src,
      },
    ]);
    this.player.loop(false);
    this.player.load();

    this.player.on("ended", () => {
      this.player.src({
        type: "video/mp4",
        src: "https://wordsmayabucket.s3.ap-south-1.amazonaws.com/sandeep/waiting.mp4",
      });
      this.player.loop(true);
      this.player.load();
    });
  }

}

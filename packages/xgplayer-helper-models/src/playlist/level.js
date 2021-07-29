export class Level {
  levelId = 0

  bitrate = 0
  width = 0
  height = 0
  name = ''
  url = ''
  audioCodec = ''
  videoCodec = ''
  textCodec = ''

  startCC = 0
  endCC = 0
  startSN = 0
  endSN = 0
  totalDuration = 0
  targetDuration = 0
  live = undefined
  segments = [] // MediaSegment

  constructor (playlist, levelId) {
    this.levelId = levelId
    this.update(playlist)
  }

  update (playlist, levelId) {
    this.levelId = levelId
    if (playlist.url) { // master stream
      this.bitrate = playlist.bitrate
      this.width = playlist.width
      this.height = playlist.height
      this.name = playlist.name
      this.url = playlist.url
      this.audioCodec = playlist.audioCodec
      this.videoCodec = playlist.videoCodec
      this.textCodec = playlist.textCodec
    } else if (Array.isArray(playlist.segments)) { // media
      if (this.live == null) this.live = playlist.live
      if (this.live) {
        if (this.endSN < playlist.endSN) {
          const index = playlist.segments.findIndex(x => x.sn === this.endSN)
          this.segments = this.segments.concat(index < 0 ? playlist.segments : playlist.segments.slice(index + 1))
        }
      } else {
        this.segments = playlist.segments
      }

      this.startCC = playlist.startCC
      this.endCC = playlist.endCC
      this.startSN = playlist.startSN
      this.endSN = playlist.endSN
      this.totalDuration = playlist.totalDuration
      this.targetDuration = playlist.targetDuration

      this.live = playlist.live
    }
  }
}

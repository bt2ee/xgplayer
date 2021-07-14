export default {
  AUDIO: {
    AUDIO_READY: 'audio_ready',
    AUDIO_WAITING: 'audio_waiting',
    AUDIO_SYNC_DTS: 'audio_sync_dts'
  },
  VIDEO: {
    VIDEO_DECODER_INIT: 'video_decode_init',
    VIDEO_READY: 'video_ready',
    VIDEO_WAITING: 'video_waiting',
    AUTO_RUN: 'auto_run',
    DECODE_LOW_FPS: 'decode_low_fps',
    UPDATE_VIDEO_FILLTYPE: 'update_video_filltype',
    UPDATE_VIDEO_COVER_POSITION: 'update_video_cover_position'
  },
  TIMELINE: {
    PLAY_EVENT: 'play_event',
    SET_METADATA: 'set_metadata',
    APPEND_CHUNKS: 'append_chunks',
    START_RENDER: 'start_render',
    DO_PLAY: 'do_play',
    DO_PAUSE: 'do_pause',
    DO_SEEK: 'do_seek',
    SYNC_DTS: 'sync_dts',
    RESET_BASE_DTS: 'reset_base_dts',
    UPDATE_VOLUME: 'update_volume',
    NO_AUDIO: 'no_audio',
    DESTROY: 'destroy',
    READY: 'ready',
    UPDATE_GL_OPTIONS: 'update_gl_options',
    SET_VIDEO_DURATION: 'set_video_duration',
    SET_PLAY_MODE: 'set_play_mode', // vod、live
    UPDATE_CAPABILITY_LEVEL: 'update_capability_level',
    INNER_DEGRADE: 'inner_degrade',
    ADJUST_SEEK_TIME: 'adjust_seek_time',
    CHASE_FRAME: 'chase_frame'
  },
  VIDEO_EVENTS: {
    WAITING: 'waiting',
    CANPLAY: 'canplay',
    PLAY: 'play',
    PLAYING: 'playing',
    PAUSE: 'pause',
    SEEKING: 'seeking',
    SEEKED: 'seeked',
    LOADEDDATA: 'loadeddata',
    TIMEUPDATE: 'timeupdate',
    DURATION_CHANGE: 'durationchange',
    VOLUME_CHANGE: 'volumechange',
    PROGRESS: 'progress',
    ERROR: 'error',
    ENDED: 'ended',
    // 自定义
    DECODE_FPS: 'decodefps',
    LOW_DECODE: 'lowdecode'
  },
  DECODE_EVENTS: {
    INIT: 'init',
    READY: 'decoderready',
    REMUX: 'remux',
    INIT_FAILED: 'initfailed',
    DATAREADY: 'dataReady',
    PLAY_FAILED: 'playfailed',
    FRAGMENT_END: 'fragmentEnd',
    APPEND_VIDEO: 'appendVideo',
    FIRST_FRAME: 'firstFrame',
    DECODED: 'decoded',
    RENDE_END: 'rendeEnd',
    CHASE_VIDEO_FRAME: 'chaseVideoFrame',
    CHASE_VIDEO_FRAME_END: 'chaseVideoFrameEnd',
    CHASE_AUDIO_FRAME: 'chaseAudioFrame',
    INIT_SEGMENT: 'initSegment',
    MEDIA_SEGMENT: 'mediaSegment',
    FRAME_MAX_COUNY: 'frameMaxCount',
    FRAME_MIN_COUNY: 'frameMinCount'
  },
  LARGE_AV_GAP: 'largeavgap',
  FIRST_FRAME: 'firstframe'
}
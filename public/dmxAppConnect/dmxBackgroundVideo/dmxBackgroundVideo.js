/*!
 App Connect Background Video
 Version: 2.0.0
 (c) 2024 Wappler.io
 @build 2024-04-15 17:48:46
 */
dmx.Component("background-video",{initialData:{paused:!1},attributes:{src:{type:String,default:null}},methods:{play(){this._video.play()},pause(){this._video.pause()},toggle(){this._video.paused?this._video.play():this._video.pause()}},init(e){this._update=this._update.bind(this);const t=document.createElement("div"),s=document.createElement("video");t.style.setProperty("position","absolute"),t.style.setProperty("width","100%"),t.style.setProperty("height","100%"),t.style.setProperty("overflow","hidden"),s.style.setProperty("position","absolute"),s.style.setProperty("width","auto"),s.style.setProperty("height","auto"),s.style.setProperty("min-width","100%"),s.style.setProperty("min-height","100%"),s.style.setProperty("top","50%"),s.style.setProperty("left","50%"),s.style.setProperty("transform","translate(-50%, -50%)"),s.src=this.props.src,s.playsInline=!0,s.autoplay=!0,s.muted=!0,s.loop=!0,s.setAttribute("muted",""),s.setAttribute("playsinline",""),s.addEventListener("play",this._update),s.addEventListener("pause",this._update);const i=document.createElement("div");i.style.setProperty("position","relative"),e.style.setProperty("position","relative"),e.parentNode.insertBefore(i,e),t.appendChild(s),i.appendChild(t),i.appendChild(e),this._wrapper=i,this._video=s},detroy(){this._video.removeEventListener("play",this._update),this._video.removeEventListener("pause",this._update),this._wrapper.remove()},performUpdate(e){e.has("src")&&(this._video.src=this.props.src)},_update(e){this.set("paused",this._video.paused)}});
//# sourceMappingURL=dmxBackgroundVideo.js.map

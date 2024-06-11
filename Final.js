(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.AssetImage = function() {
	this.initialize(img.AssetImage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,4961);


(lib.BtnTower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AngHgQjGjGAAkaQAAkYDGjIQDIjGEYAAQEaAADGDGQDHDIAAEYQAAEajHDGQjGDHkaAAQkYAAjIjHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-67.9,135.8,135.8);


// stage content:
(lib.Final = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [4];
	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		
		
		this.BtnTower.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler() {
			var fullText = "善惡的天秤倚著抉擇，\n思考的聲音吱呀作響。";
			var currentText = "";
			var currentIndex = 0;
			this.TextTower.alpha = 1;
			this.TextTower.text = currentText;
			this.addEventListener("tick", typeWriterEffect.bind(this));
			function typeWriterEffect() {
				// 如果還有未顯示的文字，則顯示下一個字元
				if (currentIndex < fullText.length) {
					currentText += fullText[currentIndex];
					this.TextTower.text = currentText;
					currentIndex++;
				} else {
					// 完成打字效果後，停止更新
					this.removeEventListener("tick", typeWriterEffect);
				}
			}
		}
		
		this.BtnEngine.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2() {
			var fullText = "至今仍然好好的轉著，\n仍然自由自在地飛著。";
			var currentText = "";
			var currentIndex = 0;
			this.TextEngine.alpha = 1;
			this.TextEngine.text = currentText;
			this.addEventListener("tick", typeWriterEffect.bind(this));
			function typeWriterEffect() {
				// 如果還有未顯示的文字，則顯示下一個字元
				if (currentIndex < fullText.length) {
					currentText += fullText[currentIndex];
					this.TextEngine.text = currentText;
					currentIndex++;
				} else {
					// 完成打字效果後，停止更新
					this.removeEventListener("tick", typeWriterEffect);
				}
			}
		
		}
		/* 滑鼠按鍵事件
		您可將函數增加至您自訂的程式碼，按一下特定元件實體，就會執行該函數。
		
		指示:
		1. 在下方含有「// 啟動您的自訂程式碼」的程式碼之後，將自訂的程式碼加入新行。
		按下元件實體時，就會執行程式碼。
		*/
		
		this.BtnAll.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			var fullText = "最後會航向多遠，\n直上雲霄，\n或是成為不發光的星辰？";
			var currentText = "";
			var currentIndex = 0;
			this.TextAll.alpha = 1;
			this.TextAll.text = currentText;
			this.addEventListener("tick", typeWriterEffect.bind(this));
			function typeWriterEffect() {
				// 如果還有未顯示的文字，則顯示下一個字元
				if (currentIndex < fullText.length) {
					currentText += fullText[currentIndex];
					this.TextAll.text = currentText;
					currentIndex++;
				} else {
					// 完成打字效果後，停止更新
					this.removeEventListener("tick", typeWriterEffect);
				}
			}
		}
		this.BtnChemstry.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			var fullText = "精心設計的理想，\n視而不見的代價，\n一同灑在藍天。";
			var currentText = "";
			var currentIndex = 0;
			this.TextChemstry.alpha = 1;
			this.TextChemstry.text = currentText;
			this.addEventListener("tick", typeWriterEffect.bind(this));
			function typeWriterEffect() {
				// 如果還有未顯示的文字，則顯示下一個字元
				if (currentIndex < fullText.length) {
					currentText += fullText[currentIndex];
					this.TextChemstry.text = currentText;
					currentIndex++;
				} else {
					// 完成打字效果後，停止更新
					this.removeEventListener("tick", typeWriterEffect);
				}
			}
		}
		
		
		this.BtnHouses.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		
		function fl_MouseClickHandler_5()
		{
			var fullText = "世界毀滅危機，\n超級英雄傳奇，\n「晚餐做什麼好？」";
			var currentText = "";
			var currentIndex = 0;
			this.TextHouses.alpha = 1;
			this.TextHouses.text = currentText;
			this.addEventListener("tick", typeWriterEffect.bind(this));
			function typeWriterEffect() {
				// 如果還有未顯示的文字，則顯示下一個字元
				if (currentIndex < fullText.length) {
					currentText += fullText[currentIndex];
					this.TextHouses.text = currentText;
					currentIndex++;
				} else {
					// 完成打字效果後，停止更新
					this.removeEventListener("tick", typeWriterEffect);
				}
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Actions
	this.TextHouses = new cjs.Text("", "45px 'Times New Roman'", "#FFFFFF");
	this.TextHouses.name = "TextHouses";
	this.TextHouses.lineHeight = 52;
	this.TextHouses.lineWidth = 483;
	this.TextHouses.parent = this;
	this.TextHouses.setTransform(183.35,1098.8,1.3106,1.3106);

	this.TextChemstry = new cjs.Text("", "45px 'Times New Roman'", "#FFFFFF");
	this.TextChemstry.name = "TextChemstry";
	this.TextChemstry.lineHeight = 52;
	this.TextChemstry.lineWidth = 483;
	this.TextChemstry.parent = this;
	this.TextChemstry.setTransform(1094.6,1495.9,1.3106,1.3106);

	this.TextAll = new cjs.Text("", "45px 'Times New Roman'", "#FFFFFF");
	this.TextAll.name = "TextAll";
	this.TextAll.lineHeight = 52;
	this.TextAll.lineWidth = 483;
	this.TextAll.parent = this;
	this.TextAll.setTransform(222.45,2441.65,1.3106,1.3106);

	this.TextTower = new cjs.Text("", "45px 'Times New Roman'", "#FFFFFF");
	this.TextTower.name = "TextTower";
	this.TextTower.lineHeight = 52;
	this.TextTower.lineWidth = 483;
	this.TextTower.parent = this;
	this.TextTower.setTransform(338.75,524.75,1.3106,1.3106);

	this.TextEngine = new cjs.Text("", "45px 'Times New Roman'", "#FFFFFF");
	this.TextEngine.name = "TextEngine";
	this.TextEngine.lineHeight = 52;
	this.TextEngine.lineWidth = 483;
	this.TextEngine.parent = this;
	this.TextEngine.setTransform(1133.55,2441.65,1.3106,1.3106);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.TextEngine},{t:this.TextTower},{t:this.TextAll},{t:this.TextChemstry},{t:this.TextHouses}]},4).wait(1));

	// Buttons
	this.BtnAll = new lib.BtnTower();
	this.BtnAll.name = "BtnAll";
	this.BtnAll.setTransform(526.2,2316.55,1.3106,1.3106,0,0,0,0.1,0.1);
	this.BtnAll.alpha = 0.3281;
	new cjs.ButtonHelper(this.BtnAll, 0, 1, 1);

	this.BtnHouses = new lib.BtnTower();
	this.BtnHouses.name = "BtnHouses";
	this.BtnHouses.setTransform(827.65,1198.9,1.3106,1.3106,0,0,0,0.1,0.1);
	this.BtnHouses.alpha = 0.3281;
	new cjs.ButtonHelper(this.BtnHouses, 0, 1, 1);

	this.BtnEngine = new lib.BtnTower();
	this.BtnEngine.name = "BtnEngine";
	this.BtnEngine.setTransform(1439.8,2321.3,1.3106,1.3106,0,0,0,0.1,0.1);
	this.BtnEngine.alpha = 0.3281;
	new cjs.ButtonHelper(this.BtnEngine, 0, 1, 1);

	this.BtnChemstry = new lib.BtnTower();
	this.BtnChemstry.name = "BtnChemstry";
	this.BtnChemstry.setTransform(1636.7,1365,1.3106,1.3106,0,0,0,0.1,0.1);
	this.BtnChemstry.alpha = 0.3281;
	new cjs.ButtonHelper(this.BtnChemstry, 0, 1, 1);

	this.BtnTower = new lib.BtnTower();
	this.BtnTower.name = "BtnTower";
	this.BtnTower.setTransform(1079.1,619.95,1.3106,1.3106,0,0,0,0.1,0.2);
	this.BtnTower.alpha = 0.3281;
	new cjs.ButtonHelper(this.BtnTower, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.BtnTower},{t:this.BtnChemstry},{t:this.BtnEngine},{t:this.BtnHouses},{t:this.BtnAll}]},4).wait(1));

	// BG
	this.instance = new lib.AssetImage();
	this.instance.setTransform(0,0,0.5455,0.5455);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1913.5,2706);
// library properties:
lib.properties = {
	id: '4B41B38F0795BA499D9DABDD50B5A591',
	width: 1913,
	height: 2706,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AssetImage.jpg?1718125944556", id:"AssetImage"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4B41B38F0795BA499D9DABDD50B5A591'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
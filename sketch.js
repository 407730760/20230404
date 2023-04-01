function setup() {
  createCanvas(windowWidth, windowHeight); // 建立一個畫布
}

function draw() {
  colorMode(RGB) //顏色模式設定RGB
  background(239, 222, 205); //設定背景顏色(R:239,G:222,B:205)
  strokeWeight(10); //邊框線粗
  //roke(255, 204, 20);// 邊框顏色

// C1
//fill('rgba(27, 129, 62, 0.95)');
circle(550, 350, 300+mouseY/5); //在座標及大小後方加入+mouseY，使圖面可隨著滑鼠上下移動而產生放大縮小的互動。另外，後方/5藉由倍數大小調整圓圈放大縮小的幅度，即可創造如gif檔中一同放大縮小，但幅度卻不同的視覺效果

// C2
//fill('rgba(27, 129, 62, 0.95)');
circle(550, 350, 250+mouseY/50);

// C3
//fill('rgba(249, 191, 69, 0.95)');
circle(550, 350, 200+mouseY/40);

// C4
//fill('rgba(27, 129, 62, 0.95)');
circle(550, 350, 150+mouseY/10);

// C5
//fill('rgba(203, 64, 66, 0.95)');
circle(550, 350, 100+mouseY/30);

//加入文字
textSize(22)  //文字大小
//noStroke();
//fill(0, 102, 153);  //設定顏色
text("教科系",520,360+mouseY/100)  //顯示文字

}
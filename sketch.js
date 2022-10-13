let squiggleNumber = 7515;
let ringSpacing = 1
let grayscale = false;
/*
createTokenId funciton is called with squiggle number
*/
function updateSequence(val) {
  tokenData = createTokenData(tokens[squiggleNumber][0])
  numHashes = tokenData.hashes.length;
  hashPairs = [];
  for(let i = 0; i < numHashes; i++) {
    for(let j = 0; j < 32; j++) {
      hashPairs.push(tokenData.hashes.slice(2 + (j * 2), 4 + (j * 2)));
    }
  }
  // console.log(hashPairs)
  decPairs = hashPairs.map(x => {
    return parseInt(x, 16);
  });
  seed = parseInt(tokenData.hashes.slice(0, 16), 16);
  color_;
  backgroundIndex = 0;
  backgroundArray = [255, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0, 25, 50, 75, 100, 125, 150, 175, 200, 225];
  index = 0;
  ht;
  wt = 2;
  speed_ = 1;
  segments;
  amp = 1;
  direction = 1;
  loops = false;
  startColor = decPairs[29];
  reverse = decPairs[30] < 128;
  slinky = decPairs[31] < 35;
  pipe = decPairs[22] < 32;
  bold = decPairs[23] < 15;
  segmented = decPairs[24] < 30;
  fuzzy = pipe && !slinky;
  //svg collections
  rings = [];
  ringCenters = [];
  ringSizes = [];
  ringColors = [];
  //writer
  writer;
  xOffset = 20;
  yOffset = 0;
  scaler = 1;
  words = "Chromie Squiggle #" + squiggleNumber;
  borderAndWords = [];
  setup();
  draw();
}
let tokenData = createTokenData(tokens[squiggleNumber][0])
// console.log(tokenData.hashes[3])
let numHashes = tokenData.hashes.length;
// console.log(numHashes);
let hashPairs = [];
for(let i = 0; i < numHashes; i++) {
  for(let j = 0; j < 32; j++) {
    hashPairs.push(tokenData.hashes.slice(2 + (j * 2), 4 + (j * 2)));
  }
}
// console.log(hashPairs)
let decPairs = hashPairs.map(x => {
  return parseInt(x, 16);
});
// decPairs[22] = 0;
// decPairs[31] = 0;
// decPairs[22] = 0;
// decPairs[23] = 0;
// decPairs[24] = 0;
let seed = parseInt(tokenData.hashes.slice(0, 16), 16);
let color_;
let backgroundIndex = 0;
let backgroundArray = [255, 225, 200, 175, 150, 125, 100, 75, 50, 25, 0, 25, 50, 75, 100, 125, 150, 175, 200, 225];
let index = 0;
let ht;
let wt = 2;
let speed_ = 1;
let segments;
let amp = 1;
let direction = 1;
let loops = false;
let startColor = decPairs[29];
let reverse = decPairs[30] < 128;
let slinky = decPairs[31] < 35;
let pipe = decPairs[22] < 32;
let bold = decPairs[23] < 15;
let segmented = decPairs[24] < 30;
let fuzzy = pipe && !slinky;
//svg collections
let rings = [];
let ringCenters = [];
let ringSizes = [];
let ringColors = [];
//writer
let writer;
let xOffset = 20;
let yOffset = 0;
let scaler = 1;
let words = "Chromie Squiggle #" + squiggleNumber;
let borderAndWords = [];

function setup() {
  let portrait = windowWidth < windowHeight;
  // createCanvas(windowWidth > windowHeight * 3 / 2 ? windowHeight * 3 / 2 : windowWidth, windowWidth > windowHeight * 3 / 2 ? windowHeight : windowWidth * 2 / 3);
  createCanvas(550, 425);
  xOffset = 50;
  yOffset = 150;
  scaler = 1;
  // var el = document.getElementsByTagName("canvas")[0];
  // el.addEventListener("touchstart", mouseClicked, false);
  colorMode(HSB, 255);
  segments = map(decPairs[26], 0, 255, 12, 20);
  ht = map(decPairs[27], 0, 255, 3, 4);
  spread = decPairs[28] < 3 ? 0.5 : map(decPairs[28], 0, 255, 5, 50);
  strokeWeight(height / 1200);
  noLoop();
  // button = createButton('SAVE as SVG');
  // button.position(width / 2, 450);
  // button.mousePressed(exportSVG);
}

function draw() {
  color_ = 0;
  background(backgroundArray[backgroundIndex]);
  let divisor = Math.floor(map(Math.round(decPairs[24]), 0, 230, 3, 20));
  let steps = slinky ? 50 : fuzzy ? 1000 : 200;
  // translate((width / 2) - (width / wt / 2), height / 2);
  // console.log(steps)
  for(let j = 0; j < segments - 2; j++) {
    for(let i = 0; i < steps; i++) {
      let t = i / steps;
      let x = curvePoint(width / segments / wt * j, width / segments / wt * (j + 1), width / segments / wt * (j + 2), width / segments / wt * (j + 3), t);
      let y = curvePoint(map(decPairs[j], 0, 255, -height / ht, height / ht) * amp, map(decPairs[j + 1], 0, 255, -height / ht, height / ht) * amp, map(decPairs[j + 2], 0, 255, -height / ht, height / ht) * amp, map(decPairs[j + 3], 0, 255, -height / ht, height / ht) * amp, t);
      let hue = reverse ? 255 - (((color_ / spread) + startColor + index) % 255) : (((color_ / spread) + startColor) + index) % 255;
      if(fuzzy) {
        // console.log("fuzzy")
        // noStroke();
        // fill(hue, 255, 255, 20);
        // console.log(rnd())
        let fuzzX = x + map(rnd(), 0, 1, 0, height / 10);
        let fuzzY = y + map(rnd(), 0, 1, 0, height / 10);
        if(dist(x, y, fuzzX, fuzzY) < height / 11.5) {
          // circle(fuzzX, fuzzY, map(rnd(), 0, 1, height / 160, height / 16));
          rings.push(addRing((fuzzX * scaler) + xOffset, (fuzzY * scaler) + yOffset, map(rnd(), 0, 1, height / 160, height / 16)));
          // ringCenters.push()
          ringColors.push(color(hue, 255, 255, 20));
        }
      } else {
        if(slinky && pipe) {
          // console.log("slinky or pipe")
          // slinky and pipe accent lines
          // if(i == 0 || i == steps - 1) {
          //   fill(0);
          // } else {
          //   noFill();
          // }
          // stroke(0);
          // circle(x, y, (height / 7))
          rings.push(addRing((x * scaler) + xOffset, (y * scaler) + yOffset, (height / 7)));
          ringColors.push(color(0));
          // let ringSegments = [];
          // for(let i = 0; i < 360; i++) {
          //   ringSegments.push(createVector(x + sin(radians(i)) * (height / 7), y + cos(radians(i)) * (height / 7)))
          // }
          // rings.push(ringSegments)
        }
        // if(slinky) {
        // console.log("slinky")
        //   if(i == 0 || i == steps - 1) {
        //     fill(hue, 255, 255);
        //   } else {
        //     noFill();
        //   }
        //   stroke(hue, 255, 255);
        // } else {
        //   // console.log("Some other type")
        //   noStroke();
        //   fill(hue, 255, 255);
        // }
        // circle(x, y, bold && !slinky ? height / 5 : height / 13);
        rings.push(addRing((x * scaler) + xOffset, (y * scaler) + yOffset, bold && !slinky ? height / 5 : height / 13));
        ringColors.push(color(hue, 255, 255));
        // let ringSegments = [];
        // for(let i = 0; i < 360; i++) {
        //   ringSegments.push(createVector(x + sin(radians(i)) * bold && !slinky ? height / 5 : height / 13, y + cos(radians(i)) * bold && !slinky ? height / 5 : height / 13))
        // }
        // rings.push(ringSegments)
        if(segmented && !slinky && !bold) {
          if(i % divisor === 0 || i == 0 || i == steps - 1) {
            // noStroke();
            // fill(decPairs[25]);
            // circle(x, y, height / 12);
            rings.push(addRing((x * scaler) + xOffset, (y * scaler) + yOffset, height / 12));
            ringColors.push(color(decPairs[25]));
            // let ringSegments = [];
            // for(let i = 0; i < 360; i++) {
            //   ringSegments.push(createVector(x + sin(radians(i)) * height / 12, y + cos(radians(i)) * height / 12))
            // }
            // rings.push(ringSegments)
          }
        }
      }
      color_++;
    }
    seed = parseInt(tokenData.hashes.slice(0, 16), 16);
  }
  // loops === true ? index = index + speed_ : index = index;
  // if(keyIsDown(UP_ARROW)) {
  //   if(keyIsDown(SHIFT)) {
  //     if(speed_ < 20) {
  //       speed_++;
  //     } else {
  //       speed_ = 20;
  //     }
  //   } else {
  //     if(speed_ < 20) {
  //       speed_ = speed_ + 0.1;
  //     } else {
  //       speed_ = 20;
  //     }
  //   }
  // } else if(keyIsDown(DOWN_ARROW)) {
  //   if(keyIsDown(SHIFT)) {
  //     if(speed_ > 1) {
  //       speed_--;
  //     } else {
  //       speed_ = 0.1;
  //     }
  //   } else {
  //     if(speed_ > 0.1) {
  //       speed_ = speed_ - 0.1;
  //     } else {
  //       speed_ = 0.1;
  //     }
  //   }
  // }
  // console.log(rings)
  // drawArr(spacedOutRings(rings));
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(0, 0, width, height)
  centerSquiggle(rings);
  strokeWeight(0.5);
  drawWord(words, createVector(width - (270 + (squiggleNumber.toString().length * 15)), height - 40), 0.20);
  displayWords();
  displayWordsAsSVG();
  drawRings();
  // drawCentralLine();
  // drawSquiggleOutline(ringSizes[0]);
  // drawSquiggleOutline(ringSizes[0]+10);
  document.getElementById("squiggleNumberInputForm").value = squiggleNumber
  document.getElementById("currentRingSpacing").value = ringSpacing
  // console.log(rings.length/ringSpacing)
  document.getElementById("ringCount").innerHTML = Math.floor(rings.length / ringSpacing)
}
// < svg
// width = "100vw"
// height = "100vh"
// viewBox = "0 0 750 950"
// style = "background-color:hsl(100, 0%, 100%);"
// xmlns: inkscape = "http://www.inkscape.org/namespaces/inkscape"
// inkscape: version = "1.1.1 (c3084ef, 2021-09-22)" >
//   < path d = "M 0 0 M 750 950" > < /path>
//   < g id = "A Background" inkscape: groupmode = "layer" inkscape: label = "A Background" >
//     < polyline style = "fill:none;stroke-width:1.3;stroke:hsl(226,60%,77%);" points = "25 25 725 25 725 900 25 900 25 25 " >
//       < /polyline >
//   < /g>
//   < g id = "B Shadow" inkscape: groupmode = "layer" inkscape: label = "B Shadow" >
//     < /g >
//   < g id = "B Fissures" inkscape: groupmode = "layer" inkscape: label = "Rings" >
//     < /g>
//   < g id = "B Outline" inkscape: groupmode = "layer" inkscape: label = "B Outline" >
//     < /g >
// < /svg >
function exportSVG() {
  let writer = createWriter("squiggle_" + squiggleNumber + ".svg");
  let openingInfo = '<svg xmlns="http://www.w3.org/2000/svg" width="5.5in" height="4.25in" viewBox="0 0 550 425" style="background-color:hsl(100, 0%, 100%);" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" inkscape:version="1.1.1 (c3084ef, 2021-09-22)"> \n';
  writer.write(openingInfo)
  let groupInfo = '<g id="Squiggle" inkscape:groupmode="layer" inkscape:label="Rings"><g id="Rings" inkscape:groupmode="layer" inkscape:label="Rings">\n'
  writer.write(groupInfo);
  // let svg = '<!DOCTYPE html> < html > < body > < h1 > My first SVG < /h1> < svg width = "100" height = "100" > ';
  for(let i = 0; i < rings.length; i += ringSpacing) {
    // let convertedColor = hsv_to_hsl(ringColors[i]["levels"][0], ringColors[i]["levels"][0], ringColors[i]["levels"][0]);
    // console.log(convertedColor)
    let circleInfo = '<circle cx="' + ringCenters[i].x + '" cy="' + ringCenters[i].y + '" r="' + ringSizes[i] + '" stroke="rgb(' + ringColors[i]["levels"][0] + ',' + ringColors[i]["levels"][1] + ',' + ringColors[i]["levels"][2] + ')" stroke-width="0.5" fill="none"/>\n';
    // let polygonInfo = '<polygon style="fill:none;stroke-width:1;stroke:hsl(226,60%,77%);" points="';
    // // svg += '<polygon points="';
    // for(let j = 0; j < rings[i].length; j++) {
    //   // svg += rings[i][j].x +", "+rings[i][j].y+" ";
    //   polygonInfo += rings[i][j].x + ", " + rings[i][j].y + " ";
    // }
    // // svg += '"/>';
    // polygonInfo += '"/> \n';
    // writer.write(polygonInfo)
    writer.write(circleInfo)
  }
  let closeLayer = '</g></g>';
  let nextLayer = '<g id="Text" inkscape:groupmode="layer" inkscape:label="Text">\n';
  writer.write(closeLayer);
  writer.write(nextLayer);
  // let textSnippet = '<text font-family="-apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif" font-size="18" font-weight="400" fill="black" x="50" y="50">Some Text</text>';
  // writer.write(textSnippet)
  writer.write(displayWordsAsSVG())
  let closingInfo = '</g></svg>\n'
  writer.write(closingInfo)
  writer.close();
  // return svg;
}

function addRing(x, y, sz) {
  sz = sz / 2 * scaler
  let ringNodes = [];
  for(let i = 0; i <= 360; i += 1) {
    ringNodes.push(createVector(x + sin(radians(i)) * sz, y + cos(radians(i)) * sz))
  }
  ringCenters.push(createVector(x, y));
  ringSizes.push(sz);
  return ringNodes;
  // rings.push(ringNodes)
}

function spacedOutRings(arr) {
  let v = [];
  for(let i = 0; i < arr.length; i += 2) {
    v.push(arr[i]);
  }
  return v;
}

function drawRings() {
  for(let i = 0; i < ringCenters.length; i += ringSpacing) {
    grayscale ? stroke(0) : stroke(ringColors[i])
    circle(ringCenters[i].x, ringCenters[i].y, ringSizes[i] * 2)
  }
}

function drawCentralLine() {
  beginShape()
  for(let i = 0; i < ringCenters.length; i++) {
    vertex(ringCenters[i].x, ringCenters[i].y)
  }
  endShape();
}

function drawSquiggleOutline(d){
let v = inflate(ringCenters, d)
console.log(v);
beginShape();
for(let i=0;i<v.length;i++){
vertex(v[i].x, v[i].y)
}
endShape();
}

function drawArr(arr) {
  // console.log(rings[0])
  noFill();
  stroke(0)
  strokeWeight(0.5);
  for(let i = 0; i < arr.length; i++) {
    //add color
    // stroke(ringColors[i])
    stroke(0);
    beginShape()
    for(let j = 0; j <= arr[i].length - 1; j++) {
      vertex(arr[i][j].x, arr[i][j].y);
    }
    endShape();
  }
}

function quickDraw(arr) {
  for(let i = 0; i < arr.length; i++) {
    ellipse(arr[i].x, arr[i].y, 5, 5)
  }
}

function displayWords() {
  stroke(0);
  for(let i = 0; i < borderAndWords.length; i++) {
    for(let j = 0; j < borderAndWords[i][1].length - 1; j++) {
      // console.log(borderAndWords[i][1][j+1])
      line(borderAndWords[i][1][j].x, borderAndWords[i][1][j].y, borderAndWords[i][1][j + 1].x, borderAndWords[i][1][j + 1].y);
    }
  }
}

function displayWordsAsSVG() {
  let paths = '';
  stroke(0);
  for(let i = 0; i < borderAndWords.length; i++) {
    paths += '<polyline points="'
    for(let j = 0; j < borderAndWords[i][1].length; j++) {
      paths += borderAndWords[i][1][j].x + ", " + borderAndWords[i][1][j].y + " ";
      // console.log(borderAndWords[i][1][j+1])
      // line(borderAndWords[i][1][j].x, borderAndWords[i][1][j].y,borderAndWords[i][1][j+1].x, borderAndWords[i][1][j+1].y);
    }
    paths += '" fill="none" stroke="black" stroke-width="0.5"/>';
  }
  // console.log(paths)
  return paths;
}

function keyPressed() {
  if(keyCode === 32) {
    if(backgroundIndex < backgroundArray.length - 1) {
      backgroundIndex++;
    } else {
      backgroundIndex = 0;
    }
  }
}

function mouseClicked() {
  if(loops === false) {
    loops = true;
  } else {
    loops = false;
  }
}

function rnd() {
  seed ^= seed << 13;
  seed ^= seed >> 17;
  seed ^= seed << 5;
  return (((seed < 0) ? ~seed + 1 : seed) % 1000) / 1000;
}

function getBB(arr) {
  let minX = 99999999;
  let minY = 999999999;
  let maxX = -99999999;
  let maxY = -99999999;
  for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr[j].length; i++) {
      minX = Math.min(minX, arr[j][i].x);
      minY = Math.min(minY, arr[j][i].y);
      maxX = Math.max(maxX, arr[j][i].x);
      maxY = Math.max(maxY, arr[j][i].y);
    }
  }
  bbWidth = maxX - minX;
  bbHeight = maxY - minY;
  let mp = createVector((minX + maxX) / 2, (minY + maxY) / 2);
  return [
    [createVector(minX, minY), createVector(maxX, minY), createVector(maxX, maxY), createVector(minX, maxY), createVector(minX, minY)],
    bbWidth, bbHeight, mp,
  ];
}
//scale and center a curve or shape
function centerSquiggle(arr) {
  // console.log("Scale And Center")
  let vertPadd = 30;
  let horzNudge = 0;
  let vertNudge = -20;
  let horzPadd = 20;
  let s //scalar value
  let bb = getBB(arr)
  let scaleToBox = [createVector(horzPadd + horzNudge, vertPadd + vertNudge), createVector(width - horzPadd + horzNudge, vertPadd + vertNudge), createVector(width - horzPadd + horzNudge, height - vertPadd + vertNudge), createVector(horzPadd + horzNudge, height - vertPadd + vertNudge)];
  let scaleToBoxDims = [scaleToBox[1].x - scaleToBox[0].x, scaleToBox[2].y - scaleToBox[1].y]; //width and height of box
  let scaleToBoxMidPoint = createVector((scaleToBox[1].x + scaleToBox[0].x) / 2, (scaleToBox[2].y + scaleToBox[1].y) / 2)
  // rect(scaleToBox[0].x, scaleToBox[0].y, scaleToBoxDims[0], scaleToBoxDims[1])
  // console.log(scaleToBoxDims[0] / scaleToBoxDims[1])
  // console.log(bb[1] / bb[2])
  if(scaleToBoxDims[0] / scaleToBoxDims[1] > bb[1] / bb[2]) {
    s = getScalar(bb[0][1], bb[0][2], scaleToBox[1], scaleToBox[2])
  } else {
    s = getScalar(bb[0][0], bb[0][1], scaleToBox[0], scaleToBox[1])
  }
  for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr[j].length; i++) {
      arr[j][i].sub(bb[3].x, bb[3].y)
      arr[j][i].mult(s)
    }
    ringCenters[j].sub(bb[3].x, bb[3].y);
    ringCenters[j].mult(s)
    ringSizes[j] *= s
  }
  bb = getBB(arr)
  for(let j = 0; j < arr.length; j++) {
    for(let i = 0; i < arr[j].length; i++) {
      // let addend = createVector(width / 2, height / 2)
      // arr[j][i].add(createVector(width / 2, height / 2));
      arr[j][i].add(scaleToBoxMidPoint);
    }
    // ringCenters[j].add(createVector(width / 2, height / 2))
    ringCenters[j].add(scaleToBoxMidPoint)
  }
  bb = getBB(arr)
  // console.log(bb)
  // rect(bb[0][0].x, bb[0][0].y, bb[1], bb[2])
}

function getScalar(p1, p2, p3, p4) {
  let d = [getDist(p1, p2), getDist(p3, p4)];
  return d[1] / d[0];
}

function getDist(pt1, pt2) {
  return Math.hypot(pt2.x - pt1.x, pt2.y - pt1.y);
}

function drawWord(w, pos, sz) {
  let sum = 0;
  for(let i = 0; i < w.length; i++) {
    let letterSpacing = squiggleFont[w[i]][0];
    drawLetter(squiggleFont[w[i]], createVector(pos.x + sum, pos.y), sz, borderAndWords);
    sum += parseInt(letterSpacing) * sz + sz * 25;
  }
}

function drawLetter(arr, pos, sz, arrDest) {
  if(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(i != 0) {
        let v = [];
        v.push(0)
        let l = [];
        for(let j = 0; j < arr[i].length - 2; j += 2) {
          l.push(createVector(arr[i][j] * sz + pos.x, arr[i][j + 1] * sz + pos.y))
          l.push(createVector(arr[i][j + 2] * sz + pos.x, arr[i][j + 3] * sz + pos.y))
          // line(arr[i][j] * sz + pos.x, arr[i][j + 1] * sz + pos.y, arr[i][j + 2] * sz + pos.x, arr[i][j + 3] * sz + pos.y);
        }
        v.push(l)
        arrDest.push(v)
      }
    }
  }
}

function updateSquiggleData() {
  val = document.getElementById("squiggleNumberInputForm").value;
  val = parseInt(val)
  if(!isNumeric(val)) {
    val = 0;
  }
  console.log(typeof val);
  if(val > tokens.length - 1) {
    val = tokens.length - 1;
  } else if(val < 0) {
    val = 0;
  }
  squiggleNumber = val;
  // console.log(squiggleNumber)
  document.getElementById("squiggleNumberInputForm").value = squiggleNumber
  ringSpacing = 1;
  updateSequence();
}

function updateSquiggleDataRandom() {
  val = Math.floor(Math.random()*tokens.length)
  val = parseInt(val)
  if(!isNumeric(val)) {
    val = 0;
  }
  console.log(typeof val);
  if(val > tokens.length - 1) {
    val = tokens.length - 1;
  } else if(val < 0) {
    val = 0;
  }
  squiggleNumber = val;
  // console.log(squiggleNumber)
  document.getElementById("squiggleNumberInputForm").value = squiggleNumber
  ringSpacing = 1;
  updateSequence();
}



function toggleColor() {
  grayscale = !grayscale;
  updateSequence();
}

function isNumeric(num) {
  return !isNaN(num)
}

function makeRandomString() {
  let chars = "0123456789abcdef";
  let result = '0x';
  // let result = '';
  for(let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function createTokenData(id = makeRandomString()) {
  let tokenData = {
    // hashes: makeRandomString(),
    hashes: id,
    // hash: "0x0d0b0a9fd1d60d3a6ba2a9ced2033053cb6e0973660bafbd85c56af9f637e26e",
    // hashes: "0x45345710353e6f435fa780eae29539b2ec9ff1847bcc61b5d3d3a1d01dcb3a6b",
    tokenId: 1800000 + Math.floor(Math.random() * (350))
  };
  // console.log(tokenData.hashes)
  return tokenData;
}

function incrementRingSpacing() {
  ringSpacing++;
  if(ringSpacing > 10) {
    ringSpacing = 10;
  }
  if(ringSpacing < 1) {
    ringSpacing = 1;
  }
  document.getElementById("currentRingSpacing").value = ringSpacing
  updateSequence();
}

function decrementRingSpacing() {
  ringSpacing--;
  if(ringSpacing > 10) {
    ringSpacing = 10;
  }
  if(ringSpacing < 1) {
    ringSpacing = 1;
  }
  document.getElementById("currentRingSpacing").value = ringSpacing
  updateSequence();
}

function inflate(arr, d, start = 1, end = 1) {
  let v = [];
  v.push(pointFrom(arr[0], findNormal2Pt(arr[0], arr[1]), d * start));
  for(let i = 1; i < arr.length - 1; i++) {
    v.push(pointFrom(arr[i], findNormal3Pt(arr[i - 1], arr[i], arr[i + 1]), d * map(i, 1, arr.length - 1, start, end)))
  }
  v.push(pointFrom(arr[arr.length - 1], findNormal2Pt(arr[arr.length - 2], arr[arr.length - 1]), d * end));
  v.push(pointFrom(arr[arr.length - 1], findNormal2Pt(arr[arr.length - 1], arr[arr.length - 2]), d * end));
  for(let i = arr.length - 2; i > 0; i--) {
    // console.log("hello")
    v.push(pointFrom(arr[i], findNormal3Pt(arr[i + 1], arr[i], arr[i - 1]), d * map(i, arr.length - 1, 1, end, start)))
  }
  v.push(pointFrom(arr[0], findNormal2Pt(arr[0], arr[1]) + 180, d * start));
  // console.log(v);
  return v;
}
//finds the average normal between three points (rouded), good for corners
//d is distance, returns new point
function findNormal3Pt(p0, p1, p2 = pv(0, 0)) {
  let ang1 = round(pointDir(p0, p1)) + 90;
  let ang2 = round(pointDir(p2, p1)) + 90;
  // console.log(ang1, ang2)
  if(ang1 < ang2) {
    ang1 += 360;
  }
  let ave = (ang1 + ang2) / 2;
  // console.log(ave +" normal angle")
  return ave;
}

function findNormal2Pt(p0, p1) {
  return round(pointDir(p0, p1)) + 360;
}

function randomizePts(arr, amt) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].set(arr[i].x + random(-amt, amt), arr[i].y + random(-amt, amt))
  }
}

function pointFrom(pt, dir, d) {
  // console.log(pt)
  return new createVector(pt.x - Math.sin(_rad(dir)) * d, pt.y + Math.cos(_rad(dir)) * d);
}
function pointDir(pt1, pt2) {
  return _deg(Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x));
}

function _deg(v) {
  return v * 180 / Math.PI
}

function _rad(v) {
  return v * Math.PI / 180
}

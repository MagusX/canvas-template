function createLine(fromX, fromY, toX, toY, color) {
  CTX.beginPath();
  CTX.moveTo(fromX, fromY);
  CTX.lineTo(toX, toY);
  CTX.strokeStyle = color;
  CTX.stroke();
  CTX.closePath();
}

function createText(text, color, x, y, bg=false, bgColor=null) {
  if (bg == true && bgColor != null) {
    const w = CTX.measureText(text).width;
    CTX.beginPath();
    CTX.rect(x - 5, y - 12, w + 10, 15);
    CTX.fillStyle = bgColor;
    CTX.fill();
    CTX.closePath();
  }

  CTX.beginPath();
  CTX.fillStyle = color;
  CTX.fillText(text, x, y);
  CTX.closePath();
}
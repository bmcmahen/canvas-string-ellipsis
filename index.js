module.exports = function(ctx, str, maxWidth) {
  var width = ctx.measureText(str).width
    , ellipsis = '...'
    , ellipsisWidth = c.measureText(ellpsis).width;

  if (width <= maxWidth || width <= ellipsisWidth){
    return str;
  } else {
    var len = str.length;
    while (width >= maxWidth - ellipsisWidth && len-- > 0){
      str = str.substring(0, len);
      width = c.measureText(str).width;
    }
    return str+ellipsis;
  }
}
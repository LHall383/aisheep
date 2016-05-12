// INPUT:  board -> [RxC] multidimensional array with each element being either
//                  "null" (empty space),
//                  "P"    (your piece),
//                  "C"    (opponent piece)
// OUTPUT: 1, 2, 3, 4, 5, 6, 7 signifying the column to drop piece

// (function bot(board) {
// })(readline());

var ROW_MAX = 6;
var COLUMN_MAX = 7;

function InBorders(row, column)
{
    if(row>=0 && row<ROW_MAX && column>=0 && column<COLUMN_MAX)
    {
        return true;
    }else{
        return false;
    }
}

function IsPlayable(boardToUse, row, column)
{
    if(InBorders(row, column) == false)
    {
      return false;
    }
    if(row===ROW_MAX-1 && column>=0 && column<COLUMN_MAX)
    {
        if(boardToUse[row][column]=="null")
            return true;
    }
    if(row>=0 && row<ROW_MAX-1 && column>=0 && column<COLUMN_MAX)
    {
        if(boardToUse[row+1][column]!="null" && boardToUse[row][column]=="null")
        {
            return true;
        }
    }

    return false;
}

function checkHorizontalWin(boardToUse, pieceToFind)
{
  //iterate through rows
  for(var r = 0; r < ROW_MAX; r++)
  {
    //iterate through columns
    for(var c = 0; c < 4; c++)
    {
      var count = 0; //count how many pieces are found
      var cEmpty = "null"; //column of win position

      //iterate through 4 spaces
      for(var cDelta = 0; cDelta < 4; cDelta++)
      {
        //if piece is found, increase count
        if(boardToUse[r][c+cDelta] == pieceToFind)
        {
          count++;
        }
        //if space is empty, save the column of that space
        if(boardToUse[r][c+cDelta] == "null")
        {
          cEmpty = c+cDelta;
        }
      }
      //if 3 of 4 are taken and the remaining space is playable, return true
      if(count == 3 && IsPlayable(boardToUse, r, cEmpty) == true)
      {
        return {
          found: true,
          column: cEmpty
        };
      }
    }
  }
  //win not found, return false
  return{
    found: false,
    column: 0
  }
}

function checkVerticalWin(boardToUse, pieceToFind)
{
  //iterate through columns
  for(var c = 0; c < COLUMN_MAX; c++)
  {
    var r = ROW_MAX - 1;
    var count = 0;
    while(InBorders(r, c) && boardToUse[r][c] != "null")
    {
      if(boardToUse[r][c] == pieceToFind)
      {
        count++;
      }
      else
      {
        count = 0;
      }
      r--;
    }
    if(count >= 3)
    {
      return{
        found: true,
        column: c
      };
    }
  }
  return{
    found: false,
    column: 1
  };
}

// INPUT:  board -> [RxC] multidimensional array with each element being either
//                  "null" (empty space),
//                  "P"    (your piece),
//                  "C"    (opponent piece)
// OUTPUT: 1, 2, 3, 4, 5, 6, 7 signifying the column to drop piece

// (function bot(board) {
// })(readline());

function InBorders(row, column)
{
    if(row>=0 && row<6 && column>=0 && column<7)
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
    if(row===5 && column>=0 && column<7)
    {
        if(boardToUse[row][column]=="null")
            return true;
    }
    if(row>=0 && row<5 && column>=0 && column<7)
    {
        if(boardToUse[row+1][column]!="null" && boardToUse[row][column]=="null")
        {
            return true;
        }
    }

    return false;
}

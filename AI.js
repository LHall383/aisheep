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

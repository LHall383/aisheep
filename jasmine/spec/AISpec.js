describe("AI Test", function() {
  describe("Legal plays", function() {
    it("should return true for minimum row index", function() {
      var r = 0;
      var c = 3;
      expect(InBorders(r,c)).toBe(true);
    });

    it("should return true for maximum row index", function() {
      var r = 5;
      var c = 3;
      expect(InBorders(r, c)).toBe(true);
    });

    it("should return true for an index in a middle row", function() {
      var r = Math.floor(Math.random() * 4) + 1;
      var c = 3;
      expect(InBorders(r, c)).toBe(true);
    });

    it("should return true for minimum column index", function(){
      var r = 3;
      var c = 0;
      expect(InBorders(r,c)).toBe(true);
    });

    it("should return true for maximum column index", function() {
      var r = 3;
      var c = 6;
      expect(InBorders(r, c)).toBe(true);
    });

    it("should return true for an index in a middle column", function() {
      var r = 3;
      var c = Math.floor(Math.random() * 5) + 1;
      expect(InBorders(r, c)).toBe(true);
    });

    it("should return false for a column out of range and a row in range", function(){
      var r = 4;
      var c = -2;
      expect(InBorders(r, c)).toBe(false);
    });

    it("should return false for a row out of range and a column in range", function(){
      var r = 90;
      var c = 5;
      expect(InBorders(r, c)).toBe(false);
    });

    it("should return false for a row out of range and a column out of range", function(){
      var r = -50;
      var c = 34;
      expect(InBorders(r, c)).toBe(false);
    });

    it("should be playable if it is an empty space on the bottom row", function() {
      var board = [
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"]
      ];
      var r = 5;
      var c = Math.floor(Math.random() * 6);
      expect(IsPlayable(board, r, c)).toBe(true);
    });

    it("should not be playable if it is a filled space on the bottom row", function() {
      var board = [
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"]
      ];
      var r = 5;
      var c = Math.floor(Math.random() * 6);
      if(Math.floor(Math.random() * 2)){
        board[r][c] = "C";
      }
      else {
        board[r][c] = "P";
      }
      expect(IsPlayable(board, r, c)).toBe(false);
    });

    it("should be playable if it is an empty space with a friendly piece below it", function() {
      var board = [
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"]
      ];
      var r = 4;
      var c = Math.floor(Math.random() * 6);
      board[r+1][c] = "P";
      expect(IsPlayable(board, r, c)).toBe(true);
    });

    it("should not be playable if it is a filled space with a friendly piece below it", function() {
      var board = [
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"]
      ];
      var r = 4;
      var c = Math.floor(Math.random() * 6);
      if(Math.floor(Math.random() * 2)){
        board[r][c] = "C";
      }
      else {
        board[r][c] = "P";
      }
      board[r+1][c] = "P";
      expect(IsPlayable(board, r, c)).toBe(false);
    });

    it("should be playable if it is an empty space with an enemy piece below it", function() {
      var board = [
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"]
      ];
      var r = 4;
      var c = Math.floor(Math.random() * 6);
      board[r+1][c] = "C";
      expect(IsPlayable(board, r, c)).toBe(true);
    });

    it("should not be playable if it is a filled space with an enemy piece below it", function() {
      var board = [
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"],
        ["null", "null", "null", "null", "null", "null", "null"]
      ];
      var r = 4;
      var c = Math.floor(Math.random() * 6);
      if(Math.floor(Math.random() * 2)){
        board[r][c] = "C";
      }
      else {
        board[r][c] = "P";
      }
      board[r+1][c] = "C";
      expect(IsPlayable(board, r, c)).toBe(false);
    });
  });
});

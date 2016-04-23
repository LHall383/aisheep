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
      var r = Math.floor(Math.random(5));
      var c = 3;
      expect(InBorders(r, c)).toBe(true);
    });

    it("should return true for ")

  });
});

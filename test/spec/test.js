(function () {
  "use strict";

  describe("checkground()", function(){

    jasmine.getFixtures().fixturesPath = "spec/fixtures";

		var testInput, testWrapper;

		beforeEach(function() {
			loadFixtures("fixtures.html");
			testInput = $(".default-test");
			testInput.checkground();
      testWrapper = testInput.parent();
		});

		afterEach(function(){
			$("#test-container").remove();
		});

    describe("init", function(){

      describe(".initDom()", function(){
        it("should wrap the original control in div.checkground-wrapper", function(){
          expect(testInput.parent()).toBeInDOM();
          expect(testInput.parent()).toHaveClass("checkground-wrapper");
        });

        it("should hide the original control", function(){
          expect(testInput).toBeHidden();
        });

        it("should include should add .checkground-original to the element", function(){
          expect(testInput).toHaveClass("checkground-original");
        });

        describe("given a checked checkbox", function(){
          it("should add the .checkground-checked on the wrapper element", function(){
            testInput = $(".checked-test");
            testInput.checkground();
            testWrapper = testInput.parent();
            expect(testWrapper).toHaveClass("checkground-checked");
          });
        });

      });

      describe(".bindElements()", function(){
        describe("div.checkground-wrapper on click", function(){
          it("should toggle .checkground-checked on the wrapper element", function(){
            testWrapper.click();
            expect(testWrapper).toHaveClass("checkground-checked");

            testWrapper.click();
            expect(testWrapper).not.toHaveClass("checkground-checked");
          });

          it("should set the checked attribute of the original element", function(){
            testWrapper.click();
            expect(testInput).toHaveAttr("checked", "checked");

            testWrapper.click();
            expect(testInput).not.toHaveAttr("checked", "checked");
          });
        });

        describe("input change", function(){
          it("should toggle the checkground-checked class on change", function(){
            testInput.attr("checked", true).trigger("change");
            expect(testWrapper).toHaveClass("checkground-checked");
          });
        });
      });

    });

  });

})();

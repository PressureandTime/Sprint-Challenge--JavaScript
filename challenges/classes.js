// 1. Copy and paste your prototype in here and refactor into class syntax.


class CubeMaker {
  constructor(cuboidData) {
    this.length = cuboidData.length;
    this.width = cuboidData.width;
    this.height = cuboidData.height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surface() {
    return (
      2
            * (this.length * this.width
                + this.length * this.height
                + this.width * this.height)
    );
  }
}


const test = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,

});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(test.volume()); // 100
console.log(test.surface()); // 130


// function CuboidMaker(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }

//   CuboidMaker.prototype.volume = function () {
//     return this.length * this.width * this.height;
//   };

//   CuboidMaker.prototype.surface = function () {
//     return (
//       2
//       * (this.length * this.width
//         + this.length * this.height
//         + this.width * this.height)
//     );
//   };


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

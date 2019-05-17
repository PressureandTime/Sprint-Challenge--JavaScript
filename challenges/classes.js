class CuboidMakers {
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

class CubeMaker extends CuboidMakers {
  constructor(cuboidData) {
    super(cuboidData);
    this.size = cuboidData.size;
  }
}

const test = new CuboidMakers({
  length: 4,
  width: 5,
  height: 5,
});

const test2 = new CubeMaker({
  length: 8,
  width: 12,
  height: 20,
  size: 'pretty big',
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(test.volume());
console.log(test.surface());
console.log(test2.volume());


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

/**

// openjscad code for pj341 model
// https://openjscad.xyz/#

 */

const jscad = require('@jscad/modeling')
const { line, polygon, star, circle, rectangle } = jscad.primitives
const { extrudeRectangular, extrudeLinear, extrudeRotate } = jscad.extrusions
const { translate } = jscad.transforms
const { expand } = jscad.expansions
const { union, subtract, intersect } = jscad.booleans

const main = () => {
  const shapes = []

  const poly = polygon({ points: [[-4.5, -5.3], [-4.5, 4.5], [-3, 5.3], [+3, 5.3], [4.5, 4.5], [4.5, -5.3], [-4.5, -5.3]].reverse() })
  const extrudedPoly = extrudeLinear({ height: 13 }, poly)
  shapes.push(translate([0, 0, 0], extrudedPoly))
  
  const hole = circle({radius: 8/2, segments: 20});
  const hole_in_hole = circle({radius: 3.8/2, segments: 20});
  const tube = subtract(hole, hole_in_hole);
  const extrudedCircle = extrudeLinear({ height: 4.5 }, tube);
  shapes.push(translate([0,0,13], extrudedCircle));
  
  const leg1 = rectangle({size: [0.3, 2]});
  const leg2 = rectangle({size: [2, 0.3]});
  const leg3 = rectangle({size: [2, 0.3]});
  
  const leg1_ext = extrudeLinear({height: -4.5}, leg1);
  const leg2_ext = extrudeLinear({height: -4.5}, leg2);
  const leg3_ext = extrudeLinear({height: -4.5}, leg3);
  
  shapes.push(translate([7.4/2,0,0], leg1_ext));
  shapes.push(translate([0,4,0], leg2_ext));
  shapes.push(translate([0,-4,0], leg3_ext));
  
  return shapes
}

module.exports = { main }


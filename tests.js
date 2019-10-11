
function calculate(x, y){
    return(x * y)
}

QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
})

QUnit.test("calc test 1", function(assert){
    assert.ok(calculate(1,1) == 1, "Passed")
})

QUnit.test("calc test 2", function(assert){
  assert.ok(calculate(2,2) == 4, "Passed")
})

QUnit.test("calc test 3", function(assert){
  assert.ok(calculate(3,3) == 9, "Passed")
})

QUnit.test("calc test 4", function(assert){
  assert.ok(calculate(4,4) == 16, "Passed")
})

QUnit.test("calc test 5", function(assert){
  assert.ok(calculate(5,5) == 25, "Passed")
})
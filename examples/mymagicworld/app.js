/*
 * var strips = require('strips');

// Load the domain and problem.
strips.load('./domain.pddl', './problem.pddl', function(domain, problem) {
    // Run the problem against the domain.
    var solutions = strips.solve(domain, problem);

    // Display each solution.
    for (var i in solutions) {
        var solution = solutions[i];

        console.log('- Solution found in ' + solution.steps + ' steps!');
        for (var i = 0; i < solution.path.length; i++) {
            console.log((i + 1) + '. ' + solution.path[i]);
        }        
    }
});

*/


var strips = require('strips'), solutions;

// Load the domain and problem.
strips.load('./domain2.pddl', './problem3.pddl', function(domain, problem) {
    // Run the problem against the domain.
    solutions = strips.solve(domain, problem);

    // Display each solution.
    for (var i in solutions) {
        var solution = solutions[i];

        console.log('- Solution found in ' + solution.steps + ' steps!');
        for (var i = 0; i < solution.path.length; i++) {
            console.log((i + 1) + '. ' + solution.path[i]);
        }        
    }
});


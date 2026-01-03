console.log("Running Unit Tests...");

// A simple test: does 1 + 1 equal 2?
if (1 + 1 === 3) {
    console.log("TEST PASSED ✅");
    process.exit(0); // Success
} else {
    console.log("TEST FAILED ❌");
    process.exit(1); // Failure (Jenkins will show a red ball)
}
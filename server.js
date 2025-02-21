function generatePattern(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      console.log(`*`);
    } else if (i === 2) {
      console.log(`/**\\`);
    } else {
      console.log(`/${"*".repeat(i + 1)}\\`);
    }
  }
}

generatePattern(3);

const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 8; //configuring the threadpool size

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2  done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2  done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2  done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF2  done");
});
//order of output can differ evertime you run the code
//before configuring threadpool size 4 threads will be blocked by crpto(1,2,3,4) and 5th one have to wait for any thread to becoome idle and then the 5th will be executed
/*output before configuration
1 - cryptoPBKDF2 done
2 - cryptoPBKDF2  done
3 - cryptoPBKDF2  done
4 - cryptoPBKDF2  done //all 1,2,3,4 will complete at same time
5 - cryptoPBKDF2  done //take some time for completion

 */
// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });
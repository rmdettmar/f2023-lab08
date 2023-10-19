# f2023-lab08

## Running
1. Follow the directions in the lab instructions to set up a Google Cloud Vision API account and ensure you are logged
1. `npm i`
1. `npm run compile`
1. `npm run start`

If your environment is properly set up, you should get output similar to:

```
$ npm run start

> lab08@1.0.0 start
> node .

File not found
Carnegie Mellon University
Average score: 0.6978859901428223
IKEA
Intel
Castrol
BMW Motorrad
Burger King
Walt Disney World
Ford Motor Company
Mobil
Advanced Micro Devices
Mastercard
Average score: 0.9283903181552887
```

## Async-ify-ing
Reimplement the Promise version of `main` as an async version (in `mainAsync`). Your version of the code should not use `.then` and it should use `try/catch` instead of `.catch`.
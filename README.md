# f2023-lab08

To run:
1. Follow the directions in the lab instructions to set up a Google Cloud Vision API account and ensure you are logged in.
1. `npm i`
1. `npm run compile`
1. `npm run start`

If your environment is properly set up, you should get output similar to:

```
$ npm run start                                                                                                       ✔  4s   base   14:12:00  

> lab08@1.0.0 start
> node .

Logos:
{
  locations: [],
  properties: [],
  mid: '/m/0cwx_',
  locale: '',
  description: 'Carnegie Mellon University',
  score: 0.6978859901428223,
  confidence: 0,
  topicality: 0,
  boundingPoly: {
    vertices: [ [Object], [Object], [Object], [Object] ],
    normalizedVertices: []
  }
}
```
var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":509,"id":44392,"methods":[{"el":99,"sc":2,"sl":83},{"el":116,"sc":2,"sl":111},{"el":160,"sc":2,"sl":118},{"el":184,"sc":4,"sl":175},{"el":195,"sc":4,"sl":188},{"el":206,"sc":4,"sl":199},{"el":220,"sc":6,"sl":213},{"el":222,"sc":4,"sl":210},{"el":239,"sc":6,"sl":229},{"el":241,"sc":4,"sl":226},{"el":262,"sc":6,"sl":248},{"el":264,"sc":4,"sl":245},{"el":403,"sc":2,"sl":163},{"el":508,"sc":2,"sl":405}],"name":"LIBORIndexMultiCurveTest","sl":71}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_156":{"methods":[{"sl":118}],"name":"testFRAMonteCarloVersusAnalytic","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":157},{"sl":159}]},"test_299":{"methods":[{"sl":118}],"name":"testFRAMonteCarloVersusAnalytic","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":157},{"sl":159}]},"test_375":{"methods":[{"sl":118}],"name":"testFRAMonteCarloVersusAnalytic","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":157},{"sl":159}]},"test_463":{"methods":[{"sl":118}],"name":"testFRAMonteCarloVersusAnalytic","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":157},{"sl":159}]},"test_538":{"methods":[{"sl":118}],"name":"testFRAMonteCarloVersusAnalytic","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":157},{"sl":159}]},"test_578":{"methods":[{"sl":118}],"name":"testFRAMonteCarloVersusAnalytic","pass":true,"statements":[{"sl":121},{"sl":122},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":131},{"sl":133},{"sl":134},{"sl":135},{"sl":137},{"sl":138},{"sl":139},{"sl":141},{"sl":142},{"sl":143},{"sl":145},{"sl":147},{"sl":149},{"sl":151},{"sl":157},{"sl":159}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [538, 578, 156, 299, 463, 375], [], [], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [], [], [], [], [], [538, 578, 156, 299, 463, 375], [], [538, 578, 156, 299, 463, 375], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":31,"id":6389,"methods":[{"el":26,"sc":2,"sl":21},{"el":30,"sc":2,"sl":28}],"name":"AbstractAnalyticProduct","sl":16}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_530":{"methods":[{"sl":28}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":29}]},"test_67":{"methods":[{"sl":28}],"name":"testCap","pass":true,"statements":[{"sl":29}]},"test_99":{"methods":[{"sl":28}],"name":"testVolatilityCalibration","pass":true,"statements":[{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [99, 530, 67], [99, 530, 67], [], []]
var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":953,"id":17322,"methods":[{"el":286,"sc":2,"sl":284},{"el":290,"sc":2,"sl":288},{"el":294,"sc":2,"sl":292},{"el":298,"sc":2,"sl":296},{"el":302,"sc":2,"sl":300},{"el":308,"sc":2,"sl":304},{"el":312,"sc":2,"sl":310},{"el":316,"sc":2,"sl":314},{"el":321,"sc":2,"sl":318},{"el":364,"sc":2,"sl":323},{"el":369,"sc":2,"sl":366},{"el":380,"sc":2,"sl":374},{"el":388,"sc":2,"sl":382},{"el":396,"sc":2,"sl":390},{"el":404,"sc":2,"sl":398},{"el":412,"sc":2,"sl":406},{"el":420,"sc":2,"sl":414},{"el":428,"sc":2,"sl":422},{"el":436,"sc":2,"sl":430},{"el":444,"sc":2,"sl":438},{"el":452,"sc":2,"sl":446},{"el":460,"sc":2,"sl":454},{"el":465,"sc":2,"sl":462},{"el":473,"sc":2,"sl":470},{"el":481,"sc":2,"sl":478},{"el":486,"sc":2,"sl":483},{"el":491,"sc":2,"sl":488},{"el":499,"sc":2,"sl":496},{"el":507,"sc":2,"sl":504},{"el":515,"sc":2,"sl":512},{"el":520,"sc":2,"sl":517},{"el":528,"sc":2,"sl":525},{"el":536,"sc":2,"sl":533},{"el":544,"sc":2,"sl":541},{"el":552,"sc":2,"sl":549},{"el":560,"sc":2,"sl":557},{"el":568,"sc":2,"sl":565},{"el":576,"sc":2,"sl":573},{"el":584,"sc":2,"sl":581},{"el":592,"sc":2,"sl":589},{"el":600,"sc":2,"sl":597},{"el":608,"sc":2,"sl":605},{"el":616,"sc":2,"sl":613},{"el":624,"sc":2,"sl":621},{"el":632,"sc":2,"sl":629},{"el":640,"sc":2,"sl":637},{"el":648,"sc":2,"sl":645},{"el":656,"sc":2,"sl":653},{"el":664,"sc":2,"sl":658},{"el":672,"sc":2,"sl":666},{"el":680,"sc":2,"sl":674},{"el":688,"sc":2,"sl":682},{"el":696,"sc":2,"sl":690},{"el":704,"sc":2,"sl":698},{"el":712,"sc":2,"sl":706},{"el":720,"sc":2,"sl":714},{"el":728,"sc":2,"sl":722},{"el":736,"sc":2,"sl":730},{"el":744,"sc":2,"sl":738},{"el":752,"sc":2,"sl":746},{"el":760,"sc":2,"sl":754},{"el":771,"sc":2,"sl":765},{"el":782,"sc":2,"sl":776},{"el":793,"sc":2,"sl":787},{"el":801,"sc":2,"sl":795},{"el":812,"sc":2,"sl":806},{"el":820,"sc":2,"sl":814},{"el":828,"sc":2,"sl":822},{"el":836,"sc":2,"sl":830},{"el":844,"sc":2,"sl":838},{"el":855,"sc":2,"sl":849},{"el":863,"sc":2,"sl":857},{"el":871,"sc":2,"sl":865},{"el":879,"sc":2,"sl":873},{"el":887,"sc":2,"sl":881},{"el":898,"sc":2,"sl":892},{"el":906,"sc":2,"sl":900},{"el":914,"sc":2,"sl":908},{"el":922,"sc":2,"sl":916},{"el":927,"sc":2,"sl":924},{"el":932,"sc":2,"sl":929},{"el":937,"sc":2,"sl":934},{"el":942,"sc":2,"sl":939},{"el":947,"sc":2,"sl":944},{"el":952,"sc":2,"sl":949}],"name":"RandomVariableDifferentiableAADStochasticNonOptimized","sl":35},{"el":46,"id":17322,"methods":[],"name":"RandomVariableDifferentiableAADStochasticNonOptimized.OperatorType","sl":41},{"el":279,"id":17322,"methods":[{"el":60,"sc":7,"sl":57},{"el":66,"sc":9,"sl":63},{"el":70,"sc":3,"sl":54},{"el":77,"sc":3,"sl":71},{"el":97,"sc":3,"sl":79},{"el":147,"sc":6,"sl":144},{"el":156,"sc":6,"sl":153},{"el":266,"sc":7,"sl":263},{"el":278,"sc":3,"sl":99}],"name":"RandomVariableDifferentiableAADStochasticNonOptimized.OperatorTreeNode","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
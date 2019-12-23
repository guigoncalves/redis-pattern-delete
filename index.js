var Redis = require('ioredis');
var redis = new Redis({
    port:6379, 
    host: process.env.cacheHost,
    password: process.env.cachePassword
});

const pattern  = process.argv.slice(2)[0];

if (pattern == null || pattern == '') {
  console.log("Pattern not found");
  process.exit(1);
}

const count = 100;

var stream = redis.scanStream({ match: pattern, count });
var pipeline = redis.pipeline()
var localKeys = [];

stream.on('data', function (resultKeys) {
  
  console.log("Data Received", count, resultKeys.length); 

  for (var i = 0; i < resultKeys.length; i++) {
    const key = resultKeys[i];
    localKeys.push(resultKeys[i]);
    pipeline.del(resultKeys[i], () => console.log("Key " + key + " deleted."));
  }

  if(localKeys.length > count){
    pipeline.exec(()=>{console.log("one batch delete complete")});
    localKeys=[];
    pipeline = redis.pipeline();
  }

});

stream.on('end', function(){
  pipeline.exec(()=>{console.log("final batch delete complete")});
});

stream.on('error', function(err){
  console.log("error", err)
})
var colors = require("colors");

/*
  cforce helps me verify that arguments/variables that are needed
  are found at runtime. This gives me a happy medium between being
  lazy and hardcoding values, and being awesome and using env/cli
  variables/arguments. 

  To use, call `require("cforce")("env.*","cli.*",...)`
  which will return true if the variables/arguments are present,
  and false if they arent (error messages will also be `console.warn`-ed.

  I like to `process.exit(-1)` on false. I'm also not convinced this
  module makes sense for many cases. it's also not super tested.

  Keep calm, carry on.

 */
module.exports = function(){
  var err=false,args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < args.length; i++)
  {
    var arg = args[i],sp;
    if ((sp = arg.split("cli.")).length > 1)
    {
      var found = false;
      for (var j=0; j < process.argv.length; j++)
      {
        if (process.argv[j] == sp[1]) found = true;
      }
      if (!found)
      {
        console.warn(("error: "+sp[1].toString()+" wasn't found in cli arguments.").red);
        err = true;
      }
    }
    if ((sp = arg.split("env.")).length > 1)
    {
      if (typeof process.env[sp[1]] === "undefined")
      {
        console.warn(("error: "+sp[1].toString()+" wasn't found in env variables.").red);
        err = true;
      }
    }
  }
  if (err) return false; else return true;
};
cforce
======

force cli/env arguments/variables to be present at runtime.

# What?

cforce helps me verify that arguments/variables that are needed
are found at runtime. This gives me a happy medium between being
lazy and hardcoding values, and being awesome and using env/cli
variables/arguments. 

# How?

To use, call `require("cforce")("env.*","cli.*",...)`
which will return true if the variables/arguments are present,
and false if they arent (error messages will also be `console.warn`-ed.

I like to `process.exit(-1)` on false. I'm also not convinced this
module makes sense for many cases. it's also not super tested.

# Moar...
  
MIT LICENSE

Keep calm, carry on.

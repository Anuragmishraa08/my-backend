app.use((req,res , next )=>{
    console.log("hello from midllewqre")
        next();  // next is pointing nmext function 
    
});

// we have also make two or more than two middleware 
app.use((req,res , next )=>{
    console.log("hello from midllewqre")
        return res.end("hey")
    
});

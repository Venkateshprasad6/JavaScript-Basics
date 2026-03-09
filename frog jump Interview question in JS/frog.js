let x = 1;
let frogJumps = true;   

while (x <= 1000) {
    console.log("Frog is jumping at x = " + x);

    if (frogJumps) {
        x += 2;   
    } else {
        x += 3;  
    }

    frogJumps = !frogJumps;   
}

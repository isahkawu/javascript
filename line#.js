
let board = "";
for(let row = 1; row <= 8; row++) {

    for (let colum = 1; colum <= 8; colum++){
    
    if (row % 2 === 0) {
        
        board = board + "# ";
    
    }
    
    else {
    
        board = board + " #";
    
    }
  
    }
    board +=("\n");
}

  console.log(board);
  
  
  
  

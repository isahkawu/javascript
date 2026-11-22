let ChessBoard = "";

    for (let rows = 1; rows <= 8; rows++){
    
        for (let colums = 1; colums <= 8; colums++){
        
            if (rows % 2 === 0){
            
                ChessBoard += "# ";
            }
        
                else {
                
                ChessBoard += " #";
                }
                
                
                
        }
            
            ChessBoard += "\n";
    
    }
    
    console.log(ChessBoard);    

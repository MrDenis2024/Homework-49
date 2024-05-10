const createChess = (length: number) => {

    for (let i = 0; i < length; i++) {
        let row: string = '';
        let white:string = '1';
        let black:string = '0';
        if (i % 2 === 0) {
            white = '0';
            black = '1';
        }
        for (let j = 0; j < length; j++) {
            if (j % 2 === 0) {
                row += black;
            } else {
                row += white;
            }
        }
        console.log(row)
    }
};

createChess(8);
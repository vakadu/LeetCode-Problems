import { create2DArray } from "../utils";


// function maze(r, c) {


//     if(r === 1 || c === 1) {
//         return 1;
//     }

//     let l = maze(r-1, c);
//     let ri = maze(r, c-1);
//     return l+ri

    
// }

// console.log(maze(3,3));

// function maze2(r,c, result) {
//     if(r === 1 && c === 1) {
//         return [result];
//     }

//     let list = [];
//     if(r > 1) {
//         // list = list.concat(maze2(r-1, c, result + "D"));
//         list = [...list, ...maze2(r-1, c, result + "D")]
//     }

//     if(c > 1) {
//         // list = list.concat(maze2(r, c-1, result + "R"))
//         list = [...list, ...maze2(r, c-1, result + "R")]
//     }

//     return list;
// }

// console.log(maze2(3,3,""));

// function mazeDiaogonal(r,c, result) {
//     if(r === 1 && c === 1) {
//         return [result];
//     }

//     let list = [];
//     if(r > 1) {
//         list = [...list, ...mazeDiaogonal(r-1, c, result + "V")]
//     }

//     if(c > 1) {
//         list = [...list, ...mazeDiaogonal(r, c-1, result + "H")]
//     }

//     if(r > 1 && c > 1) {
//         list = [...list, ...mazeDiaogonal(r-1, c-1, result + "D")]
//     }

//     return list;
// }

// console.log(mazeDiaogonal(3,3,""));

// function mazeWithObstacles(p, r, c, b) {
//     let list = [];

//     if(r === b.length-1 && c === b[0].length - 1) {
//         return [p];
//     }


//     if(!b[r][c]) {
//         return;
//     }

//     if(r < b.length-1) {
//         const downPath = mazeWithObstacles(p + "D", r + 1, c, b);
//         if (downPath) {
//             list = list.concat(downPath);
//         }
//     }

//     if(c < b[0].length-1) {
//         const rightPath = mazeWithObstacles(p + "R", r, c + 1, b);
//         if (rightPath) {
//             list = list.concat(rightPath);
//         }
//     }

//     return list
// }

// let board = [
//     [true, true, true],
//     [true, false, true],
//     [true, true, true]
// ];

// console.log(mazeWithObstacles("", 0, 0, board));

// function mazeAllDirections(p, b, r, c) {
//     if(r === b.length - 1 && c === b.length -1) {
//         return [p]
//     };


//     if(!b[r][c]) {
//         return;
//     }

//     let list = [];
//     b[r][c] = false;

//     if(r < b.length - 1) {
//         const d = mazeAllDirections(p + "D",b, r+1, c);
//         if(d) {
//             list = list.concat(d);
//         }
//     }

//     if(r > 0) {
//         const d = mazeAllDirections(p + "U", b, r-1, c);
//         if(d) {
//             list = list.concat(d);
//         }
//     }

//     if(c < b.length - 1) {
//         const d = mazeAllDirections(p + "R", b, r, c+1);
//         if(d) {
//             list = list.concat(d);
//         }
//     }

//     if(c > 0) {
//         const d = mazeAllDirections(p + "L", b, r, c-1);
//         if(d) {
//             list = list.concat(d);
//         }
//     }

//     return list;
// }

// let board = [
//     [true, true, true],
//     [true, true, true],
//     [true, true, true]
// ];

// console.log(mazeAllDirections("", board, 0, 0));

// function mazeAllDirectionsBc(p, b, r, c) {
    // if(r === b.length - 1 && c === b.length -1) {
    //     return [p]
    // };


    // if(!b[r][c]) {
    //     return;
    // }

    // let list = [];
    // b[r][c] = false;

    // if(r < b.length - 1) {
    //     const d = mazeAllDirectionsBc(p + "D",b, r+1, c);
    //     if(d) {
    //         list = list.concat(d);
    //     }
    // }

    // if(r > 0) {
    //     const d = mazeAllDirectionsBc(p + "U", b, r-1, c);
    //     if(d) {
    //         list = list.concat(d);
    //     }
    // }

    // if(c < b.length - 1) {
    //     const d = mazeAllDirectionsBc(p + "R", b, r, c+1);
    //     if(d) {
    //         list = list.concat(d);
    //     }
    // }

    // if(c > 0) {
    //     const d = mazeAllDirectionsBc(p + "L", b, r, c-1);
    //     if(d) {
    //         list = list.concat(d);
    //     }
    // }

    // b[r][c] = true;
    // return list;
// }

// let board = [
//     [true, true, true],
//     [true, true, true],
//     [true, true, true]
// ];

// console.log(mazeAllDirectionsBc("", board, 0, 0));



function bcMazePrintingPaths(p, b, r, c, step, path) {
    if(r === b.length - 1 && c === b.length -1) {
        console.log(path.map(row => row.join(' ')).join('\n'));
        console.log(p);
        
        path.map((pa) => {
            console.log(pa);
        })

        return [p]
    };

    if(!b[r][c]) {
        return;
    }

    let list = [];
    b[r][c] = false;
    path[r][c] = step;

    if(r < b.length - 1) {
        const d = bcMazePrintingPaths(p + "D",b, r+1, c, step + 1, path);
        if(d) {
            list = list.concat(d);
        }
    }

    if(r > 0) {
        const d = bcMazePrintingPaths(p + "U", b, r-1, c, step + 1, path);
        if(d) {
            list = list.concat(d);
        }
    }

    if(c < b.length - 1) {
        const d = bcMazePrintingPaths(p + "R", b, r, c+1, step + 1, path);
        if(d) {
            list = list.concat(d);
        }
    }

    if(c > 0) {
        const d = bcMazePrintingPaths(p + "L", b, r, c-1, step + 1, path);
        if(d) {
            list = list.concat(d);
        }
    }

    b[r][c] = true;
    path[r][c] = 0;

    return list;

}

console.log(bcMazePrintingPaths("", create2DArray(3,3,true), 0, 0, 1, create2DArray(3,3,0)));


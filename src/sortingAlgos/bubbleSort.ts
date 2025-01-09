// export const BubbleSort = (array: {value:number, id:string, style:string}[], length:number) => {
//     const result: {value:number, id:string, style:string}[][] = [];
//
//     let temp: {value:number, id:string, style:string}[] = array.map(item => ({ ...item }));
//     console.log(temp);
//
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//
//
//             temp[j].style = "bar-compare";
//             temp[j + 1].style = "bar-compare";
//             result.push([...temp]);
//
//             temp = temp.map(item => ({ ...item }));
//
//             if (temp[j].value > temp[j + 1].value) {
//
//                 temp[j].style = "bar-swap";
//                 temp[j + 1].style = "bar-swap";
//                 result.push([...temp]);
//
//                 const swap = temp[j + 1];
//                 temp[j + 1] = temp[j];
//                 temp[j] = swap;
//
//                 temp = temp.map(item => ({ ...item }));
//
//                 temp[j].style = "";
//                 temp[j+1].style = "bar-sorted";
//                 result.push([...temp]);
//
//                 continue;
//
//
//             }
//
//
//             if (i === length-2){
//                 temp[j].style = "bar-sorted";
//             }else{
//                 temp[j].style = "";
//             }
//
//             temp[j + 1].style = "bar-sorted";
//             result.push([...temp]);
//
//         }
//
//
//
//
//     }
//
//     return result;
// };



export const BubbleSort = (
    array: { value: number; id: string; style: string }[],
    length: number
) => {
    const result: { value: number; id: string; style: string }[][] = [];

    let temp: { value: number; id: string; style: string }[] = array.map(item => ({ ...item }));

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {

            temp[j].style = "bar-compare";
            temp[j + 1].style = "bar-compare";
            result.push([...temp]);


            temp = temp.map(item => ({ ...item }));

            if (temp[j].value > temp[j + 1].value) {

                temp[j].style = "bar-swap";
                temp[j + 1].style = "bar-swap";
                result.push([...temp]);


                [temp[j], temp[j + 1]] = [temp[j + 1], temp[j]];

                temp = temp.map(item => ({ ...item }));


                temp[j].style = "";
                temp[j + 1].style = "bar-sorted";
                result.push([...temp]);
                continue;
            }

            if(i === length-2 ) {
                temp[j].style = "bar-sorted";
            }else{
                temp[j].style = "";
            }

            temp[j + 1].style = "bar-sorted";
            result.push([...temp]);
        }
    }

    return result;
};


export const SelectionSort = (
    array: { value: number; id: string; style: string }[],
    length: number
) => {


    const result: { value: number; id: string; style: string }[][] = [];

    let temp: { value: number; id: string; style: string }[] = array.map(item => ({ ...item }));

    for (let i = 0; i < length; i++) {

        // Assume the current position holds
        // the minimum element
        let min_idx = i;




        temp[i].style = "bar-swap"
        for(let k = i+1 ; k< length; k++){
            temp[k].style = "bar-min"
        }
        result.push([...temp]);
        temp = temp.map(item => ({ ...item }));
        let previousMinIndex = length-1;






        // Iterate through the unsorted portion
        // to find the actual minimum
        for (let j = i + 1; j < length; j++) {


            temp[j].style = "bar-compare"
            result.push([...temp]);
            temp = temp.map(item => ({ ...item }));



            if (temp[j].value < temp[min_idx].value) {

                // Update min_idx if a smaller element is found
                min_idx = j;



                temp[previousMinIndex].style = "bar-min"
                temp[j].style = "bar-swap"
                result.push([...temp]);
                temp = temp.map(item => ({ ...item }));
                previousMinIndex = j


            } else {

                temp[j].style = "bar-min"
                result.push([...temp]);
                temp = temp.map(item => ({ ...item }));
            }


        }


        temp[i].style = "bar-final"
        temp[previousMinIndex].style = "bar-final"
        result.push([...temp]);
        temp = temp.map(item => ({ ...item }));
        temp[i].style = "bar-final"
        temp[previousMinIndex].style = "bar-final"
        result.push([...temp]);
        temp = temp.map(item => ({ ...item }));




        // correct position
        const flag:number = temp[i].value;
        temp[i].value = temp[min_idx].value;
        temp[min_idx].value = flag;





        temp[previousMinIndex].style = "bar-min"
        temp[i].style = "bar-sorted"
        result.push([...temp]);
        temp = temp.map(item => ({ ...item }));


    }
    


    return result;

}
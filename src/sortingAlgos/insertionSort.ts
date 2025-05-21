export const InsertionSort = (
    array: { value: number; id: string; style: string }[],
    length: number
) => {

    const result: { value: number; id: string; style: string }[][] = [];

    let temp: { value: number; id: string; style: string }[] = array.map(item => ({ ...item }));




        temp[0].style = "bar-sorted"
        for(let i = 1; i < length; i++) {
            temp[i].style = 'bar-min'
        }
        result.push([...temp]);
        temp = temp.map(item => ({ ...item }));


        for (let i = 1; i < length; i++) {
            let key:number = temp[i].value;

            temp[i].style = "bar-compare"
            result.push([...temp]);
            temp = temp.map(item => ({ ...item }));

            let j = i - 1;







            /* Move elements of temp[0..i-1], that are
               greater than key, to one position ahead
               of their current position */




            temp[j].style = "bar-swap";
            temp[i].style = "bar-swap";
            result.push([...temp]);
            temp = temp.map(item => ({ ...item }));

            
            while (j >= 0 && temp[j].value > key) {

                const flag = temp[j+1];

                temp[j + 1] = temp[j];
                temp[j] = flag

                temp[j+1].style = "bar-sorted"

                result.push([...temp]);
                temp = temp.map(item => ({ ...item }));


                if(j-1 != -1){
                    if(temp[j-1].value < key){
                        temp[j].style = "bar-sorted"
                    }
                }else{
                    temp[j].style = "bar-sorted"
                }



                result.push([...temp]);
                temp = temp.map(item => ({ ...item }));
                j = j - 1;
            }

            if(j < 0){
                j = j+1
            }



            temp[j].style = "bar-sorted"
            temp[j+1].style = "bar-sorted"
            result.push([...temp]);
            temp = temp.map(item => ({ ...item }));











        }






    result.push([...temp]);

    return result;
};





export const MergeSort = (
    array: { value: number; id: string; style: string }[],
    length: number

) => {

    const result: { value: number; id: string; style: string }[][] = [];
    const temp: { value: number; id: string; style: string }[] = array.map(item => ({ ...item }));

    function merge(arr:{ value: number; id: string; style: string }[], left:number, mid:number, right:number)
    {


        const n1 = mid - left + 1;
        const n2 = right - mid;


        // Create temp arrays
        const L = new Array(n1);
        const R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++){
            L[i] = arr[left + i];
        }

        for (let j = 0; j < n2; j++){
            R[j] = arr[mid + 1 + j];
        }


        let i = 0, j = 0;
        let k = left;

        // Merge the temp arrays back into arr[left..right]
        while (i < n1 && j < n2) {
            if (L[i].value <= R[j].value) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }



        result.push([...temp]);

    }

    let flag = 0;

    function mergeSort(array:{ value: number; id: string; style: string }[] , left:number, right:number) {
        if (left >= right)
            return;

        if (flag == 0){
            for(let i = 0 ; i<array.length; i++){
                array[i].style= 'bar-purple'
            }
            console.log('------------->', flag)
        }


        const mid = Math.floor(left + (right - left) / 2);

        if (flag == 0){
            for (let i = 0; i<= mid; i++){
                array[i].style = 'bar-compare'
            }
            flag = 1;
        }

        mergeSort(array, left, mid);


        if (flag == 1){
            for (let i = 0; i< mid; i++){
                array[i].style = ''
            }
            flag = 2;
        }


        mergeSort(array, mid + 1, right);
        merge(array, left, mid, right);
    }

    mergeSort(temp, 0, length-1);
    console.log(result)

    return result;

}



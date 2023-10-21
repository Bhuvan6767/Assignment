import java.util.ArrayList;
import java.util.Collections;
import java.util.Arrays;
import java.util.Random;

class ArrayShuffle {
    public static void main(String[] args) {
        
        Integer[] arr = {1, 2, 3, 4, 5, 6, 7};
        ArrayList<Integer> arrayList = new ArrayList<>();
        Collections.addAll(arrayList, arr);
        Collections.shuffle(arrayList);
        arrayList.toArray(arr);
        for (int num : arr) {
            System.out.print(num + " ");
        }
        
        
        // or
        
        int[] array = { 1, 2, 3, 4, 5, 6, 7 };
		
		Random rand = new Random();
		
		for (int i = 0; i < array.length; i++) {
			int randomIndexToSwap = rand.nextInt(array.length);
			int temp = array[randomIndexToSwap];
			array[randomIndexToSwap] = array[i];
			array[i] = temp;
		}
		System.out.println(Arrays.toString(array));
    }
}